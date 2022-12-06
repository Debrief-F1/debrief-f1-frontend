import React, { useCallback, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
// import Link from "@/components/Link.jsx"
import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
import Link from "@/components/Link"
import { useAppContext } from "@/components/AppContext"
import { BiLowVision, BiShowAlt } from "react-icons/bi"
import ImageSrc from "@/components/ImageSrc"
import Footer from "@/components/Footer"
// import validationSchema from "@/components/Validateur.jsx"
// import { useAppContext } from "@/components/AppContext"

const initialValues = {
  username1: "",
  displayName1: "",
  email1: "",
  password1: "",
}
const UserPatch = () => {
  const {
    state: { session },
  } = useAppContext()
  const { setSession } = useAppContext()

  // console.log(session.user.id)

  const router = useRouter()
  const [errors, setErrors] = useState([])
  const [visible, setVisiblity] = useState(false)

  const handleSubmit = useCallback(
    async ({ email1, username1, displayName1, password1 }) => {
      setErrors([])
      const userId = session.user.id

      if (!email1 & !username1 & !displayName1 & !password1) {
        return
      }

      try {
        const {
          data: { result },
        } = await api.patch(`/users/${userId}`, {
          email1,
          username1,
          displayName1,
          password1,
        })

        if (result.length !== 0) {
          setSession()
          router.push("/users/sign-in")

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

  const handleVisionOff = () => {
    setVisiblity(true)
  }
  const handleVesionOn = () => {
    setVisiblity(false)
  }

  return (
    <div className="h-screen">
      <div className=" h-full flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
        <div className=" py-10">
          <ImageSrc src="/images/logo/F1.png" className="w-48 h-15" />
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
              Ubdate
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
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex flex-col">
                <label>email :</label>
                <Field
                  type="email"
                  name="email1"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label>Username :</label>
                <Field
                  type="text"
                  name="username1"
                  className="border-2 border-black px-2 rounded "
                />
                <ErrorMessage
                  name="username"
                  component="small"
                  className="text-red-600 "
                />
              </div>

              <div className="flex flex-col">
                <label>DisplayName :</label>
                <Field
                  type="text"
                  name="displayName1"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="displayName"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col">
                <label> password :</label>
                <div className="flex">
                  <Field
                    type={visible ? "text" : "password"}
                    name="password1"
                    className="border-2 border-black px-2 rounded"
                  />
                  {visible ? (
                    <span onClick={handleVesionOn}>
                      <BiLowVision className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                    </span>
                  ) : (
                    <span onClick={handleVisionOff}>
                      <BiShowAlt className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                    </span>
                  )}
                </div>
                <ErrorMessage
                  name="password"
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
      <Footer />
    </div>
  )
}

export default UserPatch
