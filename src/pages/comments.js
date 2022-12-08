import React, { useCallback, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
// import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
// import validationSchema from "@/components/Validateur.jsx"
import { useAppContext } from "@/components/AppContext"

const initialValues = {
  content: "",
  name: "",
}

const Comments = () => {
  // const router = useRouter()
  const [errors, setErrors] = useState([])
  const {
    state: { session },
  } = useAppContext()

  const handleSubmit = useCallback(async ({ content, name }, { resetForm }) => {
    setErrors([])

    if (!content | !name) {
      // eslint-disable-next-line no-console
      console.log("error")

      return
    }
    console.log(name)

    const {
      data: { result },
    } = await api.get(`/races/name/${name}`)

    // console.log(result[0].id)

    if (result.length === 0) {
      console.log("non race")

      return
    }

    const raceId = result[0].id

    try {
      const {
        data: { count },
      } = await api.post(`/comments/${session.user.id}`, { content, raceId })

      if (count) {
        resetForm()
        // router.push("/")

        return
      }
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.error) {
        setErrors(err.response.data.error)

        return
      }

      setErrors(["Oops. Something went wrong, please try again."])
    }
  }, [])

  return (
    <div className="">
      <div className=" flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
        <h1 className="text-2xl font-bold p-5">Add comments</h1>
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
            <Form className="flex flex-col items-center gap-2">
              <div>
                <div className="flex flex-col">
                  <label>Name *:</label>
                  <Field
                    type="text"
                    name="name"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="name"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Comment *:</label>
                  <Field
                    as="textarea"
                    name="content"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="content"
                    component="small"
                    className="text-red-600"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="p-2 w-[75%] text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
              >
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Comments
