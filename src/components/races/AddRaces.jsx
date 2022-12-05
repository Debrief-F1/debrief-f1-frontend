import { Formik, Form, Field, ErrorMessage } from "formik"

import { AxiosError } from "axios"
import { useCallback, useState } from "react"
import api from "@/services/api"
import Link from "@/components/Link"

const initialValues = {
  name: "",
  raceDate: "",
  seasonId: "",
  circuitId: "",
}

const AddRacesForm = () => {
  const [races, setRaces] = useState([])
  const [errors, setErrors] = useState([])

  const handleSubmit = useCallback(
    async ({ name, raceDate, seasonId, circuitId }, { resetForm }) => {
      setErrors([])

      try {
        const {
          data: { result },
        } = await api.post("/races", {
          name,
          raceDate,
          seasonId,
          circuitId,
        })
        setRaces(result)
        resetForm()
        throw alert(`rece: ${name} added succefly`)
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [setRaces]
  )

  return (
    <div className="">
      <p>Add races</p>
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
            <label>raceDate *:</label>
            <Field
              type="date"
              name="raceDate"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="raceDate"
              component="small"
              className="text-red-600"
            />
          </div>
          <div className="flex flex-col">
            <label>seasonId *:</label>
            <Field
              type="number"
              name="seasonId"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="seasonId"
              component="small"
              className="text-red-600"
            />
          </div>
          <div className="flex flex-col">
            <label>circuitId *:</label>
            <Field
              type="number"
              name="circuitId"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="circuitId"
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

export default AddRacesForm
