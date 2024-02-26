import React, { useState } from "react";
import { Select, Space } from "antd";
import AntUpload from "src/components/common/Dropzone/AntUpload";
import { useFormik } from "formik";
import fetcher from "src/dataProvider";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { ErrorToast, SuccessToast } from 'src/components/common/Toater';
import { useRouter } from "next/router";
const Index = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            name: "",
            status:"ACTIVE",
            description:"",
            photos:[],
            type:"SIGHTSEEING"
        },
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
            createSightSeeing(values);
            setSubmitting(false);
        },
    })
    const { mutate: createSightSeeing } = useMutation(
        (data) => fetcher.post(`/v1/master-data`, data, "raw"),
        {
            onSuccess: (res) => {
                SuccessToast.fire({
                    icon: "success",
                    title: "Sightseeing Place Added Successfully!"
                });
                router.push('/admin/master-data/sightseeing', undefined, {
                    shallow: true,
                })
            },
            onError: ({ response }) => {
                console.log(response.data);
                ErrorToast.fire({
                    icon: "error",
                    title: response.data.message || "Unable To Add Sightseeing"
                })
            },
        }
    );

    const handleUploadComplete = (response) => {
        let photoFormikValue = []
		console.log(response)
        response.map((photo) =>{
           photoFormikValue.push(photo.response.data)
        })
		formik.setFieldValue("photos",photoFormikValue);
	};
	return (
		<div className="p-5">
			<div className="bg-white p-4 rounded-xl shadow-md">
				<form className="grid grid-cols-2 grid-rows-3 gap-4" onSubmit={formik.handleSubmit}>
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
									autoComplete="name"
									className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
									placeholder="Ghar-e-hira"
									onChange={(event) => {
										formik.setFieldValue("name", event.target.value);
									}}
								/>
							</div>
						</div>
						{formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
					</div>
					<div className="col-start-2 row-start-1">
						<label
							htmlFor="status"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Status
						</label>
						<Space direction="vertical" style={{ width: "100%" }} className="">
							<Select
								// status="success"
								style={{ width: "100%" }}
								id="status"
								name="status"
								defaultValue="ACTIVE"
                                onChange={(event) => {
                                    formik.setFieldValue("status", event);
                                }}
							>
								<Select.Option value="ACTIVE">Active</Select.Option>
								<Select.Option value="IN_ACTIVE">InActive</Select.Option>
							</Select>
						</Space>
                        {formik.errors.status && <p className="text-red-500">{formik.errors.status}</p>}
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
                        {formik.errors.description && <p className="text-red-500">{formik.errors.description}</p>}
					</div>
					<div className="col-span-2 row-start-3">
						<label
							className="block text-sm font-medium leading-6 text-gray-900"
						>
                            Upload Place Photos
						</label>
						<AntUpload
							multiple={true}
							useType={"POST"}
							maxUploadCount={10}
							onUploadComplete={handleUploadComplete}
                            accept="image/png,image/jpeg,image/webp,image/jpg"
						/>
                        {formik.errors.photos && <p className="text-red-500">{formik.errors.photos}</p>}
					</div>
					<div className="col-span-2 row-start-4">
						<button
							type="submit"
							className="float-right inline-flex items-center gap-x-2 rounded-md bg-[#06603C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Index;
export async function getStaticProps() {
	return {
		props: {
			asLayout: "DefaultLayout",
			withSideBar: true,
			pageTitle: "Create Sightseeing",
		},
	};
}
