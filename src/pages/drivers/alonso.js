import Page from "@/components/Page"
import Image from "@/components/Image"

const alonso = () => {
  return (
    <Page>
      <div className="flex justify-between border-2 border-black rounded-lg text-white italic font-bold bg-black">
        <div className="flex flex-col ml-1">
          <h1 className="text-2xl flex flex-col">NOM : Fernando ALONSO</h1>
          <div className="flex">
            <p>TEAM : </p>
            <p className="w-7">
              <Image src="/images/logo/alpinelogo.webp" />
            </p>
            ALPINE
          </div>
          <p>PAYS : 🇪🇸 ESPAGNE</p>
          <p>AGE : 41 ANS</p>
          <p>NÉ LE : 29 JUILLET 1981, À Oviedo (🇪🇸 ESPAGNE)</p>
          <p>TAILLE : 1M71</p>
        </div>
        <div className="h-full flex flex-wrap">
          <Image
            style={{ width: 200, height: 150 }}
            src="/images/pilots/alonso.webp"
          />
        </div>
      </div>

      <h2 className="bg-red-700 mt-2">PALMARÈS</h2>

      <table className="flex border-2 border-black rounded-lg text-white italic font-bold bg-black">
        <thead>
          <tr className="flex flex-col text-left ml-1">
            <th>DÉBUT EN F1 :</th>
            <th>GP DISPUTÉS :</th>
            <th>VICTOIRES :</th>
            <th>PODIUMS :</th>
            <th>DANS LES POINTS :</th>
            <th>POLE POSITIONS :</th>
            <th>MEILLEURS TOURS :</th>
            <th>POINTS MARQUÉS :</th>
            <th>CHAMPION DU MONDE :</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex flex-col">
            <td>GP D'Australie 2001</td>
            <td>356</td>
            <td>32</td>
            <td>98</td>
            <td>231</td>
            <td>21</td>
            <td>23</td>
            <td>2059</td>
            <td>2 (2005, 2006)</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3 className="bg-red-700 mt-2">CARRIÈRE</h3>
        <table>
          <thead>
            <tr className="border-2 bg-gray-500">
              <th className="border-2">SEASON</th>
              <th className="border-2">CONSCTRUCTORS</th>
              <th className="border-2">RANK</th>
              <th className="border-2">PTS</th>
              <th className="border-2">GP</th>
              <th className="border-2">VICTORY</th>
              <th className="border-2">PODIUM</th>
              <th className="border-2">ABANDON</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2022</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/alpinelogo.webp" />
                </div>
                ALPINE
              </td>
              <td className="text-center">9</td>
              <td className="text-center">81</td>
              <td className="text-center">22</td>
              <td className="text-center">-</td>
              <td className="text-center">-</td>
              <td className="text-center">6</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2021</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/alpinelogo.webp" />
                </div>
                ALPINE
              </td>
              <td className="text-center">10</td>
              <td className="text-center">81</td>
              <td className="text-center">22</td>
              <td className="text-center">-</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2018</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/mclarenlogo.webp" />
                </div>
                MCLAREN
              </td>
              <td className="text-center">11</td>
              <td className="text-center">50</td>
              <td className="text-center">21</td>
              <td className="text-center">-</td>
              <td className="text-center">-</td>
              <td className="text-center">8</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2017</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/mclarenlogo.webp" />
                </div>
                MCLAREN
              </td>
              <td className="text-center">15</td>
              <td className="text-center">17</td>
              <td className="text-center">18</td>
              <td className="text-center">-</td>
              <td className="text-center">-</td>
              <td className="text-center">10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  )
}

export default alonso
