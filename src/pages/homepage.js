import ConstructorsHome from "@/components/ConstructorsHome"
import CountdownRace from "@/components/CoutdownRace"
import DriversHome from "@/components/DriversHome"
import Page from "@/components/Page"
import LastRaceResult from "@/components/LastRaceResult"
import LastRaceArticle from "@/components/LastRaceArticle"
import NewsComponnent from "@/components/NewsComponnent"
import { useAppContext } from "@/components/AppContext"

const articles = [
  {
    title: "Mercedes Domine !",
    name: "mercedes",
    date: "07 July 2022",
  },
  {
    title: "Aston Martine Patine !",
    name: "astonmartin",
    date: "07 July 2022",
  },
  {
    title: "Redbull s'envole !",
    name: "redbull",
    date: "07 July 2022",
  },
]

const homepage = () => {
  const {
    state: { session },
  } = useAppContext()

  return (
    <Page>
      <div className="flex flex-col xl:flex-row xl:justify-evenly ">
        <div className="flex flex-col mt-2 md:mx-auto xl:mx-0">
          <div className="flex flex-col md:flex-row gap-3">
            <iframe
              className="rounded-xl w-11/12 md:w-[370px] mx-auto md:mx-0 lg:mr-32 xl:mr-0"
              src="https://www.youtube.com/embed/ec5lb7JiNZg"
              title="Le résumé du Grand Prix d'Abu Dhabi - F1"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <LastRaceResult />
          </div>
          <div className="flex flex-col md:flex-row mt-2 gap-2">
            <div className="flex flex-col gap-2 lg:mr-32 xl:mr-0">
              {articles.map((article, i) => (
                <NewsComponnent key={i} article={article} />
              ))}
            </div>
            <LastRaceArticle />
          </div>
        </div>
        <div className="grid w-full md:w-fit grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 mt-2 mx-auto xl:mx-0 lg:gap-x-[8.75rem] xl:gap-x-0">
          <div className="grid grid-cols-1 gap-2">
            <CountdownRace />
            <DriversHome />
          </div>
          <ConstructorsHome />
        </div>
      </div>
    </Page>
  )
}

export default homepage
