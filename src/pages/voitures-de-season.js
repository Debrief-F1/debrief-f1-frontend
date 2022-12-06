import ImageSrc from "@/components/ImageSrc"
import Page from "@/components/Page"

const VoituresSeason = () => {
  return (
    <Page>
      <h1 className="m-[10%] text-center text-3xl font-bold">
        Voiture de la season
      </h1>
      <div className=" flex gap-3 overflow-x-auto ">
        <ImageSrc
          className=" w-64 h-64 hover:w-80 hover:h-80"
          src="/images/voiture/1.png"
        />

        <ImageSrc
          className=" w-64 h-64  hover:w-80 hover:h-80"
          src="/images/voiture/2.png"
        />

        <ImageSrc className=" w-64 h-64" src="/images/voiture/5.png" />

        <ImageSrc className=" w-64 h-64" src="/images/voiture/8.png" />

        <ImageSrc className=" w-64 h-64" src="/images/voiture/11.png" />
      </div>
    </Page>
  )
}
export default VoituresSeason
