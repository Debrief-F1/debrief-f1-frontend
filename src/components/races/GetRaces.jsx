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
      <div className=" bg-slate-500 overflow-y-auto mb-10 h-80">
        {races.length ? (
          <ul>
            {races.map((race) => (
              <li className="p-3 flex justify-between" key={race.id}>
                <div>
                  <span className="px-2 bg-blue-600">{race.id}</span>
                  <span className="px-2 bg-yellow-600">{race.name}</span>
                  <span className="px-2 bg-green-600">{race.raceDate}</span>
                  <span className="px-2 bg-red-600">{race.seasonId}</span>
                  <span className="px-2 bg-purple-600">{race.circuitId}</span>
                  {}
                </div>
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
