import ImageComponent from "@/components/ImageComponent"
import classNames from "classnames"

const ConstructorsHome = (props) => {
  const { className } = props

  return (
    <div
      className={classNames(
        "rounded-lg h-fit border-2 border-black bg-gray-400 w-11/12 mx-auto md:w-[370px]",
        className
      )}
    >
      <h1 className="m-1 border-2 border-black bg-red-600 rounded-lg text-white text-center font-bold italic">
        TOP 5 CONSTRUCTORS RANKING
      </h1>
      <table className="w-full text-center">
        <thead>
          <tr className="border-2 bg-gray-500">
            <th className="border-2">POS</th>
            <th className="border-2">CONSTRUCTORS</th>
            <th className="border-2">CARS</th>
            <th className="border-2">PTS</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/logo/redbulllogo.webp" />
              </div>
              REDBULL
            </td>
            <td className="w-7">
              <ImageComponent src="/images/cars/redbullcar.webp" />
            </td>
            <td>696</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>2</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/logo/ferrarilogo.webp" />
              </div>
              FERRARI
            </td>
            <td className="w-7">
              <ImageComponent src="/images/cars/ferraricar.webp" />
            </td>
            <td>487</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>3</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/logo/mercedeslogo.webp" />
              </div>
              MERCEDES
            </td>
            <td className="w-7">
              <ImageComponent src="/images/cars/mercedescar.webp" />
            </td>
            <td>447</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>4</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/logo/alpinelogo.webp" />
              </div>
              ALPINE
            </td>
            <td className="w-7">
              <ImageComponent src="/images/cars/alpinecar.webp" />
            </td>
            <td>153</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>5</td>
            <td className="flex justify-start gap-3">
              <div className="w-7">
                <ImageComponent src="/images/logo/mclarenlogo.webp" />
              </div>
              MACLAREN
            </td>
            <td className="w-7">
              <ImageComponent src="/images/cars/mclarencar.webp" />
            </td>
            <td>146</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ConstructorsHome
