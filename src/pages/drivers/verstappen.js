import Page from "@/components/Page"
import Image from "@/components/Image"

const verstappen = () => {
  return (
    <Page>
      <div className="flex justify-between border-2 border-black rounded-lg text-white italic font-bold bg-black">
        <div className="flex flex-col ml-1">
          <h1 className="text-2xl flex flex-col">NOM : Max VERSTAPPEN</h1>
          <div className="flex">
            <p>TEAM : </p>
            <p className="w-7">
              <Image src="/images/logo/redbulllogo.webp" />
            </p>
            RED BULL RACING
          </div>
          <p>PAYS : 🇳🇱 PAYS-BAS</p>
          <p>AGE : 25 ANS</p>
          <p>NÉ LE : 30 SEPTEMBRE 1997, À Hasselt (🇧🇪 BELGIQUE)</p>
          <p>TAILLE : 1M80</p>
        </div>
        <div className="h-full flex flex-wrap">
          <Image
            style={{ width: 200, height: 150 }}
            src="/images/pilots/verstappen.webp"
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
            <td className="text-center">GP D'Australie 2015</td>
            <td className="text-center">162</td>
            <td className="text-center">34</td>
            <td className="text-center">76</td>
            <td className="text-center">126</td>
            <td className="text-center">20</td>
            <td className="text-center">21</td>
            <td className="text-center">1986.5</td>
            <td className="text-center">1 (2021)</td>
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
                  <Image src="/images/logo/redbulllogo.webp" />
                </div>
                REDBULLS
              </td>
              <td className="text-center">1</td>
              <td className="text-center">429</td>
              <td className="text-center">21</td>
              <td className="text-center">14</td>
              <td className="text-center">16</td>
              <td className="text-center">2</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2021</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/redbulllogo.webp" />
                </div>
                REDBULLS
              </td>
              <td className="text-center">1</td>
              <td className="text-center">395</td>
              <td className="text-center">22</td>
              <td className="text-center">10</td>
              <td className="text-center">18</td>
              <td className="text-center">3</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2020</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/redbulllogo.webp" />
                </div>
                REDBULL
              </td>
              <td className="text-center">3</td>
              <td className="text-center">214</td>
              <td className="text-center">17</td>
              <td className="text-center">2</td>
              <td className="text-center">11</td>
              <td className="text-center">5</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2019</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <Image src="/images/logo/redbulllogo.webp" />
                </div>
                REDBULL
              </td>
              <td className="text-center">3</td>
              <td className="text-center">278</td>
              <td className="text-center">21</td>
              <td className="text-center">3</td>
              <td className="text-center">9</td>
              <td className="text-center">2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  )
}

export default verstappen
