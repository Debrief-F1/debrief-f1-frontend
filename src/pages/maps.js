import Page from "@/components/Page"
import Link from "@/components/Link"

const driver = () => {
  return (
    <Page>
      <div
        className="
      rounded-lg text-center text-white italic font-bold bg-red-600"
      >
        <h1>Circuits</h1>
      </div>
      <ul className="underline m-3">
        <li>
          <Link href="/maps/circuit-melbourne">🇦🇺MELBOURNE</Link>
        </li>
        <li>
          <Link href="/maps/circuit-monaco">🇲🇨MONACO</Link>
        </li>
        <li>
          <Link href="/maps/circuit-sakhir">🇶🇦SAKHIR</Link>
        </li>
      </ul>
    </Page>
  )
}

export default driver
