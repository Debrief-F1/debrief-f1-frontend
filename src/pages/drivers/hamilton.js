import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const hamilton = () => {
  return (
    <Page>
      <div className="flex justify-between text-black italic font-bold">
        <div className="flex flex-col ml-1">
          <h1 className="text-2xl flex flex-col">NOM : Lewis HAMILTON</h1>
          <div className="flex">
            <p>TEAM : </p>
            <ImageComponent
              className="w-7"
              src="/images/logo/mercedeslogo.webp"
            />
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

      <h2 className="bg-red-600 mt-2">PALMARÈS</h2>

      <table className="flex text-black italic font-bold">
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
        <h3 className="bg-red-600 mt-2">CARRIÈRE</h3>
        <table className="border-2 border-black">
          <thead>
            <tr className="border-2 border-black">
              <th className="border-r-2 border-black">SEASON</th>
              <th className="border-r-2 border-black">CONSCTRUCTORS</th>
              <th className="border-r-2 border-black">RANK</th>
              <th className="border-r-2 border-black">PTS</th>
              <th className="border-r-2 border-black">GP</th>
              <th className="border-r-2 border-black">VICTORY</th>
              <th className="border-r-2 border-black">PODIUM</th>
              <th className="border-r-2 border-black">ABANDON</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-black">
              <td className="text-center">2022</td>
              <td className="flex justify-center">
                <ImageComponent
                  className="w-7"
                  src="/images/logo/mercedeslogo.webp"
                />
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
              <td className="text-center">2021</td>
              <td className="flex justify-center">
                <ImageComponent
                  className="w-7"
                  src="/images/logo/mercedeslogo.webp"
                />
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
              <td className="text-center">2020</td>
              <td className="flex justify-center">
                <ImageComponent
                  className="w-7"
                  src="/images/logo/mercedeslogo.webp"
                />
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
              <td className="text-center">2019</td>
              <td className="flex justify-center">
                <ImageComponent
                  className="w-7"
                  src="/images/logo/mercedeslogo.webp"
                />
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
