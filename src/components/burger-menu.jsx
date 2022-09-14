import { useCallback, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggleMenu = useCallback(() => setMenuOpen((state) => !state), [])

  return (
    <>
      <button className="text-xl md:hidden p-4" onClick={handleToggleMenu}>
        <Bars3Icon className="w-8 h-8" />
      </button>
      <ul
        className={`fixed inset-0 bg-teal-400 absolute right-32 bottom-64 overflow-auto ${
          menuOpen ? "" : "hidden"
        } md:visible md:static md:flex md:gap-4`}
      >
        <li className="md:hidden border-b text-right">
          <button onClick={handleToggleMenu} className="p-4">
            <XMarkIcon className="w-8 h-8" />
          </button>
        </li>
        <li className="border-b md:border-0">
          <Link href="/constructor-ranking">
            <a className="p-4 block hover:bg-slate-100">Constructors Ranking</a>
          </Link>
        </li>
        <li className="border-b md:border-0">
          <Link href="/classement-drivers">
            <a className="p-4 block hover:bg-slate-100">Drivers Ranking</a>
          </Link>
        </li>
        <li className="border-b md:border-0">
          <a className="p-4 block hover:bg-slate-100" href="/#">
            Last Race
          </a>
        </li>
        <li className="border-b md:border-0">
          <a className="p-4 block hover:bg-slate-100" href="/#">
            Drivers
          </a>
        </li>
        <li className="border-b md:border-0">
          <a className="p-4 block hover:bg-slate-100" href="/#">
            Item 5
          </a>
        </li>
        <li className="border-b md:border-0">
          <a className="p-4 block hover:bg-slate-100" href="/#">
            Item 6
          </a>
        </li>
        <li className="border-b md:border-0">
          <a className="p-4 block hover:bg-slate-100" href="/#">
            Settings
          </a>
        </li>
      </ul>
    </>
  )
}
export default BurgerMenu
