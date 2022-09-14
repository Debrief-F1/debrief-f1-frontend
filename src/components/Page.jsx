import BurgerMenu from "./burger-menu"
import Link from "./Link"

const Page = (props) => {
  const { children } = props

  return (
    <div className="h-screen flex flex-col ">
      <header className="flex justify-between">
        {/* <h1 className="font-bold my-2 px-4 border-b-2">
          <Link href="/">Home</Link>{" "}
        </h1> */}

        <BurgerMenu />

        <div className="w-full grow">
          <img
            className="w-full h-20 "
            src="https://www.pngmart.com/files/10/Formula-1-Logo-PNG-File.png"
            alt="logo furmula1"
          />
        </div>
        <h1 className=" font-bold my-2 px-4 border-b-2">
          <Link href="/inscription">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>{" "}
        </h1>
      </header>

      <article className="grow">{children}</article>

      <footer className="flex justify-between sticky Bottom-0">
        <h1 className="font-bold my-2 px-4 border-b-2">
          <Link href="/">Home</Link>{" "}
        </h1>
        <h1 className=" font-bold my-2 px-4 border-b-2">
          <Link href="/page1">page1</Link>{" "}
        </h1>
        <h1 className=" font-bold my-2 px-4 border-b-2">
          <Link href="/page2">page2</Link>{" "}
        </h1>
        <h1 className=" font-bold my-2 px-4 border-b-2">
          <Link href="/page3">page3</Link>{" "}
        </h1>
      </footer>
    </div>
  )
}
export default Page
