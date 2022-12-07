import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const circuitSakhir = () => {
  return (
    <Page>
      <h1 className="bg-red-600 text-center font-bold italic mb-3">
        GRAND PRIX DE BAHREIN
      </h1>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col m-3 max-w-[900px]">
          <p>
            Le circuit international de Sakhir est le circuit du Grand Prix de
            Bahreïn de Formule 1 inauguré en 2004 lors du Grand Prix de Bahreïn
            2004. Il est basé à Manama, la capitale de Bahreïn.
          </p>
          <div className="flex flex-wrap m-3">
            <div className="w-[435px] border-2 border-black ">
              <table className="flex flex-col">
                <thead className="flex flex-col">
                  <tr className="flex flex-col">
                    <th className="bg-red-500 italic">
                      CARACTÉRISTIQUES DU 🇶🇦 SAKHIR INTERNATIONAL CIRCUIT
                    </th>
                  </tr>
                  <tr>
                    <th> Année d'ouverture :</th>
                    <td> 2004</td>
                  </tr>
                  <tr>
                    <th>Propriétaire :</th>
                    <td> Bahrain International Circuit Company S.P.C</td>
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
                    <td> 6 à 24</td>
                  </tr>
                  <tr>
                    <th> Longueur : </th>
                    <td>2,55 KM 6,299 KM</td>
                  </tr>
                  <tr>
                    <th> Largeur max. : </th>
                    <td> 14 M</td>
                  </tr>
                  <tr>
                    <th> Capacité : </th>
                    <td> 50000 Personnes</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="flex justify-end">
              <ImageComponent
                style={{ width: 435, height: 300 }}
                src="/images/circuits/sakhir.jpg"
              />
            </div>
          </div>
        </div>

        <div className="m-3 w-[435px]">
          <table className="flex flex-col border-2 border-black">
            <thead className="flex">
              <tr className="flex flex-col">
                <th className="bg-red-500 italic">
                  🇶🇦 CIRCUIT INTERNATIONAL DE SAKHIR
                </th>
                <td>
                  <div>
                    <ImageComponent
                      style={{ width: 435, height: 300 }}
                      src="/images/circuits/sakhircircuit.png"
                    />
                  </div>
                </td>
              </tr>
            </thead>

            <tbody className="bg-red-500 italic">
              <tr>
                <th className="pl-2">DONNÉES DE COURSE</th>
              </tr>
            </tbody>

            <tfoot className="text-left p-2">
              <tr>
                <th>NOMBRE DE TOURS</th>
                <td> 57</td>
              </tr>
              <tr>
                <th>LONGUEUR DU CIRCUIT</th>
                <td> 5,412 KM</td>
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

export default circuitSakhir
