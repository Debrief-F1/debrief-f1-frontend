// ES7 React/Redux/GraphQL/React-Native snippets
//rafce
import ImageComponent from "@/components/ImageComponent"
import Link from "@/components/Link"
import React, { useEffect, useState } from "react"

const Image = [
  "/images/voiture/1.png",
  "/images/voiture/2.png",
  "/images/voiture/3.png",
  "/images/voiture/4.png",
  "/images/voiture/5.png",
  "/images/voiture/6.png",
  "/images/voiture/7.png",
  "/images/voiture/8.png",
  "/images/voiture/9.png",
  "/images/voiture/10.png",
  "/images/voiture/11.png",
  "/images/voiture/12.png",
]

const App = () => {
  const [image, setImage] = useState("")
  const e = Math.floor(Math.random() * 12)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
      setImage(Image[e])
    }, 1000)
  })

  return (
    <div>
      <div className="w-screen h-screen p-5   bg-gradient-to-b from-gray-100 to-gray-500  relative bg-red-30">
        <div className="flex flex-col items-center md:pt-20 text-center">
          <div className="flex items-center">
            <ImageComponent src="/images/drapaux/1.gif" className="w-20 h-10" />
            <h1 className="text-center font-bold text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900">
              DEBRIEF-F1
            </h1>
            <ImageComponent src="/images/drapaux/2.gif" className="w-20 h-10" />
          </div>
          <p className="md:w-[75%] my-5">
            DEBRIEF-F1 EST L'APPLICATION QUI VOUS PROPOSE LES COURCES DE FORMULA
            1 EN TEMPS REEL. GRACE A VOTRE APPLICATION DEBRIEF-F1, VOUS POUVEZ
            EGALEMENT FAIRE DES COMMENTAIRES SUR LES COURSES, ET ELLE RESTE UNE
            ARCHIVE QUE VOUS POUVEZ CONSULTER A TOUT MOMENT.
          </p>
          <div></div>
        </div>
      </div>
      <section className=" flex flex-col items-center pt-64 font-bold  w-full h-full absolute top-0 left-0">
        <div className=" flex flex-wrap items-center justify-center md:gap-20 ">
          <div className="bg-red-60 flex flex-col w-64  gap-2 z-50">
            <div className="flex gap-2 items-center justify-center">
              <Link
                href="/users/sign-in"
                className="flex items-center justify-center bg-blue-600 active:bg-blue-400 h-20 w-24  p-2 text-white  rounded-xl border-double border-4 border-black "
              >
                Sign-In
              </Link>
              <Link
                href="/users/sign-up"
                className="flex items-center justify-center bg-blue-600 active:bg-blue-400 h-20 w-24  p-2 text-white  rounded-xl border-double border-4 border-black "
              >
                Sign-Up
              </Link>
            </div>
            <Link
              href="/homepage"
              className="  active:bg-slate-200 rounded-xl text-center hover:underline"
            >
              Contunue sans S'inscrire
            </Link>
          </div>
          <div className="w-96 h-80  flex mt-3  items-center  rotate45 motion-safe:animate-bounc 3s ">
            <ImageComponent src={image} className="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
