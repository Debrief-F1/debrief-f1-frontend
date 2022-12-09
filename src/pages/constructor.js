import Page from "@/components/Page"
import ImageComponent from "@/components/ImageComponent"

const constructor = () => {
  return (
    <Page>
      <div className="flex justify-between rounded-lg text-black italic font-bold">
        <div className="flex flex-col ml-1">
          <div className="flex">
            <p className="w-7">
              <ImageComponent src="/images/logo/redbulllogo.webp" />
            </p>
            <h1 className="text-2xl flex flex-col">RED BULL RACING</h1>
          </div>
          <p>ANNÉE DE CRÉATION : 2005</p>
          <p>FONDATEUR : Dietrich MATESCHITZ</p>
          <p>PILOTE(S) : </p>
          <p>Max VERSTAPPEN 🇳🇱</p>
          <p>Sergio PÉREZ🇲🇽</p>
          <p>Jüri VIPS🇪🇪</p>
        </div>
        <div className="h-full flex flex-wrap">
          <ImageComponent
            style={{ width: 350, height: 100 }}
            src="/images/cars/redbullcar.webp"
          />
        </div>
      </div>

      <h2 className="bg-red-600 mt-2">PALMARÈS RED BULL RACING</h2>

      <table className="flex text-black italic font-bold">
        <thead>
          <tr className="flex flex-col text-left ml-1">
            <th>DÉBUT EN F1 :</th>
            <th>PREMIÈRE VICTOIRE EN F1 :</th>
            <th>GRAND PRIX DISPUTÉS :</th>
            <th>VICTOIRES :</th>
            <th>TITRES CONSTRUCTEUR :</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex flex-col">
            <td>GP D'Australie 2015</td>
            <td>GP DE Chine 2009</td>
            <td>347</td>
            <td>91</td>
            <td>4 (2010, 2011, 2012, 2013)</td>
          </tr>
        </tbody>
      </table>

      <div>
        <h3 className="bg-red-600 mt-2">ADMNINISTRATIF</h3>
        <table className="flex text-black italic font-bold">
          <thead>
            <tr className="flex flex-col text-left ml-1">
              <th>SITE :</th>
              <th>ADRESSE :</th>
              <th>TEL :</th>
              <th>FAX :</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col">
              <td>
                <a>www.redbullracing.com</a>
              </td>
              <td>Bradbourne drive Tilbrook, Milton Keynes MK7 8BJ</td>
              <td>44 (0) 1908 279 700</td>
              <td>44 (0) 1908 279 711</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  )
}

export default constructor
