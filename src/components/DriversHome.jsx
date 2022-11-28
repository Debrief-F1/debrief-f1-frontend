import Image from "@/components/Image"

const DriversHome = () => {
  return (
    <div>
      <div className="rounded-lg border-2 border-black bg-gray-400 max-w-[390px] max-h-[340px]">
        <h1 className="mt-1 mb-1 border-2 border-black rounded-lg text-white italic font-bold bg-red-600 text-center">
          TOP 5 DRIVERS RANKING
        </h1>
        <table className="w-full text-center">
          <thead>
            <tr className="border-2 bg-gray-500">
              <th className="border-2">POS</th>
              <th className="border-2">NAT</th>
              <th className="border-2">PILOTS</th>
              <th className="border-2">IMG</th>
              <th className="border-2">CONSTRUCTORS</th>
              <th className="border-2">PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>🇳🇱</td>
              <td>VERSTAPPEN</td>
              <td>
                <div className="w-7">
                  <Image src="/images/pilots/verstappen.webp" />
                </div>
              </td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/redbulllogo.webp" />
                </div>
              </td>
              <td>416</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>🇲🇽</td>
              <td>PEREZ</td>
              <td>
                <div className="w-7">
                  <Image src="/images/pilots/perez.webp" />
                </div>
              </td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/redbulllogo.webp" />
                </div>
              </td>
              <td>280</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>3</td>
              <td>🇲🇨</td>
              <td>LECLERC</td>
              <td>
                <div className="w-7">
                  <Image src="/images/pilots/leclerc.webp" />
                </div>
              </td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/ferrarilogo.webp" />
                </div>
              </td>
              <td>275</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>4</td>
              <td>🇬🇧</td>
              <td>RUSSELL</td>
              <td>
                <div className="w-7">
                  <Image src="/images/pilots/russell.webp" />
                </div>
              </td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/mercedeslogo.webp" />
                </div>
              </td>
              <td>231</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>5</td>
              <td>🇬🇧</td>
              <td>HAMILTON</td>
              <td>
                <div className="w-7">
                  <Image src="/images/pilots/hamilton.webp" />
                </div>
              </td>
              <td className=" flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/mercedeslogo.webp" />
                </div>
              </td>
              <td>216</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default DriversHome
