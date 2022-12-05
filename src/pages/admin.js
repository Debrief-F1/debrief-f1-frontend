import Link from "@/components/Link"

const { default: Page } = require("@/components/Page")

const Admin = () => {
  return (
    <Page>
      <div className="flex flex-col gap-3 items-center">
        <h1>
          Pour voir le liste des utulisateurs clic sur:
          <Link className="underline px-2" href="/users/get-users">
            get users
          </Link>
        </h1>
        <Link href="/circuits">Circuits</Link>
        <Link href="/seasons">Seasons</Link>
      </div>
    </Page>
  )
}
export default Admin
