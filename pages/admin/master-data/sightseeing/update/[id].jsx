"use client"
import React, { useEffect, useState } from "react";
import { Modal, Select, Space, Upload } from "antd";
import { useFormik } from "formik";
import fetcher from "src/dataProvider";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { ErrorToast, SuccessToast } from 'src/components/common/Toater';
import { useRouter } from "next/router";
import LoadingOverlay from "react-loading-overlay";
import { RingLoader } from "react-spinners";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import {  AiOutlineEdit} from "react-icons/ai";
const Index = () => {
    const [existingPhotosList, setExistingPhotosList] = useState([])
    const [isViewActive,setViewActive] = useState(true);
    const [formInitialValues,setFormInitialValues] = useState({
        name: "",
        status: "",
        description: "",
        photos: [],
        type: "SIGHTSEEING"
    })
    const initialValuesStatic = {
        name: "",
        status: "",
        description: "",
        photos: [],
        type: "SIGHTSEEING"
    }
    const [loaderActive, setLoaderActive] = useState(false)
    const router = useRouter();
    const { id } = router.query;
    const formik = useFormik({
        initialValues: formInitialValues || initialValuesStatic,
        enableReinitialize:true,
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(3, "Place name must be at least 3 characters")
                .max(100, "Place name must be at most 100 characters")
                .required("Place name is required"),
            photos: Yup.array()
                .max(10, "Maximum of 10 photos allowed"),
            description: Yup.string()
                .required("Description is required"),
            status: Yup.string()
                .oneOf(["ACTIVE", "IN_ACTIVE"], "Status must be either 'ACTIVE' or 'IN ACTIVE'")
                .required("Status is required")
        }),
        onSubmit: (values, { setSubmitting }) => {
            console.log("onsubmit", values);
            updateSightSeeing(values)
            setSubmitting(false);
        },
    })
    const { mutate: updateSightSeeing } = useMutation(
        (data) => fetcher.patch(`/v1/master-data/${id}`, data, "raw"),
        {
            onSuccess: (res) => {
                SuccessToast.fire({
                    icon: "success",
                    title: "Sightseeing Place Updated Successfully!"
                });
                setViewActive(true);
            },
            onError: ({ response }) => {
                console.log(response.data);
                ErrorToast.fire({
                    icon: "error",
                    title: response.data.message || "Unable To Update Sightseeing"
                })
            },
        }
    );
    const fetchMediaUrl = async (mediaName) => {
        try {
            let mediaFetch = await axios.get(`${process.env.NEXT_PUBLIC_MEDIA_SERVICE_URL}/upload`, {
                headers: {
                    "Service-Name": process.env.NEXT_PUBLIC_MEDIA_SERVICE_NAME || 'adil-travels',
                    "Object-Name": mediaName
                }
            });
            return mediaFetch.data;
        } catch (error) {
            console.error(error);
            ErrorToast.fire({
                title: error.message || "Failed to fetch photo",
                icon: "error"
            })
        }
    }
    const { mutate: fetchSightSeeingDetail } = useMutation(
        () => fetcher.get(`/v1/master-data/${id}`, "raw"),
        {
            onSuccess: async (res) => {
                const { name, photos, status, description, type } = res.data;
                setFormInitialValues({
                    name: name,
                    photos: photos,
                    status: status,
                    description: description,
                    type: type
                })
                const newPhotosList = [];
                if (Array.isArray(photos) && photos.length > 0) {
                    for (const photo of photos) {
                        try {
                            let imageUrl = await fetchMediaUrl(photo);
                            newPhotosList.push({ name: `${name}-photo-${newPhotosList.length + 1}`, status: "done", url: imageUrl?.data || '', existingPhotoName: photo });
                        } catch (error) {
                            console.error(error);
                            ErrorToast.fire({
                                title: error.message || "Failed to fetch photo",
                                icon: "error"
                            });
                        }
                    }
                }
                setExistingPhotosList(newPhotosList);
                setLoaderActive(false)
            },
            onError: ({ response }) => {
                console.log(response.data);
                ErrorToast.fire({
                    title:`${response.data.message || "Unable To Fetch Sightseeing Detail"}`,
                    icon: "error"
                })
                router.push('/admin/master-data/sightseeing', undefined, {
                    shallow: true,
                })
            },
        }
    );
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
    };
    const handleChange = ({ fileList: newFileList, file: uploadedFile, event: uploadingEven }) => {
        if (newFileList.length > 0) {
            if (uploadedFile?.status) {
                setExistingPhotosList(newFileList);
            }
            if(uploadedFile?.status  === 'done'){
            const newPhotos = newFileList.map(file => {
                if (file.hasOwnProperty('existingPhotoName')) {
                    return file.existingPhotoName;
                } else if (file.hasOwnProperty('response')) {
                    return file.response.data;
                }
            });
            formik.setFieldValue('photos', [...newPhotos]);
        }
        }
    };
    
    const beforeUpload = (file) => {

        return new Promise((resolve, reject) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp' || file.type === 'image/jpg';
            if (!isJpgOrPng) {
                SuccessToast.fire({ title: 'You can only upload JPG/PNG file!', icon: "warning" });
                reject(false);
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                SuccessToast.fire({ title: 'Image must smaller than 2MB!', icon: "warning" });
                reject(false);
            }
            resolve(true)
        })

    };
    const uploadButton = (
        <>
            <button
                style={{
                    border: 0,
                    background: "none",
                }}
                type="button"
            >
                <PlusOutlined />
                <div
                    style={{
                        marginTop: 8,
                    }}
                >
                    Upload
                </div>
            </button>
        </>
    );
    useEffect(() => {
        setLoaderActive(true);
        if (id) {
            fetchSightSeeingDetail();
        }
    }, [id])
    return (
		<>
			<div className="p-5">
				<LoadingOverlay
					active={loaderActive}
					spinner={<RingLoader color="#36d7b7" />}
					styles={{
						overlay: (base) => ({
							...base,
							borderRadius: "0.75rem",
						}),
					}}
				>
					<div className="bg-white p-4 rounded-xl shadow-md">
						<form
							className="grid grid-cols-2 grid-rows-3 gap-4"
							onSubmit={formik.handleSubmit}
						>
							<div className="">
								<label
									htmlFor="name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Place Name
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
										<input
											type="text"
											name="name"
											id="name"
											readOnly={isViewActive}
											value={formik.values.name}
											autoComplete="name"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="Ghar-e-hira"
											onChange={(event) => {
												formik.setFieldValue("name", event.target.value);
											}}
										/>
									</div>
								</div>
								{formik.errors.name && (
									<p className="text-red-500">{formik.errors.name}</p>
								)}
							</div>
							<div className="col-start-2 row-start-1">
								<label
									htmlFor="status"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Status
								</label>
								{!loaderActive && (
									<Space
										direction="vertical"
										style={{ width: "100%" }}
										className=""
									>
										<Select
											variant="outlined"
											style={{ width: "100%" }}
											id="status"
											name="status"
											disabled={isViewActive}
											defaultValue={formik.values.status}
											onChange={(event) => {
												formik.setFieldValue("status", event);
											}}
										>
											<Select.Option value="ACTIVE">Active</Select.Option>
											<Select.Option value="IN_ACTIVE">
												InActive
											</Select.Option>
										</Select>
									</Space>
								)}

								{formik.errors.status && (
									<p className="text-red-500">{formik.errors.status}</p>
								)}
							</div>

							<div className="col-span-2 col-start-1 row-start-2">
								<label
									htmlFor="description"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Description
								</label>
								<div className="mt-2">
									<textarea
										id="description"
										name="description"
										readOnly={isViewActive}
										value={formik.values.description}
										rows="3"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={(event) => {
											formik.setFieldValue("description", event.target.value);
										}}
									></textarea>
								</div>
								<p className="mt-3 text-sm leading-6 text-gray-600">
									Write a few sentences about this place
								</p>
								{formik.errors.description && (
									<p className="text-red-500">{formik.errors.description}</p>
								)}
							</div>
							<div className="col-span-2 row-start-3">
								<label className="block text-sm font-medium leading-6 text-gray-900">
									Upload Place Photos
								</label>
								{!loaderActive && (
									<>
										<Upload
											action={`${process.env.NEXT_PUBLIC_MEDIA_SERVICE_URL}/upload`}
											method="POST"
											headers={{
												// "Content-Type": "multipart/form-data",
												"Service-Name":
													process.env.NEXT_PUBLIC_MEDIA_SERVICE_NAME ||
													"adil-travels",
											}}
											listType="picture-card"
											fileList={existingPhotosList}
											onPreview={handlePreview}
											beforeUpload={beforeUpload}
											onChange={handleChange}
											disabled={isViewActive}
											multiple={true}
											// accept={accept}
										>
											{existingPhotosList.length >= 10 ? null : uploadButton}
										</Upload>
										<Modal
											open={previewOpen}
											title={previewTitle}
											footer={null}
											onCancel={handleCancel}
										>
											<img
												alt="example"
												style={{
													width: "100%",
												}}
												src={previewImage}
											/>
										</Modal>
									</>
								)}

								{formik.errors.photos && (
									<p className="text-red-500">{formik.errors.photos}</p>
								)}
							</div>
							<div className="col-span-2 row-start-4 flex justify-end space-x-4">
								{isViewActive ? (
									<p
										
										className="inline-flex items-center px-3.5 py-2.5 text-sm font-semibold text-white bg-[#06603C] rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
										onClick={() => setViewActive(false)} // Handle click event
									>
										<AiOutlineEdit className="cursor-pointer text-2xl"/>
									</p>
								) : (
									<button
										type="submit"
										className="inline-flex items-center px-3.5 py-2.5 text-sm font-semibold text-white bg-[#06603C] rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
									>
										Update
									</button>
								)}
							</div>
						</form>
					</div>
				</LoadingOverlay>
			</div>
		</>
	);
}

export default Index;
export async function getServerSideProps() {
    return {
        props: {
            asLayout: "DefaultLayout",
            withSideBar: true,
            pageTitle: 'Sightseeing Update',
        },
    };
}