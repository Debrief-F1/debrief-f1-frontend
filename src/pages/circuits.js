import AddCircuitsForm from "@/components/circuits/AddCircuits"
import { CircuitsContextProvider } from "@/components/circuits/CircuitsContext"
import GetCircuits from "@/components/circuits/GetCircuits"
import Link from "@/components/Link"
import Page from "@/components/Page"
import { MdArrowBackIosNew } from "react-icons/md"

const Circuits = () => {
  return (
    <Page>
      <CircuitsContextProvider>
        <div className="p-5">
          <Link href="/admin" className=" ">
            <MdArrowBackIosNew />
          </Link>
          <div className="flex flex-col items-center">
            <AddCircuitsForm />
            <GetCircuits className="" />
          </div>
        </div>
      </CircuitsContextProvider>
    </Page>
  )
}
export default Circuits
