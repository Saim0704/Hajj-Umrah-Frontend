import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import fetcher from "src/dataProvider";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {


  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: process.env.NEXT_PUBLIC_ROLE,
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      // role: Yup.string().required('Role is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const valuesToSend = { ...values };
      delete valuesToSend.confirmPassword;
      createUser(valuesToSend)
      setSubmitting(false);
    }
  })

  const { mutate: createUser } = useMutation(
    (data) => fetcher.post(`/v1/user`, data, "raw"),
    {
      onSuccess: (res) => {
        router.push(`/login`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" onSubmit={formik.handleSubmit} method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                onChange={(event) => {
                  formik.setFieldValue("name", event.target.value);
                }}
                autoComplete="name"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {
              formik.errors.name && (
                <p className="text-red-500">
                  {
                    formik.errors.name
                  }
                </p>
              )
            }
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(event) => {
                  formik.setFieldValue("email", event.target.value);
                }}
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {
              formik.errors.email && (
                <p className="text-red-500">
                  {
                    formik.errors.email
                  }
                </p>
              )
            }
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(event) => {
                  formik.setFieldValue("password", event.target.value);
                }}
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {
              formik.errors.password && (
                <p className="text-red-500">
                  {
                    formik.errors.password
                  }
                </p>
              )
            }
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="confirmPassword"
                autoComplete="confirmPassword"
                onChange={(event) => {
                  formik.setFieldValue("confirmPassword", event.target.value);
                }}
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {
              formik.errors.confirmPassword && (
                <p className="text-red-500">
                  {
                    formik.errors.confirmPassword
                  }
                </p>
              )
            }
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          you are a member?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign In Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
