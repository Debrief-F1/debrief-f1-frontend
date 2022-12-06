import Page from "@/components/Page"
import Link from "@/components/Link"

const driver = () => {
  return (
    <Page>
      <div
        className="
      border-2 border-black rounded-lg text-center text-white italic font-bold bg-black"
      >
        <h1>Pilotes</h1>
      </div>
      <ul className="underline m-3">
        <li>
          <Link href="/drivers/verstappen">MAX VERSTAPPEN 🇳🇱</Link>
        </li>
        <li>
          <Link href="/drivers/hamilton">LEWIS HAMILTON 🇬🇧</Link>
        </li>
        <li>
          <Link href="/drivers/alonso">FERNANDO ALONSO 🇪🇸</Link>
        </li>
      </ul>
    </Page>
  )
}

export default driver
