import Link from "./Link"
import { BiHome, BiCog } from "react-icons/bi"
import { FaCar } from "react-icons/fa"
import { ImStatsBars } from "react-icons/im"

const Footer = () => {
  return (
    <footer className="flex w-full justify-between sticky bottom-0 bg-gradient-to-b from-gray-100 to-gray-500">
      <h1>
        <Link href="/home">
          <BiHome className="w-[50px] h-[50px] pl-4" />
        </Link>{" "}
      </h1>
      <h1 className="">
        <Link href="/voitures-de-season">
          <FaCar className="w-[40px] h-[40px] pt-2" />
        </Link>{" "}
      </h1>
      <h1 className=" font-bold">
        <Link href="/statistique">
          <ImStatsBars className="w-[40px] h-[40px] pt-2" />
        </Link>{" "}
      </h1>
      <h1 className="">
        <Link href="/setting">
          <BiCog className="w-[50px] h-[50px] pr-4" />
        </Link>{" "}
      </h1>
    </footer>
  )
}
export default Footer
