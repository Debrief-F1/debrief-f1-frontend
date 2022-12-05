import Seasons from "@/components/seasons/Seasons"
import { SeasonsContextProvider } from "@/components/seasons/SeasonsContext"
import AddSeasonForm from "@/components/seasons/AddSeasonForm"
import GetRaces from "@/components/races/GetRaces"
import AddRacesForm from "@/components/races/AddRaces"

const SeasonsPage = () => {
  return (
    <SeasonsContextProvider>
      <div className=" flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500 ">
        <h1 className="text-3xl font-bold">CREATE SEASONS</h1>
        <div className="flex items-center justify-between">
          <AddSeasonForm />
        </div>
        <Seasons />
        <AddRacesForm />
        <GetRaces />
      </div>
    </SeasonsContextProvider>
  )
}

export default SeasonsPage
