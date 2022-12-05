import { useCallback, useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { GrMenu } from "react-icons/gr"
import { GiCrossMark } from "react-icons/gi"

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handle = useCallback(() => {
    setMenuOpen((x) => !x)
  }, [])

  return (
    <div>
      <button
        onClick={handle}
        className="text-3xl
        cursor-pointer"
      >
        <Bars3Icon className="w-6 h-6 mt-5" />
      </button>
      <ul
        className={`flex flex-col absolute  bg-gradient-to-r from-cyan-500 to-blue-500 pl-6 transition-all duration-500 mt-[88px] z-50 ease-in ${
          menuOpen ? "left-0" : "left-[-290px]"
        }`}
        // className={`fixed inset-0 absolute h-[500px] w-64  ${
        //   menuOpen ? "" : "hidden"
        // } visible static`}
      >
        <button onClick={handleToggleMenu} className="p-4">
          <div className="flex flex-col gap-2">
            {/* <li className=" border-b text-left bg-white rounded-xl">
              <GiCrossMark className="w-8 h-8" />
            </li> */}
            <li className="border-b md:border-0 bg-teal-400 rounded-xl">
              <Link href="/constructor-ranking">
                <a className="p-4 block hover:bg-slate-100 rounded-xl">
                  Constructors Ranking
                </a>
              </Link>
            </li>
            <li className="border-b md:border-0 bg-teal-400 rounded-xl">
              <Link href="/classement-drivers">
                <a className="p-4 block hover:bg-slate-100 rounded-xl">
                  Drivers Ranking
                </a>
              </Link>
            </li>
            <li className="border-b md:border-0 bg-teal-400 rounded-xl">
              <Link href="/last-race">
                <a className="p-4 block hover:bg-slate-100 rounded-xl">
                  Last Race
                </a>
              </Link>
            </li>
            <li className="border-b md:border-0 bg-teal-400 rounded-xl">
              <a className="p-4 block hover:bg-slate-100 rounded-xl" href="/">
                Drivers
              </a>
            </li>
            <li className="border-b md:border-0 bg-teal-400 rounded-xl">
              <a className="p-4 block hover:bg-slate-100 rounded-xl" href="/">
                Item 5
              </a>
            </li>
            <li className="border-b md:border-0 bg-teal-400 rounded-xl">
              <a className="p-4 block hover:bg-slate-100 rounded-xl" href="/">
                Item 6
              </a>
            </li>
            <li className="border-b md:border-0 bg-teal-400 rounded-xl">
              <Link href="/">
                <a className="p-4 block hover:bg-slate-100 rounded-xl">
                  Settings
                </a>
              </Link>
            </li>
          </div>
        </button>
      </ul>
    </div>
  )
}

export default BurgerMenu
