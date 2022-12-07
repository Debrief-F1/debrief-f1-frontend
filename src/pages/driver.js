import Page from "@/components/Page"
import DriversInfo from "@/components/DriversInfo"

const driver = () => {
  return (
    <Page>
      <div
        className="
      rounded-lg text-center text-white italic font-bold bg-red-500"
      >
        <h1>Pilotes</h1>
      </div>
      <DriversInfo />
    </Page>
  )
}

export default driver
