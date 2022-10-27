import { Formik, Form, Field, ErrorMessage } from "formik"
import { useSeasonsContext } from "@/components/seasons/SeasonsContext"
import { useCallback, useState } from "react"
import Link from "../Link"
import api from "@/services/api"
import { AxiosError } from "axios"

const initialValues = {
  name: "",
  year: "",
}

const AddSeasonForm = () => {
  const { seasons, addSeasons } = useSeasonsContext()
  const [errors, setErrors] = useState([])
  const handleSubmit = useCallback(
    async ({ name, year }, { resetForm }) => {
      setErrors([])

      try {
        const {
          data: { result },
        } = await api.post("/seasons", {
          name,
          year,
        })
        addSeasons(...result)
        resetForm()
        throw alert("season added succefly")
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [addSeasons]
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
            <label>year *:</label>
            <Field
              type="date"
              name="year"
              className="border-2 border-black px-2 rounded"
            />
            <ErrorMessage
              name="year"
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

export default AddSeasonForm
