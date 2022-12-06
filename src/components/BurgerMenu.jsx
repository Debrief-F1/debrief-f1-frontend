import { useCallback, useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { GrMenu } from "react-icons/gr"
import { GiCrossMark } from "react-icons/gi"
import { useAppContext } from "./AppContext"

const BurgerMenu = () => {
  const {
    state: { session },
  } = useAppContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggleMenu = useCallback(() => setMenuOpen((state) => !state), [])

  return (
    <>
      <button className="text-xl px-4" onClick={handleToggleMenu}>
        <GrMenu className="w-8 h-8" />
      </button>
      <ul
        className={`flex flex-col absolute  bg-gradient-to-r  transition-all duration-500 z-50 ease-in ${
          menuOpen ? "left-0 w-full h-full" : "left-[-290px]"
        }`}
        // className={`fixed inset-0 absolute h-[500px] w-64  ${
        //   menuOpen ? "" : "hidden"
        // } visible static`}
      >
        <button onClick={handleToggleMenu} className="p-4">
          <div className="flex flex-col w-64 pt-10">
            {/* <li className=" border-b text-left bg-white rounded-xl">
              <GiCrossMark className="w-8 h-8" />
            </li> */}
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/constructor-ranking">Constructors Ranking</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/classement-drivers">Drivers Ranking</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/last-race">Last Race</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/home">Drivers</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/home">Item 5</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/home"> Item 6</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/setting">Settings</Link>
              </p>
            </li>
            {session && session.user.role === "ADMIN" && (
              <li
                className="bg-slate-300 hover:bg-slate-100
               p-4 block  border-double  border-4 border-black
               rounded-xl"
              >
                <Link href="/admin">Administrateur</Link>
              </li>
            )}
          </div>
        </button>
      </ul>
    </>
  )
}
export default BurgerMenu
