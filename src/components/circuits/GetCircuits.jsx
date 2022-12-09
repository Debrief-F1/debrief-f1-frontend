import CircuitPatch from "@/components/circuits/CircuitPatch"
import { useRouter } from "next/router"
import { useCallback, useState } from "react"
import { BsFillPencilFill } from "react-icons/bs"
import { ImBin2, ImBin } from "react-icons/im"
import Modal from "../Modal"
import { useCircuitsContext } from "./CircuitsContext"

const GetCircuits = () => {
  const { circuits, countCircuits, deleteCircuit, deleteAlCircuits } =
    useCircuitsContext()

  const [openModal, setOpenModal] = useState(false)
  const [circuitId, setCircuitId] = useState(0)
  const router = useRouter()

  const handleClickDelete = useCallback(
    async (event) => {
      await deleteCircuit(Number(event.currentTarget.getAttribute("data-id")))
    },
    [deleteCircuit]
  )

  const handleClickDeleteAl = useCallback(
    async (event) => {
      await deleteAlCircuits(event)
    },
    [deleteAlCircuits]
  )
  const handleClickPatch = useCallback(async (event) => {
    const Id = Number(event.currentTarget.getAttribute("data1-id"))

    // console.log(circuitId)
    setOpenModal(true)
    setCircuitId(Id)
    console.log(Id)
    console.log(circuitId)
  }, [])

  const handleClose = () => {
    setOpenModal(false)
    router.push("/circuits")
  }

  if (!circuits) {
    return <p>Loading </p>
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mt-5">CIRCUITS</h1>

      <div className="flex justify-between bg-slate-700 text-center text-white text-2xl px-1 py-2">
        <h1 className="">TOTAL:{countCircuits} </h1>
        <button onClick={handleClickDeleteAl}>
          <ImBin className="h-10 w-10" />
        </button>
      </div>
      <div className=" overflow-y-auto mb-10">
        {circuits.length ? (
          <ul>
            <li className="flex justify-between border-t-2 border-white p-3 text-white sticky top-0 bg-slate-700">
              <p className="px2 w-10 text-center ">Id</p>
              <p className="px2 w-48 text-center ">Name</p>
              <p className="px2 w-32 text-center ">location</p>
              <p className="px2 w-10 text-center ">lendth</p>
              <p className="px2 w-32 text-center ">N turn</p>
              <p className="px2 w-10 text-center ">patch</p>
              <p>Del</p>
            </li>
            {circuits.map((circuit) => (
              <li
                className="p-3 flex justify-between border-2 border-black  overflow-y-auto text-center odd:bg-slate-200 "
                key={circuits.id}
              >
                <span className="px2 w-10 bg-ble-600">{circuit.id}</span>
                <span className="p2 w-32 bg-yllow-600">{circuit.name}</span>
                <span className="p2 w-32 bg-reen-600">{circuit.location}</span>
                <span className="p2 w-32 bgred-600">{circuit.length}</span>
                <span className="p2 w-10 b-purple-600">
                  {circuit.numberOfTurn}
                </span>
                <button data1-id={circuit.id} onClick={handleClickPatch}>
                  <BsFillPencilFill />
                </button>

                <button data-id={circuit.id} onClick={handleClickDelete}>
                  <ImBin2 />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>null</p>
        )}
      </div>
      {
        <Modal open={openModal} className="bg-white">
          <div className="flex flex-col items-center ">
            <div className="w-full flex justify-end  mt-20 px-[25%] md:px-[30%]">
              <button
                className=" bg-blue-600 active:bg-blue-400 p-2 rounded-xl"
                onClick={handleClose}
              >
                X
              </button>
            </div>
            <CircuitPatch circuitId={circuitId} />
          </div>
        </Modal>
      }
    </div>
  )
}

export default GetCircuits
