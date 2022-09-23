import { useCallback, useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { GrMenu } from "react-icons/gr"
import { GiCrossMark } from "react-icons/gi"

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggleMenu = useCallback(() => setMenuOpen((state) => !state), [])

  return (
    <>
      <button className="text-xl px-4" onClick={handleToggleMenu}>
        <GrMenu className="w-8 h-8" />
      </button>
      <ul
        className={`fixed inset-0 absolute h-[500px] w-64  ${
          menuOpen ? "" : "hidden"
        } visible static`}
      >
        <button onClick={handleToggleMenu} className="p-4">
          <div className="flex flex-col gap-2">
            <li className=" border-b text-left bg-white rounded-xl">
              <GiCrossMark className="w-8 h-8" />
            </li>
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
              <a className="p-4 block hover:bg-slate-100 rounded-xl" href="/">
                Last Race
              </a>
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
    </>
  )
}
export default BurgerMenu
