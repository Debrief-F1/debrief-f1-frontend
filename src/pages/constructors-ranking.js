import Image from "@/components/Image"
import Page from "@/components/Page"

const constructorsRanking = () => {
  return (
    <Page>
      <div>
        <div className="rounded-lg border-2 border-black bg-gray-400 w-screen h-screen">
          <h1 className="m-1 border-2 border-black bg-red-600 rounded-lg text-white text-center font-bold italic">
            CONSTRUCTORS RANKING
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

            <tbody>
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
            </tbody>

            <tbody>
              <tr>
                <td>6</td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alfaromeologo.webp" />
                  </div>
                  ALFA ROMEO
                </td>
                <td className="w-7">
                  <Image src="/images/cars/alfaromeocar.webp" />
                </td>
                <td>53</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>7</td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/astonmartinlogo.webp" />
                  </div>
                  ASTON MARTIN
                </td>
                <td className="w-7">
                  <Image src="/images/cars/astonmartincar.webp" />
                </td>
                <td>49</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>8</td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/haaslogo.webp" />
                  </div>
                  HAAS
                </td>
                <td className="w-7">
                  <Image src="/images/cars/haascar.webp" />
                </td>
                <td>36</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>9</td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alphataurilogo.webp" />
                  </div>
                  ALPHATAURI
                </td>
                <td className="w-7">
                  <Image src="/images/cars/alphatauricar.webp" />
                </td>
                <td>35</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>10</td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/williamslogo.webp" />
                  </div>
                  WILLIAMS
                </td>
                <td className="w-7">
                  <Image src="/images/cars/williamscar.webp" />
                </td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Page>
  )
}

export default constructorsRanking
