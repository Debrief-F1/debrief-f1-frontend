import ImageComponent from "@/components/ImageComponent"

const DriversInfo = () => {
  return (
    <div className="mt-3 flex justify-center -space-x-4 ">
      <ImageComponent
        className="inline-block h-20 w-20 rounded-full hover:z-50 ring-2 ring-white bg-slate-400 cursor-pointer"
        src="/images/pilots/verstappen.webp"
      />
      <ImageComponent
        className="inline-block h-20 w-20 hover:z-50 rounded-full ring-2 ring-white bg-slate-400 cursor-pointer"
        src="/images/pilots/alonso.webp"
      />
      <ImageComponent
        className="inline-block h-20 w-20 hover:z-50 rounded-full ring-2 ring-white bg-slate-400 cursor-pointer"
        src="/images/pilots/hamilton.webp"
      />
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
