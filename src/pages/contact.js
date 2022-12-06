import { useAppContext } from "@/components/AppContext"
import Button from "@/components/Button"
import api from "@/services/api"
import { Field, Form, Formik } from "formik"
import { useState } from "react"

const initialValues = {
  contenu: "",
  object: "",
}

const Contact = () => {
  const {
    state: { session },
  } = useAppContext()

  const [issended, setIssended] = useState(false)

  const handleSubmit = async ({ contenu, object }, { resetForm }) => {
    if (!session) {
      console.log(1289)

      return
    }

    console.log(object)
    const message = contenu
    const email = session.user.email

    try {
      const { data } = await api.post(`/api/message`, {
        email,
        message,
        object,
      })
      console.log("msg sensed")
      setIssended(true)
      resetForm()
    } catch (err) {
      console.log("errorrrrrr")
    }
  }

  return (
    <>
      {session && (
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-3xl font-bold ">Contact Nous</h1>
          {issended && (
            <p className="p-2  border-2 w-80 text-center border-blue-300">
              Votre message à bien été envoyer, nous vous repondrons dans les
              plus bref delais
            </p>
          )}

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col gap-5 items-center">
              <div className="flex flex-col pt-3 ">
                <label>Votre message : {session.user.username}</label>
                <label>Object</label>
                <Field
                  className="p-2 border-2 border-black rounded"
                  type="text"
                  name="object"
                  placeholder="object"
                />
                <label>Message</label>

                <Field
                  className="p-2 border-2 border-black rounded"
                  as="textarea"
                  name="contenu"
                  placeholder="contenu"
                />
              </div>
              <Button type="submit">Send</Button>
            </Form>
          </Formik>
        </div>
      )}
    </>
  )
}
export default Contact
