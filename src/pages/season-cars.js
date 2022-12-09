import ImageComponent from "@/components/ImageComponent"
import Page from "@/components/Page"

const seasonCars = () => {
  return (
    <Page>
      <h1 className="m-[10%] text-center text-3xl font-bold">
        Voiture de la saison
      </h1>
      <div className=" flex gap-3 overflow-x-auto ">
        <ImageComponent
          className=" w-64 h-64 hover:w-80 hover:h-80"
          src="/images/voiture/1.png"
        />

        <ImageComponent
          className=" w-64 h-64  hover:w-80 hover:h-80"
          src="/images/voiture/2.png"
        />

        <ImageComponent className=" w-64 h-64" src="/images/voiture/5.png" />

        <ImageComponent className=" w-64 h-64" src="/images/voiture/8.png" />

        <ImageComponent className=" w-64 h-64" src="/images/voiture/11.png" />
      </div>
    </Page>
  )
}
export default seasonCars
