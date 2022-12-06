import Image from "@/components/Image"

const DriversHome = () => {
  return (
    <div className="mx-auto rounded-lg border-2 border-black bg-gray-400 w-11/12 md:w-[370px]">
      <h1 className="m-1 border-2 border-black bg-red-600 rounded-lg text-white text-center font-bold italic">
        TOP 5 DRIVERS RANKING
      </h1>
      <table className="w-full text-center">
        <thead>
          <tr className="border-2 bg-gray-500">
            <th className="border-2">POS</th>
            <th className="border-2">NAT</th>
            <th className="border-2">PILOTS</th>
            <th className={`border-2`}>CONST</th>
            <th className="border-2">PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>🇳🇱</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <Image src="/images/pilots/verstappen.webp" />
              </div>
              VERSTAPPEN
            </td>
            <td>
              <div className="flex justify-center">
                <Image
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/redbulllogo.webp"
                />
              </div>
            </td>
            <td>416</td>
          </tr>
          <tr>
            <td>2</td>
            <td>🇲🇽</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <Image src="/images/pilots/perez.webp" />
              </div>
              PEREZ
            </td>
            <td>
              <div className="flex justify-center">
                <Image
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/redbulllogo.webp"
                />
              </div>
            </td>
            <td>280</td>
          </tr>
          <tr>
            <td>3</td>
            <td>🇲🇨</td>
            <td className="flex justify-start gap-3">
              <div className="w-7 flex">
                <Image src="/images/pilots/leclerc.webp" />
              </div>
              LECLERC
            </td>
            <td>
              <div className="flex justify-center">
                <Image
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/ferrarilogo.webp"
                />
              </div>
            </td>
            <td>275</td>
          </tr>
          <tr>
            <td>4</td>
            <td>🇬🇧</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <Image src="/images/pilots/russell.webp" />
              </div>
              RUSSELL
            </td>
            <td>
              <div className="flex justify-center">
                <Image
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/mercedeslogo.webp"
                />
              </div>
            </td>
            <td>231</td>
          </tr>
          <tr>
            <td>5</td>
            <td>🇬🇧</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <Image src="/images/pilots/hamilton.webp" />
              </div>
              HAMILTON
            </td>
            <td>
              <div className="flex justify-center">
                <Image
                  style={{ width: 30, height: 30 }}
                  src="/images/logo/mercedeslogo.webp"
                />
              </div>
            </td>
            <td>216</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DriversHome
