import Page from "@/components/Page"
import Image from "@/components/Image"

const monaco = () => {
  return (
    <Page>
      <h1 className="bg-gray-300 text-center font-bold italic mb-3">
        GRAND PRIX DE MONACO
      </h1>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col m-3 max-w-[900px] bg-red-500">
          <p>
            Le Grand Prix de Monaco est une des plus anciennes et l'une des
            trois courses les plus prestigieuses au monde, disputée en
            principauté de Monaco, sur un circuit urbain conçu en 1929, par
            Antony Noghès, fils du président de l'Automobile Club de Monaco,
            sous les auspices du prince Louis II de Monaco. Cette création
            répondait au défi d'organiser une compétition sur le territoire
            exigu de Monaco (environ 1,5 km2 à l'époque), condition requise par
            la Commission Sportive Internationale pour que l'Automobile Club de
            Monaco soit reconnu internationalement. En effet, l'autre grande
            compétition monégasque, le rallye automobile Monte-Carlo, créé dès
            1911, était disputé sur les routes de nombreux pays d'Europe.
          </p>
          <div className="flex flex-wrap m-3 bg-green-500">
            <div className="w-[435px] border-2 border-black ">
              <table className="flex flex-col">
                <thead className="flex flex-col">
                  <tr className="flex flex-col">
                    <th className="bg-gray-300 italic">
                      CARACTÉRISTIQUES DU 🇲🇨 MONTE-CARLO CIRCUIT
                    </th>
                  </tr>
                  <tr>
                    <th> Année d'ouverture :</th>
                    <td> 1929</td>
                  </tr>
                  <tr>
                    <th>Propriétaire :</th>
                    <td> Automobile Club de Monaco</td>
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
                    <td> 12 à 18</td>
                  </tr>
                  <tr>
                    <th> Longueur : </th>
                    <td> 1,765 KM à 3,34 KM</td>
                  </tr>
                  <tr>
                    <th> Largeur max. : </th>
                    <td> - </td>
                  </tr>
                  <tr>
                    <th> Capacité : </th>
                    <td> 120000 Personnes</td>
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
                <th className="bg-gray-300 italic">🇲🇨 GRAND PRIX DE MONACO</th>
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
                <td> 64 (sur 78 prévus)</td>
              </tr>
              <tr>
                <th>LONGUEUR DU CIRCUIT</th>
                <td> 3,337 KM</td>
              </tr>
              <tr>
                <th>DISTANCE DE COURSE</th>
                <td> 260,286 KM</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Page>
  )
}

export default monaco
