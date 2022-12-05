import AddCircuitsForm from "@/components/circuits/AddCircuits"
import { CircuitsContextProvider } from "@/components/circuits/CircuitsContext"
import GetCircuits from "@/components/circuits/GetCircuits"

const Circuits = () => {
  return (
    <CircuitsContextProvider>
      <h1 className="text-3xl font-bold mt-5">ADD CIRCUITSs</h1>
      <div className="flex">
        <AddCircuitsForm />
        <GetCircuits className="" />
      </div>
    </CircuitsContextProvider>
  )
}
export default Circuits
