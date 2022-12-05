import api from "@/services/api"
import { useEffect, useState } from "react"

const GetRaces = () => {
  // const { seasons } = useSeasonsContext()
  // console.log(seasons[0].id)
  // const { seasons } = useSeasonsContext()

  const [races, setRaces] = useState([])
  const [count, setCount] = useState([])
  // console.log(seasons)
  useEffect(() => {
    ;(async () => {
      const {
        data: { result, count },
      } = await api.get(`/races`)

      setRaces(result)
      setCount(count)
    })()
  }, [])

  // seasons.id === races.seasonId
  // console.log(Seasons.id, races.seasonId)

  if (!races) {
    return <p>Loading </p>
  }

  return (
    <div className=" flex flex-col">
      <h1 className="text-3xl font-bold">Races List:{count}</h1>
      <div className="  overflow-y-auto mb-10 h-80">
        {races.length ? (
          <ul>
            <li className="p-3 flex justify-between text-white sticky top-0 border-2 border-black bg-slate-700">
              <p>id</p>
              <p>nom</p>
              <p>date</p>
              <p>seasonId</p>
              <p>circuitId</p>
            </li>
            {races.map((race) => (
              <li
                className="p-3 flex justify-between border-2 border-black odd:bg-slate-200"
                key={race.id}
              >
                <span className="px-2 ">{race.id}</span>
                <span className="px-2 ">{race.name}</span>
                <span className="px-2 ">
                  {new Intl.DateTimeFormat("fr").format(
                    new Date(race.raceDate)
                  )}
                </span>
                <span className="px-2 ">{race.seasonId}</span>
                <span className="px-2 ">{race.circuitId}</span>
                {}
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

export default GetRaces
