import React, { useCallback, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Link from "@/components/Link.jsx"
// import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
// import validationSchema from "@/components/Validateur.jsx"
import { useAppContext } from "@/components/AppContext"

const initialValues = {
  content: "",
}

const Comments = () => {
  // const router = useRouter()
  const [errors, setErrors] = useState([])
  const {
    state: { session },
  } = useAppContext()

  const handleSubmit = useCallback(
    async ({ content, raceId }) => {
      // const userId = session.user.id
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/comments", { content, raceId })

        if (count) {
          console.log(count)
          // router.push("/")

          return
        }
      } catch (err) {
        console.log(err)

        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [session]
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
            {({ resetForm }) => (
              <Form>
                <div className="flex flex-col">
                  <label>raceId *:</label>
                  <Field
                    type="number"
                    name="raceId"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="raceId"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label>content *:</label>
                  <Field
                    type="text"
                    name="content"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="content"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                {/* <textarea
                  name="content"
                  placeholder="sisir votre commantaire ici"
                ></textarea> */}

                <div className="flex gap-3 my-3">
                  <button
                    type="submit"
                    className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                  >
                    envoyer
                  </button>

                  <Link
                    href="/"
                    onClick={resetForm}
                    className="hover:underline pt-2"
                  >
                    return
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Comments
