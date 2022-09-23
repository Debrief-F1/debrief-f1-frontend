import React, { useCallback, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
import validationSchema1 from "@/components/validateur1"
import { useAppContext } from "@/components/AppContext"
import Link from "@/components/Link"

const initialValues = {
  emailOrUsername: "",
  password: "",
}

const Inscription = () => {
  const router = useRouter()
  const { setSession } = useAppContext()
  const [errors, setErrors] = useState([])
  const handleSubmit = useCallback(
    async ({ emailOrUsername, password }) => {
      setErrors([])

      try {
        const {
          data: {
            result: [{ jwt }],
          },
        } = await api.post("/sign-in", { emailOrUsername, password })

        if (jwt) {
          setSession(jwt)
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
    [router, setSession]
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
        <div className="">
          <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
            Sign-Up
          </h1>

          {errors.length ? (
            <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema1}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex flex-col">
                <label>Email or username *:</label>
                <Field
                  type="email"
                  name="emailOrUsername"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="emailOrUsername"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col">
                <label>Mot de passe *:</label>
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

              <div className="flex gap-3 my-3">
                <button
                  type="submit"
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                >
                  sign-in
                </button>
                <Link
                  href="/inscription"
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded hover:underline"
                >
                  cree un compte
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Inscription
