import api from "@/services/api"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

const CircuitsContext = createContext()

export const useCircuitsContext = () => useContext(CircuitsContext)

export const CircuitsContextProvider = (props) => {
  const [countCircuits, setCountCircuits] = useState(0)
  const [circuits, setCircuits] = useState([])

  const addCircuits = useCallback(
    (...circuits) => setCircuits((previous) => [...previous, ...circuits]),
    []
  )

  useEffect(() => {
    ;(async () => {
      const {
        data: { result, count },
      } = await api.get("/circuits")
      addCircuits(...result)
      setCountCircuits(count)
    })()
  }, [addCircuits, setCountCircuits])

  const deleteCircuit = useCallback(async (circuitId) => {
    await api.delete(`/circuits/${circuitId}`)
    setCircuits((previous) =>
      previous.filter((prevcircuit) => prevcircuit.id !== circuitId)
    )
  }, [])
  const deleteAlCircuits = useCallback(async () => {
    const {
      data: { result, count },
    } = await api.delete(`/circuits`)
    setCircuits([])
    countCircuits(count)
  }, [setCircuits, countCircuits])

  return (
    <CircuitsContext.Provider
      {...props}
      value={{
        addCircuits,
        circuits,
        countCircuits,
        setCountCircuits,
        deleteCircuit,
        deleteAlCircuits,
      }}
    />
  )
}
