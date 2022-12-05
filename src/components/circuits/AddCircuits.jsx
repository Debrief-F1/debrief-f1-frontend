import { Formik, Form, Field, ErrorMessage } from "formik"
import { useCallback, useState } from "react"
import Link from "../Link"
import api from "@/services/api"
import { AxiosError } from "axios"
import { useCircuitsContext } from "./CircuitsContext"

const initialValues = {
  name: "",
  location: "",
  length: "",
  numberOfTurn: "",
}

const AddCircuitsForm = () => {
  const { circuits, addCircuits } = useCircuitsContext()
  const [errors, setErrors] = useState([])
  const handleSubmit = useCallback(
    async ({ name, location, length, numberOfTurn }, { resetForm }) => {
      setErrors([])

      try {
        const {
          data: { result },
        } = await api.post("/circuits", {
          name,
          location,
          length,
          numberOfTurn,
        })
        addCircuits(...result)
        resetForm()
        throw alert(`circuit ${name} added succefly`)
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [addCircuits]
  )

  return (
    <div className="">
      {errors.length ? (
        <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="flex flex-col">
            <label>name*:</label>
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
            <label>location *:</label>
            <Field
              type="text"
              name="location"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="location"
              component="small"
              className="text-red-600"
            />
          </div>
          <div className="flex flex-col">
            <label>length *:</label>
            <Field
              type="number"
              name="length"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="length"
              component="small"
              className="text-red-600"
            />
          </div>
          <div className="flex flex-col">
            <label>numberOfTurn *:</label>
            <Field
              type="number"
              name="numberOfTurn"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="numberOfTurn"
              component="small"
              className="text-red-600"
            />
          </div>
          <div className="flex gap-3 my-3">
            <button
              type="submit"
              className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
            >
              cree
            </button>
            <Link href="/" className="hover:underline pt-2">
              return
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default AddCircuitsForm
