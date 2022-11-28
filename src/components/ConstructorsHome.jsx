import Image from "@/components/Image"

const ConstructorsHome = () => {
  return (
    <div>
      <div className="rounded-lg border-2 border-black bg-gray-400 max-w-[390px] max-h-[340px]">
        <h1 className="mt-1 mb-1 border-2 border-black rounded-lg text-white italic font-bold bg-red-600 text-center">
          TOP 5 CONSTRUCTORS RANKING
        </h1>
        <table className="w-full text-center">
          <thead>
            <tr className="border-2 bg-gray-500">
              <th className="border-2">POS</th>
              <th className="border-2">CONSTRUCTORS</th>
              <th className="border-2">IMG</th>
              <th className="border-2">PTS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/redbulllogo.webp" />
                </div>
                REDBULL
              </td>
              <td className="w-7">
                <Image src="/images/cars/redbullcar.webp" />
              </td>
              <td>696</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>2</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/ferrarilogo.webp" />
                </div>
                FERRARI
              </td>
              <td className="w-7">
                <Image src="/images/cars/ferraricar.webp" />
              </td>
              <td>487</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>3</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/mercedeslogo.webp" />
                </div>
                MERCEDES
              </td>
              <td className="w-7">
                <Image src="/images/cars/mercedescar.webp" />
              </td>
              <td>447</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>4</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/alpinelogo.webp" />
                </div>
                ALPINE
              </td>
              <td className="w-7">
                <Image src="/images/cars/alpinecar.webp" />
              </td>
              <td>153</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>5</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/mclarenlogo.webp" />
                </div>
                MACLAREN
              </td>
              <td className="w-7">
                <Image src="/images/cars/mclarencar.webp" />
              </td>
              <td>146</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default ConstructorsHome
