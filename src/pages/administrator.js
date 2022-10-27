import Page from "@/components/Page"
import GetUsers from "./users/get-users"
import Seasons from "./seasons"
import Circuits from "./circuits"

const Administrator = () => {
  return (
    <Page>
      <GetUsers />
      <Seasons />
      <Circuits />
    </Page>
  )
}
export default Administrator
