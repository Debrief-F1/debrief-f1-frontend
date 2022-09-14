import Link from "@/components/Link"
import validationSchema from "@/components/Validateur"
import { ErrorMessage, Field, Form, Formik } from "formik"

const initialValues = {
  username: "",
  displayName: "",
  email: "",
  telephone: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
}

const SignIn = () => {
  return (
    <div className="mt-64 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ resetForm }) => (
          <Form>
            <div className="flex flex-col">
              <label>EmailOrUsername *:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="border-2 border-black px-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="small"
                className="text-red-600"
              />
            </div>

            <div className="flex flex-col">
              <label>Mot de passe *:</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="border-2 border-black px-2 rounded"
              />
              <ErrorMessage
                name="password"
                component="small"
                className="text-red-600"
              />
            </div>

            <div className="flex gap-3 my-3">
              <button
                type="submit"
                className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
              >
                Connexion
              </button>

              <Link
                href="/inscription"
                onClick={resetForm}
                className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded hover:underline"
              >
                inscription
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default SignIn
