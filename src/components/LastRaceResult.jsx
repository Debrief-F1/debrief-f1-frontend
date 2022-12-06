import ImageComponent from "@/components/ImageComponent"

const ConstructorsHome = () => {
  return (
    <div className="rounded-lg border-2 border-black bg-gray-400 mx-auto w-11/12 md:w-[370px]">
      <h1 className="m-1 border-2 border-black bg-red-600 rounded-lg text-white text-center font-bold italic">
        TOP 5 LAST RACE RANKING
      </h1>
      <table className="w-full text-center">
        <thead>
          <tr className="border-2 bg-gray-500">
            <th className="border-2">POS</th>
            <th className="border-2">PILOTS</th>
            <th className="border-2">CONSTRUCTORS</th>
            <th className="border-2">PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/pilots/verstappen.webp" />
              </div>
              VERSTAPPEN
            </td>
            <td>
              <div className="flex justify-center">
                <ImageComponent
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/redbulllogo.webp"
                />
              </div>
            </td>
            <td>25</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="flex justify-start gap-3">
              <div className="w-7 flex">
                <ImageComponent src="/images/pilots/leclerc.webp" />
              </div>
              LECLERC
            </td>
            <td>
              <div className="flex justify-center">
                <ImageComponent
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/ferrarilogo.webp"
                />
              </div>
            </td>
            <td>18</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/pilots/perez.webp" />
              </div>
              PEREZ
            </td>
            <td>
              <div className="flex justify-center">
                <ImageComponent
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/mercedeslogo.webp"
                />
              </div>
            </td>
            <td>15</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/pilots/sainz.webp" />
              </div>
              SAINZ
            </td>
            <td>
              <div className="flex justify-center">
                <ImageComponent
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/alpinelogo.webp"
                />
              </div>
            </td>
            <td>12</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/pilots/russell.webp" />
              </div>
              RUSSELL
            </td>
            <td>
              <div className="flex justify-center">
                <ImageComponent
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/mclarenlogo.webp"
                />
              </div>
            </td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ConstructorsHome
