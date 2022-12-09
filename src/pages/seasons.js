import Seasons from "@/components/seasons/Seasons"
import { SeasonsContextProvider } from "@/components/seasons/SeasonsContext"
import AddSeasonForm from "@/components/seasons/AddSeasonForm"
import Page from "@/components/Page"

const SeasonsPage = () => {
  return (
    <SeasonsContextProvider>
      <Page>
        <div className=" flex flex-col items-center">
          <h1 className="text-3xl font-bold">CREATE SEASONS</h1>
          <div className="flex items-center justify-between">
            <AddSeasonForm />
          </div>
          <Seasons />
        </div>
      </Page>
    </SeasonsContextProvider>
  )
}

export default SeasonsPage
