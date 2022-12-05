import { useRouter } from "next/router"
import { useAppContext } from "./AppContext"
import BurgerMenu from "./BurgerMenu"
import { VscSignOut } from "react-icons/vsc"
import { AiOutlineUser } from "react-icons/ai"
import Link from "./Link"
import Image from "@/components/Image"

const Header = () => {
  const router = useRouter()

  const {
    state: { session },
  } = useAppContext()

  const { setSession } = useAppContext()

  const handelClick = () => {
    setSession()
    router.push("/home")

    return
  }

  return (
    <header className="flex justify-between">
      <BurgerMenu />
      <div className="flex justify-center grow p-2">
        <Image
          style={{ width: 200, height: 60 }}
          src="/images/icons/formula1.png"
        />
      </div>
      {session ? (
        <div className="flex items-center ">
          <h1>
            Bonjour{" "}
            <span className="text-blue-600 pr-2"> {session.user.username}</span>
          </h1>
          <button onClick={handelClick}>
            {" "}
            <VscSignOut className="w-[50px] h-[50px] pt-2 pr-2" />
          </button>
        </div>
      ) : (
        <h1 className=" font-bold  px-4 pt-2 border-b-2">
          <Link href="/users/sign-up">
            <AiOutlineUser className="w-[35px] h-[35px]" />
          </Link>{" "}
        </h1>
      )}
      ;
    </header>
  )
}

export default Header
