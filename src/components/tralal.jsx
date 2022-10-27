import React, { useCallback, useState } from "react"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import { AxiosError } from "axios"
import api from "@/services/api"

const DemandeConge = () => {
  const initialValues = { type: "", dateDebut: "", dateFin: "", message: "" }
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const [visible, setVisiblity] = useState(false)

  const handelSubmit = useCallback(
    async ({ type, dateDebut, dateFin, message }) => {
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/demandes", { type, dateDebut, dateFin, message })

        if (count) {
          router.push("/sign-in")

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
  const myFunction = () => {
    setVisiblity(true)
  }
  const myFunction2 = () => {
    setVisiblity(false)
  }

  return (
    <div className=" p-4 flex flex-col items-center gap-10 bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
      <h1 className="text-center text-4xl font-bold my-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
        Demande de conge
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
        onSubmit={handelSubmit}
        // onSubmit={(values, actions) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2))
        //     actions.setSubmitting(false)
        //   }, 0)
        // }}
      >
        <Form className="flex flex-col gap-5">
          <Field className="bg-red-200 p-1 rounded-xl" as="select" name="type">
            <option value="null">votre demande concerne:</option>
            <option value="conge paye">conge paye</option>
            <option value="autre conge">autre conge </option>
            <option value="heures delegation">heures delegation</option>
            <option value="enfants malade">enfants malade</option>
          </Field>
          <div className="flex justify-between">
            <h1 className="">debut:</h1>
            <Field
              className="bg-red-200 p-1 rounded-xl"
              type="date"
              name="dateDebut"
            />
          </div>
          <div className="flex justify-between">
            <h1 className="px-3">Fin:</h1>
            <Field
              className="bg-red-200 p-1 rounded-xl"
              type="date"
              name="dateFin"
            />
          </div>
          <div>
            <h1>Message</h1>
            <Field
              className="bg-red-200 p-1 rounded-xl"
              as="textarea"
              name="message"
              placeholder="ecrit votre message"
            />
          </div>
          <div>
            <input
              type={visible ? "text" : "password"}
              placeholder="password"
              id="myInput"
            />
            {visible ? (
              <span onClick={myFunction2}>m</span>
            ) : (
              <span onClick={myFunction}>C</span>
            )}
          </div>
          <button
            className="bg-blue-600 active:bg-blue-300 rounded-xl"
            type="submit"
          >
            conferme
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default DemandeConge
