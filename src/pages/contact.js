import { useAppContext } from "@/components/AppContext"
import Button from "@/components/Button"
import { Field, Form, Formik } from "formik"
import { useState } from "react"

const initialValues = {
  contenu: "",
}

const Contact = () => {
  const {
    state: { session },
  } = useAppContext()

  const [issended, setIssended] = useState(false)

  const handleSubmit = async ({ contenu }, { resetForm }) => {
    if (!session) {
      console.log(1289)

      return
    }

    const data = {
      nom: session.user.username,
      prenom: "Mr:",
      email: session.user.email,
      contenu: contenu,
    }
    const response = await fetch("api/contact-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    console.log(JSON.stringify(data))

    const result = await response.json()

    if (!response.ok) {
      console.log("erroooooor")
    } else {
      setIssended(true)
      resetForm()
    }
  }

  return (
    <>
      {session && (
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-3xl font-bold ">Contact Nous</h1>
          {issended && (
            <p className="p-2  border-2 w-80 text-center border-blue-300">
              Votre message est bien envoyer, nous vous repondrons dans les bref
              delais
            </p>
          )}

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col gap-5 items-center">
              <div className="flex flex-col pt-3 ">
                <label>Votre message Mr: {session.user.username}</label>
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
