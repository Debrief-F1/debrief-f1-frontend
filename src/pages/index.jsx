import { useAppContext } from "@/components/AppContext"
import HomePage from "@/pages/HomePage"
import Link from "@/components/Link"

const App = () => {
  const {
    state: { session },
  } = useAppContext()

  return (
    <div>
      <HomePage />
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
    </div>
  )
}
export default App
