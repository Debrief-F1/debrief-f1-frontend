import React, { useCallback, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useRouter } from "next/router.js"
import { AxiosError } from "axios"
import Modal from "@/components/Modal.jsx"
import Link from "@/components/Link"
import api from "@/services/api"
import { BiShowAlt, BiLowVision } from "react-icons/bi"

import validationSchema from "@/components/Validateur"
import Button from "@/components/Button"
import Page from "@/components/Page"
// import { useAppContext } from "@/components/AppContext"

const initialValues = {
  username: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
}

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false)
  const [visible, setVisiblity] = useState(false)
  const [visible1, setVisiblity1] = useState(false)

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
      console.log(123)
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/users", { email, username, displayName, password })

        // const emailOrUsername = email
        // signIn({ emailOrUsername, password })

        if (count) {
          router.push("/users/sign-in")

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

  const handleVisionOn = () => {
    setVisiblity(true)
  }
  const handleVisionOff = () => {
    setVisiblity(false)
  }

  const handleVisionOn1 = () => {
    setVisiblity1(true)
  }
  const handleVisionOff1 = () => {
    setVisiblity1(false)
  }

  return (
    <Page>
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
                <Link
                  className="hover:underline font-bold"
                  href="/users/sign-in"
                >
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
              {(formik) => (
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
                    <div className="flex items-center justify-between border-2 px-2 border-black rounded bg-white">
                      <Field
                        type={visible ? "text" : "password"}
                        name="password"
                        className=""
                      />
                      {visible ? (
                        <span onClick={handleVisionOff}>
                          <BiLowVision className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                        </span>
                      ) : (
                        <span onClick={handleVisionOn}>
                          <BiShowAlt className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                        </span>
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="small"
                      className="text-red-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label>Confirmer le mot de passe *:</label>
                    <div className="flex items-center justify-between border-2 px-2 border-black rounded bg-white">
                      <Field
                        type={visible1 ? "text" : "password"}
                        name="confirmPassword"
                        className=" border-transparent"
                      />
                      {visible1 ? (
                        <span onClick={handleVisionOff1}>
                          <BiLowVision className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                        </span>
                      ) : (
                        <span onClick={handleVisionOn1}>
                          <BiShowAlt className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer " />
                        </span>
                      )}
                    </div>
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
                    <Button
                      type="submit"
                      // className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                      className="text-center  focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
                      disabled={!formik.isValid || formik.isSubmitted}
                    >
                      S'inscrire
                    </Button>

                    <Link href="/" className="hover:underline pt-2">
                      continue sans inscription
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <Modal open={openModal} onClose={closeModal}>
            <div className=" bg-gradient-to-b from-pink-200 to-violet-900 p-3 ">
              <h1 className="font-bold text-2xl p-3">
                Condition d'utilisation:
              </h1>
              <p className="text-red-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, inventore ipsam ad a laudantium consectetur recusandae
                dolores ab ullam aliquid mollitia dolorem enim perspiciatis
                voluptas ut tempora repellat minima iusto?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                officiis quasi totam tempora, dolor deserunt hic voluptates id
                quos, obcaecati iure eos ipsa officia quidem fuga? Dolor harum
                commodi rerum?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                dignissimos eveniet mollitia provident soluta eos earum fugiat
                et molestias illo, eum maxime id ipsa doloribus cumque
                exercitationem error cupiditate nam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                modi obcaecati quae, ipsam praesentium minus! Odio, modi.
                Repellat itaque soluta architecto atque, eum illum veniam vitae
                vero dignissimos deserunt nemo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                modi obcaecati quae, ipsam praesentium minus! Odio, modi.
                Repellat itaque soluta architecto atque, eum illum veniam vitae
                vero dignissimos deserunt nemo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                modi obcaecati quae, ipsam praesentium minus! Odio, modi.
                Repellat itaque soluta architecto atque, eum illum veniam vitae
                vero dignissimos deserunt nemo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                modi obcaecati quae, ipsam praesentium minus! Odio, modi.
                Repellat itaque soluta architecto atque, eum illum veniam vitae
                vero dignissimos deserunt nemo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                modi obcaecati quae, ipsam praesentium minus! Odio, modi.
                Repellat itaque soluta architecto atque, eum illum veniam vitae
                vero dignissimos deserunt nemo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                modi obcaecati quae, ipsam praesentium minus! Odio, modi.
                Repellat itaque soluta architecto atque, eum illum veniam vitae
                vero dignissimos deserunt nemo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                modi obcaecati quae, ipsam praesentium minus! Odio, modi.
                Repellat itaque soluta architecto atque, eum illum veniam vitae
                vero dignissimos deserunt nemo!
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </Page>
  )
}

export default SignUp
