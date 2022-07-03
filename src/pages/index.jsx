import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  lastName: Yup.string()
    .min(2, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  email: Yup.string()
    .email("email invalide")
    .required("l'email est obligatoire"),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(8, "Mot de passe doit être plus grand que 8 caractères")
    .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: Yup.string()
    .required("Confirmation de mot de passe est obligatoire")
    .oneOf(
      [Yup.ref("password"), null],
      "Le mot de passe de confirmation ne correspond pas"
    ),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accepter les conditions est obligatoire"
  )
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false
};

const handleSubmit = (values) => {
};

const App = () => {
  return (
    <div className=" flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
      <div className="">
        <img className="w-64 h-32" src="https://www.pngmart.com/files/10/Formula-1-Logo-PNG-File.png" alt="" />
      </div>
      <div className="">
        <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">Inscription</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ resetForm }) => (
            <Form>
              <div className="flex flex-col">
                <label>Prénoms:</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border-2 border-black px-2 rounded "
                />
                <ErrorMessage
                  name="firstName"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label>Nom:</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="lastName"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label>Email:</label>
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
                <label>Mot de passe:</label>
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
              <div className="flex flex-col">
                <label>
                  Confirmer le mot de passe:
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
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
                      <a href="https://www.legalplace.fr/contrats/conditions-generales-d-utilisation/?utm_source=google&utm_medium=cpc&utm_campaign=CGU&utm_content=Conditions%20d%27utilisation&k=conditions%20d%27utilisation&gclid=EAIaIQobChMIlKO6tt7c-AIVzxoGAB3SygO3EAAYAiAAEgIDNPD_BwE"> les conditions</a></span>
                  </label>
                </div>
                <ErrorMessage
                  name="acceptTerms"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex gap-3 my-3">
                <button type="submit" className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded">
                  S'inscrire
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="hover:underline decoration-solid "
                >
                  continue sans inscription
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
};

export default App;
