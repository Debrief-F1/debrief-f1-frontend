import React, { useCallback, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "@/components/Link"
import classNames from "classnames"

const links = [
  { children: "Last Race", href: "/last-race" },
  { children: "Constructors Ranking", href: "/constructors-ranking" },
  { children: "Drivers Ranking", href: "/drivers-ranking" },
  { children: "Constructors", href: "/constructor" },
  { children: "Drivers", href: "/driver" },
  { children: "Circuits", href: "/maps" },
  { children: "Settings", href: "/" },
]

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
        cursor-pointer  "
      >
        <Bars3Icon className="w-6 h-6 mt-5" />
      </button>
      <ul
        className={classNames(
          "flex flex-col fixed top-[60px] bottom-[50px] bg-slate-600 left-0 pl-6 transition-all duration-500 z-50 ease-in",
          { "-left-full": !menuOpen }
        )}
      >
        {links.map((linkProps) => (
          <li
            key={linkProps.href}
            className="mr-4
            text-xl my-7"
          >
            <Link className="text-white" {...linkProps} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BurgerMenu
