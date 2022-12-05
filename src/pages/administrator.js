import Page from "@/components/Page"
import GetUsers from "./users/get-users"
import Seasons from "./seasons"
import Circuits from "./circuits"
import AddRacesForm from "@/components/races/AddRaces"

const Administrator = () => {
  return (
    <Page>
      <GetUsers />
      <Seasons />
      <Circuits />
      <AddRacesForm />
    </Page>
  )
}
export default Administrator
