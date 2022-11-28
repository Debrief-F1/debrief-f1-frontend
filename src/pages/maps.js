import Page from "@/components/Page"
import Image from "@/components/Image"

const maps = () => {
  return (
    <Page>
      <h1 className="bg-gray-300 text-center font-bold italic mb-3">
        GRAND PRIX DE BAHREIN
      </h1>
      <div className="flex">
        <p className="max-w-[405px]">
          Le circuit international de Sakhir est le circuit du Grand Prix de
          Bahreïn de Formule 1 inauguré en 2004 lors du Grand Prix de Bahreïn
          2004. Il est basé à Manama, la capitale de Bahreïn.
        </p>
        <table className="flex flex-col border-2 border-black">
          <thead>
            <tr className="flex flex-col">
              <th className="bg-gray-300 italic">
                🇶🇦 CIRCUIT INTERNATIONAL DE SAKHIR
              </th>
              <td>
                <div className="h-[300px]">
                  <Image
                    style={{ width: 300, height: 300 }}
                    src="/images/circuits/sakhir.svg.png"
                  />
                </div>
              </td>
            </tr>
          </thead>
          <tbody className="bg-gray-300 italic">
            <tr>
              <th>DONNÉES DE COURSE</th>
            </tr>
          </tbody>
          <tfoot className="text-left">
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
    </Page>
  )
}

export default maps
