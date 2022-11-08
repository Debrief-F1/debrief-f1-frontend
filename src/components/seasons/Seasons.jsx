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
  const handleClickRaces = useCallback(async (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"))
    const {
      data: { result },
    } = await api.get(`/races/${id}`)

    setRaces(result)
  }, [])

  if (!seasons) {
    return <p>Loading </p>
  }

  if (!races) {
    return <p>Loading </p>
  }

  return (
    <div className="flex gap-10">
      <div className="flex flex-col">
        <div className="flex justify-between  text-center text-white text-2xl px-1 py-2">
          <h1 className="">TOTAL: {countSeasons}</h1>
          <button onClick={handleClickDeleteAl}>
            <ImBin className="h-10 w-10" />
          </button>
        </div>
        <div className=" bg-slate-500 overflow-y-auto mb-10 h-80 ">
          {seasons.length ? (
            <ul>
              {seasons.map((season) => (
                <li className="p-3 flex justify-between" key={season.id}>
                  <div>
                    <span className="px-2 bg-blue-600">{season.id}</span>
                    {/* <Link href="/races"> */}
                    <button
                      className="border-2"
                      data-id={season.id}
                      onClick={handleClickRaces}
                    >
                      <span className="px-2 bg-yellow-600">{season.name}</span>
                    </button>
                    {/* </Link> */}
                    <span className="px-2 bg-red-600">
                      {new Intl.DateTimeFormat("fr").format(
                        new Date(season.year)
                      )}
                    </span>
                    {}
                  </div>
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
      <div>
        <h1 className="text-3xl font-bold ">races par season</h1>
        {races.length !== 0 ? (
          <ol>
            {races.map((races) => (
              <li className="p-3 flex justify-between" key={races.id}>
                <div>
                  <span className="px-2 bg-blue-600">{races.id}</span>
                  <button className="px-2 bg-yellow-600">{races.name}</button>
                  <span className="px-2 bg-green-600">
                    {new Intl.DateTimeFormat("fr").format(
                      new Date(races.raceDate)
                    )}
                  </span>
                  <span className="px-2 bg-red-600">{races.seasonId}</span>
                  <span className="px-2 bg-purple-600">{races.circuitId}</span>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <h1 className="pt-10">races not found ...</h1>
        )}
      </div>
    </div>
  )
}

export default Seasons
