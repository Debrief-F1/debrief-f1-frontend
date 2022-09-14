import Page from "@/components/Page"

const classementPilotes = () => {
  return (
    <Page>
      <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500">
        <header>
          {" "}
          <h1 className="border-4 border-black rounded-xl text-white italic text-xl font-bold bg-red-600 text-center w-full">
            CLASSEMENT PILOTES
          </h1>
        </header>

        <section className="w-full py-auto px-auto mt-9 ">
          <ol className="border-2 border-black gap-x-2 flex flex-col justify-between text-xl font-bold bg-gradient-to-b from-gray-100 to-gray-500 w-70">
            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">1</p>
              <img
                src="https://www.clipartmax.com/png/middle/193-1936092_red-bull-logo-red-bull-f1-logo.png"
                className="w-10 h-10 ml-3"
                alt="redBullRacing"
              />
              <p className="grow text-center">M. Verstappen</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/743/100"
                alt="mVerstappen"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">2</p>
              <img
                src="https://www.clipartmax.com/png/middle/193-1936092_red-bull-logo-red-bull-f1-logo.png"
                className="w-10 h-10 ml-3"
                alt="redBullRacing"
              />
              <p className="grow text-center">S. Perez</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/714/100"
                alt="sPerez"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center ">
              <p className="border-2 border-black w-12 text-center">3</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Scuderia_Ferrari_Logo.svg/1200px-Scuderia_Ferrari_Logo.svg.png"
                className="w-8 h-10 ml-3"
                alt="Ferari"
              />
              <p className="grow text-center">C. Leclerc</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/757/100"
                alt="cLeclerc"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">4</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Scuderia_Ferrari_Logo.svg/1200px-Scuderia_Ferrari_Logo.svg.png"
                className="w-8 h-10 ml-3"
                alt="Ferari"
              />
              <p className="grow text-center">C. Sainz</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/748/100"
                alt="cSainz"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">5</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png"
                className="w-8 h-10 ml-3"
                alt="Mercedes"
              />
              <p className="grow text-center">G. Russell</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/764/100"
                alt="gRussell"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">6</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png"
                className="w-8 h-10 ml-3"
                alt="Mercedes"
              />
              <p className="grow text-center">L. Hamilton</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/4000000000000644/100"
                alt="lHamilton"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">7</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/McLaren_Speedmark.svg/800px-McLaren_Speedmark.svg.png"
                className="w-8 h-10 ml-3"
                alt=""
              />
              <p className="grow text-center">L. Norris</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/766/100"
                alt="alphaTauri"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">8</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/16/Logo_Alfa_Romeo_%282015%29.svg/langfr-560px-Logo_Alfa_Romeo_%282015%29.svg.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">V. Bottas</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/722/100"
                alt="hassF1Team"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">9</p>
              <img
                src="https://logodownload.org/wp-content/uploads/2022/03/alpine-f1-logo-1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">E. Ocon</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/745/100"
                alt="astonMartin"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">10</p>
              <img
                src="https://logodownload.org/wp-content/uploads/2022/03/alpine-f1-logo-1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">F. Alonso</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/628/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">11</p>
              <img
                src="https://static.cdnlogo.com/logos/a/74/alphatauri.svg"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">P. Gasly</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/762/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">12</p>
              <img
                src="https://logodownload.org/wp-content/uploads/2022/03/haas-f1-team-logo-1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">K. Magnussen</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/735/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">13</p>
              <img
                src="https://concept-prog.com/wp-content/uploads/2017/12/Aston-Martin-logo.png"
                className="w-12 h- ml-312"
                alt=""
              />
              <p className="grow text-center">S. Vettel</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/3000000000000642/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">14</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/McLaren_Speedmark.svg/800px-McLaren_Speedmark.svg.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">D. Ricciardo</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/715/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">15</p>
              <img
                src="https://static.cdnlogo.com/logos/a/74/alphatauri.svg"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">Y. Tsunoda</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/777/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">16</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/16/Logo_Alfa_Romeo_%282015%29.svg/langfr-560px-Logo_Alfa_Romeo_%282015%29.svg.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">G. Zhou</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/780/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">17</p>
              <img
                src="https://logodownload.org/wp-content/uploads/2022/03/haas-f1-team-logo-1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">M. Schumacher</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/773/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">18</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_Williams_F1.png/2560px-Logo_Williams_F1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">A. Albon</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/768/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">19</p>
              <img
                src="https://concept-prog.com/wp-content/uploads/2017/12/Aston-Martin-logo.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">L. Stroll</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/759/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">20</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_Williams_F1.png/2560px-Logo_Williams_F1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">N. Latifi</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/765/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">21</p>
              <img
                src="https://concept-prog.com/wp-content/uploads/2017/12/Aston-Martin-logo.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">N. Hülkenberg</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/706/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">22</p>
              <img src="" className="w-8 h-8 ml-3" alt="" />
              <p className="grow text-center">N. De Vries</p>
              <img className="w-20" src="" alt="" />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">23</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/16/Logo_Alfa_Romeo_%282015%29.svg/langfr-560px-Logo_Alfa_Romeo_%282015%29.svg.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="grow text-center">R. Kubica</p>
              <img
                className="w-10 h-10 mr-3"
                src="https://www.lequipe.fr/_medias/img-sportif-formule1/2500000000000641/100"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">24</p>
              <img src="" className="w-8 h-8 ml-3" alt="" />
              <p className="grow text-center">J. Vips</p>
              <img className="w-20" src="" alt="" />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>
          </ol>
        </section>
      </div>
    </Page>
  )
}

export default classementPilotes
