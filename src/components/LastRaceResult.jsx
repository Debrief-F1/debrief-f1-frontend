import Image from "@/components/Image"

const ConstructorsHome = () => {
  return (
    <div>
      <div className="rounded-lg border-2 border-black bg-gray-400 w-[400px] max-h-[340px]">
        <h1 className="m-1 border-2 border-black bg-red-600 rounded-lg text-white text-center font-bold italic">
          TOP 5 LAST RACE RANKING
        </h1>
        <table className="w-full text-center">
          <thead>
            <tr className="border-2 bg-gray-500">
              <th className="border-2 w-[30px]">POS</th>
              <th className="border-2 w-[160px]">PILOTS</th>
              <th className="border-2 w-[170px]">CONSTRUCTORS</th>
              <th className="border-2 w-[45px]">PTS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td className="flex justify-start gap-3">
                <div className="w-7">
                  <Image src="/images/pilots/verstappen.webp" />
                </div>
                VERSTAPPEN
              </td>
              <td>
                <div className="flex justify-center">
                  <Image
                    style={{ width: 30, height: 30 }}
                    src="/images/logo/redbulllogo.webp"
                  />
                </div>
              </td>
              <td>25</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>2</td>
              <td className="flex justify-start gap-3">
                <div className="w-7 flex">
                  <Image src="/images/pilots/leclerc.webp" />
                </div>
                LECLERC
              </td>
              <td>
                <div className="flex justify-center">
                  <Image
                    style={{ width: 30, height: 30 }}
                    src="/images/logo/ferrarilogo.webp"
                  />
                </div>
              </td>
              <td>18</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>3</td>
              <td className="flex justify-start gap-3">
                <div className="w-7">
                  <Image src="/images/pilots/perez.webp" />
                </div>
                PEREZ
              </td>
              <td>
                <div className="flex justify-center">
                  <Image
                    style={{ width: 30, height: 30 }}
                    src="/images/logo/mercedeslogo.webp"
                  />
                </div>
              </td>
              <td>15</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>4</td>
              <td className="flex justify-start gap-3">
                <div className="w-7">
                  <Image src="/images/pilots/sainz.webp" />
                </div>
                SAINZ
              </td>
              <td>
                <div className="flex justify-center">
                  <Image
                    style={{ width: 30, height: 30 }}
                    src="/images/logo/alpinelogo.webp"
                  />
                </div>
              </td>
              <td>12</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>5</td>
              <td className="flex justify-start gap-3">
                <div className="w-7">
                  <Image src="/images/pilots/russell.webp" />
                </div>
                RUSSELL
              </td>
              <td>
                <div className="flex justify-center">
                  <Image
                    style={{ width: 30, height: 30 }}
                    src="/images/logo/mclarenlogo.webp"
                  />
                </div>
              </td>
              <td>10</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default ConstructorsHome

//           <tbody>
//             <tr>
//               <td>3</td>
//               <td className="flex justify-center">
//                 <div className="w-7">
//                   <Image src="/images/pilots/perez.webp" />
//                 </div>
//                 PEREZ
//               </td>
//               <td className="w-7">
//                 <Image src="/images/logo/mercedeslogo.webp" />
//               </td>
//               <td>15</td>
//             </tr>
//           </tbody>

//           <tbody>
//             <tr>
//               <td>4</td>
//               <td className="flex justify-center">
//                 <div className="w-7">
//                   <Image src="/images/pilots/sainz.webp" />
//                 </div>
//                 SAINZ
//               </td>
//               <td className="w-7">
//                 <Image src="/images/logo/alpinelogo.webp" />
//               </td>
//               <td>12</td>
//             </tr>
//           </tbody>

//           <tfoot>
//             <tr>
//               <td>5</td>
//               <td className="flex justify-center">
//                 <div className="w-7">
//                   <Image src="/images/pilots/russell.webp" />
//                 </div>
//                 RUSSELL
//               </td>
//               <td className="w-7">
//                 <Image src="/images/logo/mclarenlogo.webp" />
//               </td>
//               <td>10</td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default LastRaceResult
