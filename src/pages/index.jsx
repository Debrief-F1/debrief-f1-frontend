import { useAppContext } from "@/components/AppContext"
import Link from "@/components/Link"
import Page from "@/components/Page"
import AddRacesForm from "@/components/races/AddRaces"
import SignUp from "./users/sign-up"

const App = () => {
  const {
    state: { session },
  } = useAppContext()

  return (
    // <SignUp />
    <Page>
      <h1 className=" p-5 font-bold text-xl">
        <Link href="/classement-drivers">classement drivers</Link>
      </h1>

      {session ? (
        <h1 className=" p-5 font-bold text-xl">
          <Link href="/constructor-ranking">classement constructors</Link>
        </h1>
      ) : null}

      {session && session.user.role === "ADMIN" ? (
        <div>
          <h1 className="p-5 font-bold text-xl">
            <Link href="/last-race">Last Race</Link>
          </h1>
          <h1 className=" p-5 font-bold text-xl">
            <Link href="/seasons">seasons</Link>
          </h1>
          <h1 className=" p-5 font-bold text-xl">
            <Link href="/administrator">administrator</Link>
          </h1>
        </div>
      ) : null}
      <AddRacesForm />
    </Page>
  )
}
export default App
