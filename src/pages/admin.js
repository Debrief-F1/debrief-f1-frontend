import Link from "@/components/Link"

const { default: Page } = require("@/components/Page")

const Admin = () => {
  return (
    <Page>
      <div className="flex flex-col gap-3 items-center p-10">
        <h1 className="text-3xl font-bold mb-10 ">ADMINISTRATEUR</h1>
        <Link
          className="underline p-2 bg-blue-400 active:bg-blue-600 border-2 border-slate-600 rounded-xl w-[50%]  text-center "
          href="/users/get-users"
        >
          get users
        </Link>
        <Link
          className="underline p-2 bg-blue-400 active:bg-blue-600 border-2
        border-slate-600 rounded-xl w-[50%]  text-center "
          href="/circuits"
        >
          Circuits
        </Link>

        <Link
          className="underline p-2 bg-blue-400 active:bg-blue-600 border-2
        border-slate-600 rounded-xl w-[50%]  text-center "
          href="/seasons"
        >
          Seasons
        </Link>
        <Link
          className="underline p-2 bg-blue-400 active:bg-blue-600 border-2
        border-slate-600 rounded-xl w-[50%]  text-center "
          href="/races"
        >
          Races
        </Link>
      </div>
    </Page>
  )
}
export default Admin
