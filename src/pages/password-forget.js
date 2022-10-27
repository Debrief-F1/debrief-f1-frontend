import Button from "@/components/Button"
import Link from "@/components/Link"
import api from "@/services/api"
import { AxiosError } from "axios"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router.js"
import { useCallback, useEffect, useState } from "react"

const initialValues = {
  email: "",
}
// http://localhost:3000/users/user-patch    lein pour le patch
const PasswordForget = () => {
  const [user, setUser] = useState([])
  const [isactive, setIsactive] = useState(false)
  const [errors, setErrors] = useState([])

  const handleSubmit = async ({ email }) => {
    if (!email) {
      return
    }

    setIsactive(true)

    const {
      data: { result },
    } = await api.get(`/users/${email}`)
    setUser(result)
    const nom = result[0].username
    const prenom = result[0].displayName

    if (result.length !== 0) {
      console.log(email)

      const data = {
        nom: nom,
        prenom: prenom,
        email: email,
        contenu: "Pour réinitialiser votre mot de passe clic ",
      }

      const response = await fetch("api/contact", {
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
        console.log("ok")
      }
    }
  }

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
        <div className="bg-white p-10 mt-20 text-center rounded-xl shadow-lg shadow-white">
          {errors.length ? (
            <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
          {!isactive && (
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className="flex flex-col items-center gap-10">
                <p className="text-3xl font-bold">inserer votre email</p>
                <Field type="email" name="email" placeholder="email" />
                <div className="flex gap-10 items-center justify-around">
                  <Link href="/users/sign-in">Return</Link>
                  <Button type="submit">Checked</Button>
                </div>
              </Form>
            </Formik>
          )}

          {isactive && (
            <div className=" flex flex-col gap-10">
              <p>
                Merci ! Si vous avez un compte avec cette adresse, nous vous
                enverrons un e-mail avec un lien pour réinitialiser votre mot de
                passe
              </p>
              <Link
                className="bg-blue-600 p-2 rounded-xl  active:bg-blue-300"
                href="/users/sign-in"
              >
                Return
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default PasswordForget
