import React, { useCallback, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import Link from "@/components/Link.jsx"
import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
import Modal from "@/components/Modal.jsx"
import validationSchema from "@/components/Validateur.jsx"
// import { useAppContext } from "@/components/AppContext"

const initialValues = {
  username: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
}

const Inscription = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleClick = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }

  const router = useRouter()
  // const { setSession } = useAppContext()
  const [errors, setErrors] = useState([])

  // const signIn = useCallback(
  //   async ({ emailOrUsername, password }) => {
  //     const {
  //       data: {
  //         result: [{ jwt }],
  //       },
  //     } = await api.post("/sign-in", { emailOrUsername, password })

  //     if (jwt) {
  //       setSession(jwt)

  //       return
  //     }
  //   },
  //   [setSession]
  // )

  const handleSubmit = useCallback(
    async ({ email, username, displayName, password }) => {
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/users", { email, username, displayName, password })

        // const emailOrUsername = email
        // signIn({ emailOrUsername, password })

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
        <div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
              Sign-Up
            </h1>
            <p>
              deja inscrit?{" "}
              <Link className="hover:underline font-bold" href="/sign-in">
                {" "}
                se connecter
              </Link>
            </p>
          </div>
          {errors.length ? (
            <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ resetForm }) => (
              <Form>
                <div className="flex flex-col">
                  <label>Email *:</label>
                  <Field
                    type="email"
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
                  <label>Username *:</label>
                  <Field
                    type="text"
                    name="username"
                    className="border-2 border-black px-2 rounded "
                  />
                  <ErrorMessage
                    name="username"
                    component="small"
                    className="text-red-600 "
                  />
                </div>

                <div className="flex flex-col">
                  <label>DisplayName *:</label>
                  <Field
                    type="text"
                    name="displayName"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="displayName"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Mot de passe *:</label>
                  <Field
                    type="password"
                    name="password"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Confirmer le mot de passe *:</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <div>
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      J'ai lu et j'accepte
                      <span className="underline decoration-solid">
                        <button
                          className="underline pl-1"
                          onClick={handleClick}
                        >
                          les conditions
                        </button>
                      </span>
                      <span>*</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="acceptTerms"
                    component="small"
                    className="text-red-600"
                  />
                  <p className="text-sm"> * champs obligatoire</p>
                </div>

                <div className="flex gap-3 my-3">
                  <button
                    type="submit"
                    className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                  >
                    S'inscrire
                  </button>

                  <Link
                    href="/"
                    onClick={resetForm}
                    className="hover:underline pt-2"
                  >
                    continue sans inscription
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <Modal open={openModal} onClose={closeModal}>
          <div className=" bg-gradient-to-b from-pink-200 to-violet-900 p-3 ">
            <h1 className="font-bold text-2xl p-3">Condition d'utilisation:</h1>
            <p className="text-red-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              inventore ipsam ad a laudantium consectetur recusandae dolores ab
              ullam aliquid mollitia dolorem enim perspiciatis voluptas ut
              tempora repellat minima iusto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              officiis quasi totam tempora, dolor deserunt hic voluptates id
              quos, obcaecati iure eos ipsa officia quidem fuga? Dolor harum
              commodi rerum?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              dignissimos eveniet mollitia provident soluta eos earum fugiat et
              molestias illo, eum maxime id ipsa doloribus cumque exercitationem
              error cupiditate nam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              modi obcaecati quae, ipsam praesentium minus! Odio, modi. Repellat
              itaque soluta architecto atque, eum illum veniam vitae vero
              dignissimos deserunt nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              modi obcaecati quae, ipsam praesentium minus! Odio, modi. Repellat
              itaque soluta architecto atque, eum illum veniam vitae vero
              dignissimos deserunt nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              modi obcaecati quae, ipsam praesentium minus! Odio, modi. Repellat
              itaque soluta architecto atque, eum illum veniam vitae vero
              dignissimos deserunt nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              modi obcaecati quae, ipsam praesentium minus! Odio, modi. Repellat
              itaque soluta architecto atque, eum illum veniam vitae vero
              dignissimos deserunt nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              modi obcaecati quae, ipsam praesentium minus! Odio, modi. Repellat
              itaque soluta architecto atque, eum illum veniam vitae vero
              dignissimos deserunt nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              modi obcaecati quae, ipsam praesentium minus! Odio, modi. Repellat
              itaque soluta architecto atque, eum illum veniam vitae vero
              dignissimos deserunt nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              modi obcaecati quae, ipsam praesentium minus! Odio, modi. Repellat
              itaque soluta architecto atque, eum illum veniam vitae vero
              dignissimos deserunt nemo!
            </p>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Inscription
