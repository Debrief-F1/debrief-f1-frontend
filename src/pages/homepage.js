import ConstructorsHome from "@/components/ConstructorsHome"
import CountdownRace from "@/components/CoutdownRace"
import DriversHome from "@/components/DriversHome"
import News from "@/components/News"
import Page from "@/components/Page"

const homepage = () => {
  return (
    <Page>
      <div className="flex justify-between flex-wrap gap-x-12">
        <div className="bg-blue-700 flex flex-col grow justify-start">
          <News />
        </div>
        <div className="flex flex-col justify-end gap-y-2">
          <CountdownRace />
          <DriversHome />
          <ConstructorsHome />
        </div>
      </div>
    </Page>
  )
}

export default homepage
