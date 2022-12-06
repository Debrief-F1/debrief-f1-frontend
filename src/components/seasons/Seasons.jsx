import { ImBin2, ImBin } from "react-icons/im"
import { useSeasonsContext } from "@/components/seasons/SeasonsContext"
import { useCallback, useState } from "react"
import api from "@/services/api"

const Seasons = () => {
  const { seasons, countSeasons, deleteSeason, deleteAllSeasons } =
    useSeasonsContext()
  const handleClickDelete = useCallback(
    async (event) => {
      await deleteSeason(Number(event.currentTarget.getAttribute("data-id")))
    },
    [deleteSeason]
  )

  const handleClickDeleteAl = useCallback(
    async (event) => {
      await deleteAllSeasons(event)
    },
    [deleteAllSeasons]
  )

  const [races, setRaces] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const handleClickRaces = useCallback(async (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"))
    const {
      data: { result },
    } = await api.get(`/races/${id}`)

    setRaces(result)
    setIsOpen(true)
  }, [])

  if (!seasons) {
    return <p>Loading </p>
  }

  if (!races) {
    return <p>Loading </p>
  }

  return (
    <div className=" w-full flex justify-between ">
      <div className="flex flex-col w-[50%]">
        <div className="flex justify-between  text-center text-2xl px-1 py-2">
          <h1 className="">TOTAL: {countSeasons}</h1>
          <button onClick={handleClickDeleteAl}>
            <ImBin className="h-8 w-8" />
          </button>
        </div>
        <div className="  overflow-y-auto ">
          {seasons.length ? (
            <ul>
              <li className="p-3 flex justify-between border-2 border-black bg-slate-700">
                <p>id</p>
                <p>nom</p>
                <p>date</p>
                <p>del</p>
              </li>
              {seasons.map((season) => (
                <li
                  className="p-3 flex justify-between items-center border-2 border-black odd:bg-slate-200"
                  key={season.id}
                >
                  <span className="px-2 ">{season.id}</span>
                  {/* <Link href="/races"> */}
                  <button
                    className="w-32 border-2 rounded-xl  bg-blue-400"
                    data-id={season.id}
                    onClick={handleClickRaces}
                  >
                    <span className="px-2 ">{season.name}</span>
                  </button>
                  {/* </Link> */}
                  <span className="px-2 ">
                    {new Intl.DateTimeFormat("fr").format(
                      new Date(season.year)
                    )}
                  </span>
                  {}

                  <button data-id={season.id} onClick={handleClickDelete}>
                    <ImBin2 />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>seasons not found</p>
          )}
        </div>
      </div>
      {isOpen ? (
        <div className="w-[50%] overflow-x-auto">
          <h1 className=" text-2xl px-1 py-2  ">races par season</h1>
          {races.length !== 0 ? (
            <ol>
              <li className="p-3 text-white text-center flex justify-between border-2 border-black bg-slate-700">
                <p className="w-[10%]">id</p>
                <p className="w-[25%]">nom</p>
                <p className="w-[25%]">date</p>
                <p className="w-[20%] overflow-x-auo ">seasonId</p>
                <p className="w-[20%] overflow-x-aut">circuitId</p>
              </li>
              {races.map((races) => (
                <li
                  className="p-3 flex justify-between border-2 border-black odd:bg-slate-200"
                  key={races.id}
                >
                  <span className="px-2 ">{races.id}</span>
                  <button className="px-2 ">{races.name}</button>
                  <span className="px-2 ">
                    {new Intl.DateTimeFormat("fr").format(
                      new Date(races.raceDate)
                    )}
                  </span>
                  <span className="px-2 ">{races.seasonId}</span>
                  <span className="px-2 ">{races.circuitId}</span>
                </li>
              ))}
            </ol>
          ) : (
            <h1 className="p-10">races not found ...</h1>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Seasons
