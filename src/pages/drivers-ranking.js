import ImageComponent from "@/components/ImageComponent"
import Page from "@/components/Page"

const driversRanking = () => {
  return (
    <Page>
      <div>
        <div className="rounded-lg border-2 border-black bg-gray-400 w-screen h-screen">
          <h1 className="m-1 border-2 border-black bg-red-600 rounded-lg text-white text-center font-bold italic">
            DRIVERS RANKING
          </h1>
          <table className="w-full text-center">
            <thead>
              <tr className="border-2 bg-gray-500">
                <th className="border-2 w-[30px]">POS</th>
                <th className="border-2 w-[30px]">NAT</th>
                <th className="border-2 w-[170px]">PILOTS</th>
                <th className="border-2 w-[170px]">CONSTRUCTORS</th>
                <th className="border-2 w-[45px]">PTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>🇳🇱</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/verstappen.webp" />
                  </div>
                  VERSTAPPEN
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/redbulllogo.webp"
                    />
                  </div>
                </td>
                <td>416</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>2</td>
                <td>🇲🇽</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/perez.webp" />
                  </div>
                  PEREZ
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/redbulllogo.webp"
                    />
                  </div>
                </td>
                <td>280</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>3</td>
                <td>🇲🇨</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7 flex">
                    <ImageComponent src="/images/pilots/leclerc.webp" />
                  </div>
                  LECLERC
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/ferrarilogo.webp"
                    />
                  </div>
                </td>
                <td>275</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>4</td>
                <td>🇬🇧</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/russell.webp" />
                  </div>
                  RUSSELL
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/mercedeslogo.webp"
                    />
                  </div>
                </td>
                <td>231</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>5</td>
                <td>🇬🇧</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/hamilton.webp" />
                  </div>
                  HAMILTON
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/mercedeslogo.webp"
                    />
                  </div>
                </td>
                <td>216</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>6</td>
                <td>🇪🇸</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/sainz.webp" />
                  </div>
                  SAINZ
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/ferrarilogo.webp"
                    />
                  </div>
                </td>
                <td>212</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>7</td>
                <td>🇬🇧</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/norris.webp" />
                  </div>
                  NORRIS
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/mclarenlogo.webp"
                    />
                  </div>
                </td>
                <td>111</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>8</td>
                <td>🇫🇷</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/ocon.webp" />
                  </div>
                  OCON
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/alpinelogo.webp"
                    />
                  </div>
                </td>

                <td>82</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>9</td>
                <td>🇪🇸</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/alonso.webp" />
                  </div>
                  ALONSO
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/alpinelogo.webp"
                    />
                  </div>
                </td>
                <td>81</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>10</td>
                <td>🇫🇮</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/bottas.webp" />
                  </div>
                  BOTTAS
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/alfaromeologo.webp"
                    />
                  </div>
                </td>
                <td>47</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>11</td>
                <td>🇩🇪</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/vettel.webp" />
                  </div>
                  VETTEL
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/astonmartinlogo.webp"
                    />
                  </div>
                </td>
                <td>36</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>12</td>
                <td>🇦🇺</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/ricciardo.webp" />
                  </div>
                  RICCIARDO
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/mclarenlogo.webp"
                    />
                  </div>
                </td>
                <td>35</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>13</td>
                <td>🇩🇰</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/magnussen.webp" />
                  </div>
                  MAGNUSSEN
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/haaslogo.webp"
                    />
                  </div>
                </td>
                <td>24</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>14</td>
                <td>🇫🇷</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/gasly.webp" />
                  </div>
                  GASLY
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/alphataurilogo.webp"
                    />
                  </div>
                </td>
                <td>23</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>15</td>
                <td>🇨🇦</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/stroll.webp" />
                  </div>
                  STROLL
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/haaslogo.webp"
                    />
                  </div>
                </td>
                <td>13</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>16</td>
                <td>🇩🇪</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/schumacher.webp" />
                  </div>
                  SCHUMACHER
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/haaslogo.webp"
                    />
                  </div>
                </td>

                <td>12</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>17</td>
                <td>🇯🇵</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/tsunoda.webp" />
                  </div>
                  TSUNODA
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/alphataurilogo.webp"
                    />
                  </div>
                </td>
                <td>12</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>18</td>
                <td>🇨🇳</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/zhou.webp" />
                  </div>
                  ZHOU
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/alfaromeologo.webp"
                    />
                  </div>
                </td>
                <td>6</td>
              </tr>
            </tbody>{" "}
            <tbody>
              <tr>
                <td>19</td>
                <td>🇹🇭</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/albon.webp" />
                  </div>
                  ALBON
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/williamslogo.webp"
                    />
                  </div>
                </td>
                <td>4</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>20</td>
                <td>🇨🇦</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/latifi.webp" />
                  </div>
                  LATIFI
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/williamslogo.webp"
                    />
                  </div>
                </td>
                <td>2</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>21</td>
                <td>🇹🇭</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/devries.webp" />
                  </div>
                  DE VRIES
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/williamslogo.webp"
                    />
                  </div>
                </td>
                <td>2</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>22</td>
                <td>🇩🇪</td>
                <td className="flex justify-start gap-3">
                  <div className="w-7">
                    <ImageComponent src="/images/pilots/hulkenbger.webp" />
                  </div>
                  HULKENBGER
                </td>
                <td>
                  <div className="flex justify-center">
                    <ImageComponent
                      style={{ width: 30, height: 30 }}
                      src="/images/logo/astonmartinlogo.webp"
                    />
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
