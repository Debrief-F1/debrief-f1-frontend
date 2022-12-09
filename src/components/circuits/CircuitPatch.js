import { Formik, Form, Field, ErrorMessage } from "formik"
import { useCallback, useState } from "react"
import api from "@/services/api"
import { AxiosError } from "axios"
import Link from "@/components/Link"
import { useCircuitsContext } from "./CircuitsContext"

const initialValues = {
  name: "",
  location: "",
  length: "",
  numberOfTurn: "",
}

const CircuitPatch = (props) => {
  const { circuitId } = props
  const { circuits, addCircuits } = useCircuitsContext()

  console.log(circuitId)
  const [errors, setErrors] = useState([])
  const [isPatched, setIsPatched] = useState(false)
  const handleSubmit = useCallback(
    async ({ name1, location1, length1, numberOfTurn1 }, { resetForm }) => {
      setErrors([])

      if (!name1 & !location1 & !length1 & !numberOfTurn1) {
        // eslint-disable-next-line no-console
        console.log("ERROR")

        return
      }

      try {
        const {
          data: { result },
        } = await api.patch(`/circuits/${circuitId}`, {
          name1,
          location1,
          length1,
          numberOfTurn1,
        })
        resetForm()
        setIsPatched(true)
        addCircuits(...result)
        // throw alert(`circuit ${name} added succefly`)
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
    <div className="w-80 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-5">patch CIRCUITS</h1>
      {errors.length ? (
        <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}
      {isPatched ? (
        <p className="rounded-lg border-4 border-blue-600 mb-4 text-xl text-center p-4">
          circuit patched succefly
        </p>
      ) : null}

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col items-center gap-2">
          <div className="flex flex-col">
            <label>name*:</label>
            <Field
              type="text"
              name="name1"
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
              name="location1"
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
              type="text"
              name="length1"
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
              type="text"
              name="numberOfTurn1"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="numberOfTurn"
              component="small"
              className="text-red-600"
            />
          </div>
          <button
            type="submit"
            className="p-2 w-[75%]  text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
          >
            patch
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default CircuitPatch
