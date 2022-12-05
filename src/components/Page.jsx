import BurgerMenu from "./BurgerMenu"
import Link from "./Link"
import { BiHome, BiCog } from "react-icons/bi"
import { FaCar } from "react-icons/fa"
import { VscSignOut } from "react-icons/vsc"
import { AiOutlineUser } from "react-icons/ai"
import { useAppContext } from "./AppContext"
import { useRouter } from "next/router"

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
    <div className="h-screen flex flex-col ">
      <header className="flex justify-between">
        <BurgerMenu />
        <div className="w-full grow">
          <img
            className="w-full h-[60px] "
            src="https://www.pngmart.com/files/10/Formula-1-Logo-PNG-File.png"
            alt="logo furmula1"
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
              <AiOutlineUser className="w-[35px] h-[35px]" />
            </Link>{" "}
          </h1>
        )}
        ;
      </header>

      <article className="grow overflow-y-auto">{children}</article>

      <footer className="flex justify-between sticky Bottom-0 bg-gradient-to-b from-gray-100 to-gray-500">
        <h1>
          <Link href="/">
            <BiHome className="w-[50px] h-[50px] pl-4" />
          </Link>{" "}
        </h1>
        <h1 className="">
          <Link href="/page1">
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
