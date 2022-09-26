import React, { useCallback, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import Link from "@/components/Link.jsx"
import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
import validationSchema from "@/components/Validateur.jsx"
import { useAppContext } from "@/components/AppContext"

const initialValues = {
  username: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const UserPatch = () => {
  const {
    state: { session },
  } = useAppContext()

  const router = useRouter()
  const [errors, setErrors] = useState([])
  const handleSubmit = useCallback(
    async ({ email, username, displayName, password }) => {
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.patch(`/users/${session.user.id}`, {
          email,
          username,
          displayName,
          password,
        })

        if (count) {
          router.push("/")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [router]
  )

  return (
    <div className="h-screen">
      <div className=" h-full flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
        <div className="">
          <img
            className="w-64 h-32"
            src="https://www.pngmart.com/files/10/Formula-1-Logo-PNG-File.png"
            alt="logo f1"
          />
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
              Sign-Up
            </h1>
          </div>
          {errors.length ? (
            <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex flex-col">
                <label>New Email :</label>
                <Field
                  type="email"
                  name="email"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label>New Username :</label>
                <Field
                  type="text"
                  name="username"
                  className="border-2 border-black px-2 rounded "
                />
                <ErrorMessage
                  name="username"
                  component="small"
                  className="text-red-600 "
                />
              </div>

              <div className="flex flex-col">
                <label>New DisplayName :</label>
                <Field
                  type="text"
                  name="displayName"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="displayName"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col">
                <label>New password :</label>
                <Field
                  type="password"
                  name="password"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col">
                <label>Confirm new password :</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex gap-3 my-3 justify-between">
                <button
                  type="submit"
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                >
                  Confirm
                </button>
                <Link
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                  href="/setting"
                >
                  Annule
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default UserPatch
