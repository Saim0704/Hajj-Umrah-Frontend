import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import fetcher from "src/dataProvider";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { ErrorToast, SuccessToast } from 'src/components/common/Toater';
const Ctable = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [places,setPlaces] = useState([]);
  const formik = useFormik({
    initialValues: {
     place:""
    },
    validationSchema: Yup.object().shape({
        place: Yup.string()
          .min(3, "Place name must be at least 3 characters")
          .max(100, "Place name must be at most 100 characters")
          .required("Place name is required")
    }),
    onSubmit: (values, { setSubmitting }) => {
      createPlace({ name: values.place,type:"PLACE" });
      setSubmitting(false);
    }
  })

  const { mutate: fetchPlaces } = useMutation(
    () => fetcher.get(`/v1/master-data/type?type=place`, "raw"),
    {
      onSuccess: (res) => {
        console.log(res)
        setPlaces(res.data)
        setShowModal(false);
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const { mutate: createPlace } = useMutation(
    (data) => fetcher.post(`/v1/master-data`, data, "raw"),
    {
      onSuccess: (res) => {
        console.log(res.data)
        SuccessToast.fire({
            icon: "success",
            title: "Place Added Successfully!"
        });
        fetchPlaces();
      },
      onError: ({ response }) => {
        console.log(response.data);
        ErrorToast.fire({
            icon: "error",
            title:response.data.message || "Unable To Add Place"
        })
      },
    }
  );

  useEffect(()=>{
    fetchPlaces();
  },[])
  
 

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        All  Local Places
                    </h1>
                </div>
                {/* Modal Start */}
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-linear transition-all duration-150"
                        type='button'
                        onClick={() => setShowModal(true)}
                    >
                        Add More
                    </button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Add Place
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="relative p-6 flex-auto">
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div className="col-span-12 sm:col-span-12">
                                                        <label
                                                            htmlFor="place1"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            Place Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="place"
                                                                onChange={(event) => {
                                                                    formik.setFieldValue("place", event.target.value);
                                                                  }}
                                                                id="place1"
                                                                autoComplete="given-name"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                        {
                                                            formik.errors.place && (
                                                                <p className="text-red-500">
                                                                {
                                                                    formik.errors.place
                                                                }
                                                                </p>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit"
                                                    // onClick={() => setShowModal(false)}
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
                {/* Modal End  */}
            </div>


            {/* Listing table start */}
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Place Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Status
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {places.length > 0 ? (
                                places.map((place) => (
                                    <tr key={place._id}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">
                                                        {place.name}
                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <span className={`inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-${place.status ? 'green' : 'red'}-700 ring-1 ring-inset ring-green-600/20`}>
                                                {place.status}
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a
                                                href="#"
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Edit<span className="sr-only">, {place.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))) : (
                                    <tr>
                                        <td colSpan="numberOfColumns" className='text-center'>No result found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ctable