import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { useMutation } from "react-query";
import { RingLoader } from "react-spinners";
import fetcher from "src/dataProvider";
import * as Yup from "yup";
import { Select, Space } from "antd";
import {  AiOutlineEdit} from "react-icons/ai";
import { SuccessToast } from "src/components/common/Toater";
const Index = () => {
	const [loaderActive, setLoaderActive] = useState(false);
    const [isViewActive,setViewActive] = useState(true);
    const [formInitialValues,setFormInitialValues] = useState({
        name: "",
        status: "ACTIVE",
        type: "PLACE"
    })
	const router = useRouter();
	const { id } = router.query;


    const initialValuesStatic = {
        name: "",
        status: "",
        type: "PLACE"
    }
    const formik = useFormik({
        initialValues: formInitialValues || initialValuesStatic,
        enableReinitialize:true,
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(3, "Place name must be at least 3 characters")
                .max(100, "Place name must be at most 100 characters")
                .required("Place name is required"),
            status: Yup.string()
                .oneOf(["ACTIVE", "IN_ACTIVE"], "Status must be either 'ACTIVE' or 'IN ACTIVE'")
                .required("Status is required")
        }),
        onSubmit: (values, { setSubmitting }) => {
            console.log("onsubmit", values);
            updateLocalTransportPlace(values)
            setSubmitting(false);
        },
    })

    const { mutate: updateLocalTransportPlace } = useMutation(
        (data) => fetcher.patch(`/v1/master-data/${id}`, data, "raw"),
        {
            onSuccess: (res) => {
                SuccessToast.fire({
                    icon: "success",
                    title: "Local Transport Place Updated Successfully!"
                });
                setViewActive(true);
            },
            onError: ({ response }) => {
                console.log(response.data);
                ErrorToast.fire({
                    icon: "error",
                    title: response.data.message || "Unable To Update Local Transport Place"
                })
            },
        }
    );

	const { mutate: fetchLocalTransportPlaceDetail } = useMutation(
		() => fetcher.get(`/v1/master-data/${id}`, "raw"),
		{
			onSuccess: async (res) => {
				const { name, status, type } = res.data;
				setFormInitialValues({
					name: name,
					status: status,
					type: type,
				});
				setLoaderActive(false);
			},
			onError: ({ response }) => {
				console.log(response.data);
				ErrorToast.fire({
					title: `${response.data.message || "Unable To Fetch Local Transport Place Detail"}`,
					icon: "error",
				});
				router.push("/admin-panel/master-data/local-transport", undefined, {
					shallow: true,
				});
			},
		},
	);


    useEffect(() => {
        setLoaderActive(true);
        if (id) {
            fetchLocalTransportPlaceDetail();
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
											placeholder="Zamzam..."
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
											defaultValue={formInitialValues.status}
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
};

export default Index;

export async function getServerSideProps() {
    return {
        props: {
            asLayout: "DefaultLayout",
            withSideBar: true,
            pageTitle: 'Local Transport Place Update',
        },
    };
}