import Page from "@/components/Page"
import Image from "@/components/Image"

const circuitMonaco = () => {
  return (
    <Page>
      <h1 className="bg-gray-300 text-center font-bold italic mb-3">
        GRAND PRIX DE MONACO
      </h1>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col m-3 max-w-[900px] bg-red-500">
          <p>
            La première édition du Grand Prix d'Australie s'est tenue en 1928,
            sur le tracé du circuit de Phillip Island. Officiellement dénommée
            100 Miles Road Race, l'épreuve n'a été considérée qu'a posteriori
            comme le premier GP d'Australie.
          </p>
          <div className="flex flex-wrap m-3 bg-green-500">
            <div className="w-[435px] border-2 border-black ">
              <table className="flex flex-col">
                <thead className="flex flex-col">
                  <tr className="flex flex-col">
                    <th className="bg-gray-300 italic">
                      CARACTÉRISTIQUES DU CIRCUIT DE MONACO
                    </th>
                  </tr>
                  <tr>
                    <th> Année d'ouverture :</th>
                    <td> 1929</td>
                  </tr>
                  <tr>
                    <th>Propriétaire :</th>
                    <td> Automobile Club de Monaco </td>
                  </tr>
                  <tr>
                    <th> Homologation : </th>
                    <td> FIA Degré 1</td>
                  </tr>
                  <tr>
                    <th> Sens :</th>
                    <td> Sens horaire</td>
                  </tr>
                  <tr>
                    <th> Nombre de virages : </th>
                    <td> 18 à 24</td>
                  </tr>
                  <tr>
                    <th> Longueur : </th>
                    <td> 1,765 km à 3,34 km</td>
                  </tr>
                  <tr>
                    <th> Largeur max. : </th>
                    <td> 14 M</td>
                  </tr>
                  <tr>
                    <th> Capacité : </th>
                    <td> 120 000 personnes</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="flex justify-end">
              <Image
                style={{ width: 435, height: 300 }}
                src="/images/circuits/monaco.jpg"
              />
            </div>
          </div>
        </div>

        <div className="m-3 w-[435px] bg-blue-500">
          <table className="flex flex-col border-2 border-black">
            <thead className="flex">
              <tr className="flex flex-col">
                <th className="bg-gray-300 italic">
                  🇦🇺 CIRCUIT DE L'ALBERT PARK
                </th>
                <td>
                  <div>
                    <Image
                      style={{ width: 435, height: 300 }}
                      src="/images/circuits/monacocircuit.png"
                    />
                  </div>
                </td>
              </tr>
            </thead>

            <tbody className="bg-gray-300 italic">
              <tr>
                <th className="pl-2">DONNÉES DE COURSE</th>
              </tr>
            </tbody>

            <tfoot className="text-left p-2">
              <tr>
                <th>NOMBRE DE TOURS</th>
                <td> 78</td>
              </tr>
              <tr>
                <th>LONGUEUR DU CIRCUIT</th>
                <td> 3.367 KM</td>
              </tr>
              <tr>
                <th>DISTANCE DE COURSE</th>
                <td> 302,826 KM</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Page>
  )
}

export default circuitMonaco
