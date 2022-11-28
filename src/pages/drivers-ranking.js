import Image from "@/components/Image"
import Page from "@/components/Page"

const driversRanking = () => {
  return (
    <Page>
      <div>
        <div className="rounded-lg border-2 border-black bg-gray-400 w-screen h-screen">
          <h1 className="mt-1 mb-1 border-2 border-black rounded-lg text-white italic font-bold bg-red-600 text-center">
            DRIVERS RANKING
          </h1>
          <table className="w-full text-center">
            <thead>
              <tr className="border-2 bg-gray-500">
                <th className="border-2">POS</th>
                <th className="border-2">NAT</th>
                <th className="border-2">PILOTS</th>
                <th className="border-2">IMG</th>
                <th className="border-2">CONSTRUCTORS</th>
                <th className="border-2">PTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>🇳🇱</td>
                <td>VERSTAPPEN</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/verstappen.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/redbulllogo.webp" />
                  </div>
                </td>
                <td>416</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>2</td>
                <td>🇲🇽</td>
                <td>PEREZ</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/perez.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/redbulllogo.webp" />
                  </div>
                </td>
                <td>280</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>3</td>
                <td>🇲🇨</td>
                <td>LECLERC</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/leclerc.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/ferrarilogo.webp" />
                  </div>
                </td>
                <td>275</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>4</td>
                <td>🇬🇧</td>
                <td>RUSSELL</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/russell.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/mercedeslogo.webp" />
                  </div>
                </td>
                <td>231</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>5</td>
                <td>🇬🇧</td>
                <td>HAMILTON</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/hamilton.webp" />
                  </div>
                </td>
                <td className=" flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/mercedeslogo.webp" />
                  </div>
                </td>
                <td>216</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>6</td>
                <td>🇪🇸</td>
                <td>SAINZ</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/sainz.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/ferrarilogo.webp" />
                  </div>
                </td>
                <td>212</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>7</td>
                <td>🇬🇧</td>
                <td>NORRIS</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/norris.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/mclarenlogo.webp" />
                  </div>
                </td>
                <td>111</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>8</td>
                <td>🇫🇷</td>
                <td>OCON</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/ocon.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alpinelogo.webp" />
                  </div>
                </td>
                <td>82</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>9</td>
                <td>🇪🇸</td>
                <td>ALONSO</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/alonso.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alpinelogo.webp" />
                  </div>
                </td>
                <td>231</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>10</td>
                <td>🇫🇮</td>
                <td>BOTTAS</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/bottas.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alfaromeologo.webp" />
                  </div>
                </td>
                <td>47</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>11</td>
                <td>🇩🇪</td>
                <td>VETTEL</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/vettel.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/astonmartinlogo.webp" />
                  </div>
                </td>
                <td>36</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>12</td>
                <td>🇦🇺</td>
                <td>RICCIARDO</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/ricciardo.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/mclarenlogo.webp" />
                  </div>
                </td>
                <td>35</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>13</td>
                <td>🇩🇰</td>
                <td>MAGNUSSEN</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/magnussen.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/haaslogo.webp" />
                  </div>
                </td>
                <td>24</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>14</td>
                <td>🇫🇷</td>
                <td>GASLY</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/gasly.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alphataurilogo.webp" />
                  </div>
                </td>
                <td>23</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>15</td>
                <td>🇨🇦</td>
                <td>STROLL</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/stroll.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/astonmartinlogo.webp" />
                  </div>
                </td>
                <td>13</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>16</td>
                <td>🇩🇪</td>
                <td>SCHUMACHER</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/schumacher.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/haaslogo.webp" />
                  </div>
                </td>
                <td>12</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>17</td>
                <td>🇯🇵</td>
                <td>TSUNODA</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/tsunoda.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alphataurilogo.webp" />
                  </div>
                </td>
                <td>12</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>18</td>
                <td>🇨🇳</td>
                <td>ZHOU</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/zhou.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/alfaromeologo.webp" />
                  </div>
                </td>
                <td>6</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>19</td>
                <td>🇹🇭</td>
                <td>ALBON</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/albon.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/williamslogo.webp" />
                  </div>
                </td>
                <td>4</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>20</td>
                <td>🇨🇦</td>
                <td>LATIFI</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/latifi.webp" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/williamslogo.webp" />
                  </div>
                </td>
                <td>2</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>21</td>
                <td>🇹🇭</td>
                <td>DE VRIES</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/williamslogo.webp" />
                  </div>
                </td>
                <td>2</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>22</td>
                <td>🇩🇪</td>
                <td>HULKENBGER</td>
                <td>
                  <div className="w-7">
                    <Image src="/images/pilots/" />
                  </div>
                </td>
                <td className="flex justify-center">
                  <div className="w-7">
                    <Image src="/images/logo/astonmartinlogo.webp" />
                  </div>
                </td>
                <td>4</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Page>
  )
}

export default driversRanking
