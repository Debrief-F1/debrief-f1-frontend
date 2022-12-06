import Image from "@/components/Image"
import Link from "next/link"

const News = () => {
  return (
    <div>
      <div className="bg-black flex mt-3 rounded-lg justify-between my-3 w-[400px]">
        <div className="flex">
          <div className="flex flex-start justify-between place-items-center h-24 w-32">
            <h1 className="text-2 text-red-600 font-bold pl-3">
              <Link href="/news/mercenews">Mercedes Domine !</Link>
            </h1>
            <p className="text-xs text-red-600 pl-3">07 July 2022</p>
            <Image
              style={{ width: 300, height: 50 }}
              src="/images/logo/mercedeslogo.webp"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-black flex mt-3 rounded-lg justify-between my-3 w-[400px]">
          <div className="flex">
            <div className="flex flex-start justify-between place-items-center h-24 w-32">
              <h1 className="text-2 text-red-600 font-bold pl-3">
                <Link href="/news/astonews">Aston Martin Patine !</Link>
              </h1>
              <p className="text-xs text-red-600 pl-3">07 July 2022</p>
              <Image
                style={{ width: 300, height: 50 }}
                src="/images/logo/astonmartinlogo.webp"
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
                <Link href="/news/redbullews">Redbull s'envole !</Link>
              </h1>
              <p className="text-xs text-red-600 pl-3">07 July 2022</p>
              <Image
                style={{ width: 300, height: 50 }}
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
