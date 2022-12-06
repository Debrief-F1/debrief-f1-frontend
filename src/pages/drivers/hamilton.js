import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const hamilton = () => {
  return (
    <Page>
      <div className="flex justify-between border-2 border-black rounded-lg text-white italic font-bold bg-black">
        <div className="flex flex-col ml-1">
          <h1 className="text-2xl flex flex-col">NOM : Lewis HAMILTON</h1>
          <div className="flex">
            <p>TEAM : </p>
            <p className="w-7">
              <ImageComponent src="/images/logo/mercedeslogo.webp" />
            </p>
            MERCEDES
          </div>
          <p>PAYS : 🇬🇧 ROYAUME-UNI</p>
          <p>AGE : 37 ANS</p>
          <p>NÉ LE : 07 JANVIER 1985, À Tewin (🇬🇧 ROYAUME-UNI)</p>
          <p>TAILLE : 1M74</p>
        </div>
        <div className="h-full flex flex-wrap">
          <ImageComponent
            style={{ width: 200, height: 150 }}
            src="/images/pilots/hamilton.webp"
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
          <tr className="flex flex-col text-center">
            <td>GP D'Australie 2007</td>
            <td>310</td>
            <td>103</td>
            <td className="text-center">191</td>
            <td className="text-center">268</td>
            <td className="text-center">105</td>
            <td className="text-center">61</td>
            <td className="text-center">4380.5</td>
            <td>7 (2008, 2014, 2015, 2017, 2018, 2019, 2020)</td>
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
                  <ImageComponent src="/images/logo/mercedeslogo.webp" />
                </div>
                MERCEDES
              </td>
              <td className="text-center">6</td>
              <td className="text-center">240</td>
              <td className="text-center">22</td>
              <td className="text-center">-</td>
              <td className="text-center">9</td>
              <td className="text-center">2</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2021</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <ImageComponent src="/images/logo/mercedeslogo.webp" />
                </div>
                MERCEDES
              </td>
              <td className="text-center">2</td>
              <td className="text-center">387</td>
              <td className="text-center">22</td>
              <td className="text-center">8</td>
              <td className="text-center">17</td>
              <td className="text-center">1</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2020</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <ImageComponent src="/images/logo/mercedeslogo.webp" />
                </div>
                MERCEDES
              </td>
              <td className="text-center">1</td>
              <td className="text-center">347</td>
              <td className="text-center">16</td>
              <td className="text-center">11</td>
              <td className="text-center">14</td>
              <td className="text-center">-</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2 border-black">
              <td>2019</td>
              <td className="flex justify-center">
                <div className="w-7">
                  <ImageComponent src="/images/logo/mercedeslogo.webp" />
                </div>
                MERCEDES
              </td>
              <td className="text-center">1</td>
              <td className="text-center">413</td>
              <td className="text-center">21</td>
              <td className="text-center">11</td>
              <td className="text-center">17</td>
              <td className="text-center">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  )
}

export default hamilton
