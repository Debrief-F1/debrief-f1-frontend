import api from "@/services/api"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

const SeasonsContext = createContext()

export const useSeasonsContext = () => useContext(SeasonsContext)

export const SeasonsContextProvider = (props) => {
  const [countSeasons, setCountSeasons] = useState(0)
  const [seasons, setSeasons] = useState([])
  const addSeasons = useCallback(
    (...seasons) => setSeasons((previous) => [...previous, ...seasons]),
    []
  )

  useEffect(() => {
    ;(async () => {
      const {
        data: { result, count },
      } = await api.get("/seasons")
      addSeasons(...result)
      setCountSeasons(count)
    })()
  }, [addSeasons])

  //==================== RACES======
  const [races, setRaces] = useState([])
  const addRaces = useCallback(
    (...races) => setRaces((previous) => [...previous, ...races]),
    []
  )

  useEffect(() => {
    ;(async () => {
      const {
        data: { result, count },
      } = await api.get("/races")
      addRaces(...result)
      setCountSeasons(count)
    })()
  }, [addRaces])
  //====================================

  const deleteSeason = useCallback(async (seasonId) => {
    await api.delete(`/seasons/${seasonId}`)
    setSeasons((previous) =>
      previous.filter((prevSeason) => prevSeason.id !== seasonId)
    )
  }, [])
  const deleteAllSeasons = useCallback(async () => {
    await api.delete(`/seasons`)
    setSeasons([])
  }, [])

  return (
    <SeasonsContext.Provider
      {...props}
      value={{
        addSeasons,
        seasons,
        countSeasons,
        setCountSeasons,
        deleteSeason,
        deleteAllSeasons,
        addRaces,
        races,
      }}
    />
  )
}
