import { useCallback } from "react"
import { ImBin2, ImBin } from "react-icons/im"
import { useCircuitsContext } from "./CircuitsContext"

const GetCircuits = () => {
  const { circuits, countCircuits, deleteCircuit, deleteAlCircuits } =
    useCircuitsContext()

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

  if (!circuits) {
    return <p>Loading </p>
  }

  return (
    <div className="">
      <div className="flex justify-between bg-slate-700 text-center text-white text-2xl px-1 py-2">
        <h1 className="">TOTAL:{countCircuits} </h1>
        <button onClick={handleClickDeleteAl}>
          <ImBin className="h-10 w-10" />
        </button>
      </div>
      <div className=" bg-slate-500 overflow-y-auto mb-10 h-80">
        {circuits.length ? (
          <ul>
            {circuits.map((circuit) => (
              <li className="p-3 flex justify-between" key={circuits.id}>
                <div>
                  <span className="px-2 bg-blue-600">{circuit.id}</span>
                  <span className="px-2 bg-yellow-600">{circuit.name}</span>
                  <span className="px-2 bg-green-600">{circuit.location}</span>
                  <span className="px-2 bg-red-600">{circuit.length}</span>
                  <span className="px-2 bg-purple-600">
                    {circuit.numberOfTurn}
                  </span>
                  {}
                </div>
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
    </div>
  )
}

export default GetCircuits
