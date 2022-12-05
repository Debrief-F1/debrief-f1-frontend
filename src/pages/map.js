import Page from "@/components/Page"
import Link from "@/components/Link"

const map = () => {
  return (
    <Page>
      <div
        className="
      border-2 border-black rounded-lg text-center text-white italic font-bold bg-black"
      >
        <h1>Maps</h1>
      </div>
      <ul className="underline m-3">
        <li>
          <Link href="/maps/sakhir">GRAND PRIX DE BAHREIN 🇶🇦</Link>
        </li>
        <li>
          <Link href="/maps/melbourne">GRAND PRIX D'AUSTRALIE 🇦🇺</Link>
        </li>
        <li>
          <Link href="/maps/monaco">GRAND PRIX DE MONACO 🇲🇨</Link>
        </li>
      </ul>
    </Page>
  )
}

export default map
