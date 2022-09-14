import Link from "@/components/Link"
import Page from "@/components/Page"

const App = () => {
  return (
    <Page>
      <div className="">Hello</div>
      <h1>
        <Link href="/classement-drivers">classement drivers</Link>
      </h1>
      <h1>
        <Link href="/constructor-ranking">classement constructors</Link>
      </h1>
      <h1>
        <Link href="/last-race">Last Race</Link>
      </h1>
    </Page>
  )
}
export default App
