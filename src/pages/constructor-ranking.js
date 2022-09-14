import Page from "@/components/Page"

const ConstructorsRanking = () => {
  return (
    <Page>
      <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500">
        <header>
          {" "}
          <h2 className="border-4 border-black rounded-xl text-white italic text-xl font-bold bg-red-600 text-center w-full">
            CLASSEMENT CONSTRUCTEURS
          </h2>
        </header>

        <section className="w-full py-auto px-auto mt-9 ">
          <ol className="border  gap-x-2 flex flex-col justify-between text-xl font-bold bg-gradient-to-b from-gray-100 to-gray-500 w-70">
            <li className="border  flex flex-start justify-between place-items-center">
              <p className="border  w-12 text-center">1</p>
              <img
                src="https://www.clipartmax.com/png/middle/193-1936092_red-bull-logo-red-bull-f1-logo.png"
                className="w-10 h-10 ml-3"
                alt=""
              />
              <p className="text-center grow">Red Bull Racing</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/120/120"
                alt="redBullRacing"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">2</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Scuderia_Ferrari_Logo.svg/1200px-Scuderia_Ferrari_Logo.svg.png"
                className="w-8 h-10 ml-3"
                alt=""
              />
              <p className="text-center grow">Ferrari</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/3/120"
                alt="ferrari"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center ">
              <p className="border-2 border-black w-12 text-center">3</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png"
                className="w-8 h-10 ml-3"
                alt=""
              />
              <p className="text-center grow">Mercedes</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/80/120"
                alt="mercedes"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">4</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/McLaren_Speedmark.svg/800px-McLaren_Speedmark.svg.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="text-center grow">McLaren</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/5/120"
                alt="mcLaren"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">5</p>
              <img
                src="https://logodownload.org/wp-content/uploads/2022/03/alpine-f1-logo-1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="text-center grow">Alpine</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/216/120"
                alt="alpine"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">6</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/16/Logo_Alfa_Romeo_%282015%29.svg/langfr-560px-Logo_Alfa_Romeo_%282015%29.svg.png"
                className="w-8 h-10 ml-3"
                alt=""
              />
              <p className="text-center grow">Alfa Romeo Racing</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/214/120"
                alt="alphaRomeo"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">7</p>
              <img
                src="https://static.cdnlogo.com/logos/a/74/alphatauri.svg"
                className="w-8 h-10 ml-3"
                alt=""
              />
              <p className="text-center grow">Alpha Tauri</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/215/120"
                alt="alphaTauri"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">8</p>
              <img
                src="https://logodownload.org/wp-content/uploads/2022/03/haas-f1-team-logo-1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="text-center grow">Haas F1 Team</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/211/120"
                alt="hassF1Team"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">9</p>
              <img
                src="https://www.pngfind.com/pngs/m/133-1336044_the-gallery-for-aston-martin-logo-png-aston.png"
                className="w-14 h-10 ml-3"
                alt=""
              />
              <p className="text-center grow">Aston Martin</p>
              <img
                className="w-20 pr-3"
                src="https://media.discordapp.net/attachments/967851691569451020/995993930720096286/Sans_titre.png"
                alt="astonMartin"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>

            <li className="border-2 border-black flex flex-start justify-between place-items-center">
              <p className="border-2 border-black w-12 text-center">10</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_Williams_F1.png/2560px-Logo_Williams_F1.png"
                className="w-8 h-8 ml-3"
                alt=""
              />
              <p className="text-center grow">Williams</p>
              <img
                className="w-20 pr-3"
                src="https://www.lequipe.fr/_medias/logo-formule1/12/120"
                alt="williams"
              />
              <p className="border-2 border-black w-12 text-center">300</p>
            </li>
          </ol>
        </section>
      </div>
    </Page>
  )
}

export default ConstructorsRanking
