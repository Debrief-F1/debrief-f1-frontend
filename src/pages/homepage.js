import ConstructorsHome from "@/components/ConstructorsHome"
import CountdownRace from "@/components/CoutdownRace"
import DriversHome from "@/components/DriversHome"
import News from "@/components/News"
import Page from "@/components/Page"
import LastRaceResult from "@/components/LastRaceResult"
import LastRaceArticle from "@/components/LastRaceArticle"

const homepage = () => {
  return (
    <Page>
      <div className="p-4 flex flex-wrap justify-between">
        <div className="flex flex-col p-1 w-3/5">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <iframe
              className="rounded-xl"
              width="400"
              height="230"
              src="https://www.youtube.com/embed/ec5lb7JiNZg"
              title="Le résumé du Grand Prix d'Abu Dhabi - F1"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <LastRaceResult />
          </div>
          <div className="flex">
            <News />
            <LastRaceArticle />
          </div>
        </div>

        <div className="flex flex-col justify-end gap-y-2 p-1">
          <CountdownRace />
          <DriversHome />
          <ConstructorsHome />
        </div>
      </div>
    </Page>
  )
}

export default homepage
