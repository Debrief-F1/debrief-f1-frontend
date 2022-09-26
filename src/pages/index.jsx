import { useAppContext } from "@/components/AppContext"
import Link from "@/components/Link"
import Page from "@/components/Page"

const App = () => {
  const {
    state: { session },
  } = useAppContext()

  return (
    <Page>
      <h1 className=" p-5 font-bold text-xl">
        <Link href="/classement-drivers">classement drivers</Link>
      </h1>

      {session ? (
        <>
          <Link href="/comments">comment</Link>
          <h1 className=" p-5 font-bold text-xl">
            <Link href="/constructor-ranking">classement constructors</Link>
          </h1>
        </>
      ) : null}

      {session && session.user.role === "ADMIN" ? (
        <h1 className="p-5 font-bold text-xl">
          <Link href="/last-race">Last Race</Link>
        </h1>
      ) : null}
    </Page>
  )
}
export default App
