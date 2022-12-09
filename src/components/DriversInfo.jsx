import ImageComponent from "@/components/ImageComponent"
import Link from "@/components/Link"

const DriversInfo = () => {
  return (
    <div className="mt-3 flex justify-center -space-x-4 ">
      <Link
        className="inline-block h-20 w-20 rounded-full hover:z-50 ring-2 ring-white bg-slate-400 cursor-pointer"
        href="/drivers/verstappen"
      >
        <ImageComponent
          className="rounded-full"
          src="/images/pilots/verstappen.webp"
        />
      </Link>
      <Link
        className="inline-block h-20 w-20 hover:z-50 rounded-full ring-2 ring-white bg-slate-400 cursor-pointer"
        href="/drivers/alonso"
      >
        <ImageComponent
          className="rounded-full"
          src="/images/pilots/alonso.webp"
        />
      </Link>
      <Link
        className="inline-block h-20 w-20 hover:z-50 rounded-full ring-2 ring-white bg-slate-400 cursor-pointer"
        href="/drivers/hamilton"
      >
        <ImageComponent
          className="rounded-full"
          src="/images/pilots/hamilton.webp"
        />
      </Link>
      <ImageComponent
        className="inline-block h-20 w-20 hover:z-50 rounded-full ring-2 ring-white bg-slate-400 cursor-pointer"
        src="/images/pilots/leclerc.webp"
      />
      <ImageComponent
        className="inline-block h-20 w-20 hover:z-50 rounded-full ring-2 ring-white bg-slate-400 cursor-pointer"
        src="/images/pilots/perez.webp"
      />
    </div>
  )
}

export default DriversInfo
