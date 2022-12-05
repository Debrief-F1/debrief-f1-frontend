import Image from "@/components/Image"
import Link from "next/link"

const News = () => {
  return (
    <div>
      <div className="bg-black flex mt-3 rounded-lg justify-between my-3 w-[400px]">
        <div className="flex">
          <div className="flex flex-start justify-between place-items-center h-24 w-32">
            <h1 className="text-2 text-red-600 font-bold pl-3">
              <Link href="/mercenews">Mercedes Domine !</Link>
            </h1>
            <p className="text-xs text-red-600 pl-3">07 July 2022</p>
            <img
              src="https://cdn-7.motorsport.com/images/mgl/0RrzmDo0/s800/mercedes-f1-logo-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-black flex mt-3 rounded-lg justify-between my-3 w-[400px]">
          <div className="flex">
            <div className="flex flex-start justify-between place-items-center h-24 w-32">
              <h1 className="text-2 text-red-600 font-bold pl-3">
                <Link href="/astonews">Aston Martin Patine !</Link>
              </h1>
              <p className="text-xs text-red-600 pl-3">07 July 2022</p>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-black flex mt-3 rounded-lg justify-between my-3 w-[400px]">
          <div className="flex">
            <div className="flex flex-start justify-between place-items-center h-24 w-32">
              <h1 className="text-2 text-red-600 font-bold pl-3">
                <Link href="/redbullews">Redbull s'envole !</Link>
              </h1>
              <p className="text-xs text-red-600 pl-3">07 July 2022</p>
              <Image
                style={{ width: 300, height: 100 }}
                src="/images/logo/redbulllogo.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
