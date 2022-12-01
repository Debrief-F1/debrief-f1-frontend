import BurgerMenu from "./BurgerMenu"
import Link from "./Link"
import { BiHome, BiCog } from "react-icons/bi"
import { FaCar } from "react-icons/fa"
import { VscSignOut } from "react-icons/vsc"
import { useAppContext } from "./AppContext"
import { useRouter } from "next/router"
import Image from "@/components/Image"
import { UserIcon } from "@heroicons/react/24/solid"

const Page = (props) => {
  const router = useRouter()

  const { children } = props
  const {
    state: { session },
  } = useAppContext()

  const { setSession } = useAppContext()

  const handelClick = () => {
    setSession()
    router.push("/")

    return
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="flex justify-between">
        <BurgerMenu />
        <div>
          <Image
            style={{ width: 200, height: 60 }}
            src="/images/icons/formula1.png"
          />
        </div>
        {session ? (
          <button onClick={handelClick}>
            {" "}
            <VscSignOut className="w-[50px] h-[50px] pt-2 pr-2" />
          </button>
        ) : (
          <h1 className=" font-bold  px-4 pt-2 border-b-2">
            <Link href="/users/sign-up">
              <UserIcon className="w-6 h-6 mt-3" />
            </Link>{" "}
          </h1>
        )}
      </header>
      <article className="grow overflow-y-auto">{children}</article>

      <footer className="flex justify-between sticky Bottom-0 bg-gradient-to-b from-gray-100 to-gray-500">
        <h1>
          <Link href="/homepage">
            <BiHome className="w-[50px] h-[50px] pl-4" />
          </Link>{" "}
        </h1>
        <h1 className="">
          <Link href="/constructor">
            <FaCar className="w-[40px] h-[40px] pt-2" />
          </Link>{" "}
        </h1>
        <h1 className=" font-bold">
          <Link href="/page2">page2</Link>{" "}
        </h1>
        <h1 className="">
          <Link href="/setting">
            <BiCog className="w-[50px] h-[50px] pr-4" />
          </Link>{" "}
        </h1>
      </footer>
    </div>
  )
}
export default Page
