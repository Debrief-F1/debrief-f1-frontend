const Table = () => {
  return (
    <div>
      <table className="w- text-center">
        <thead>
          <tr>
            <th className="">POS</th>
            <th className="20">NAT</th>
            <th className="20">PILOTS</th>
            <th className="20">IMG</th>
            <th className="20">CONSTRUCTORS</th>
            <th className="20">PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>🇳🇱</td>
            <td>VERSTAPPEN</td>
            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-10-1.png"
                alt="verstappen"
                className="w-7"
              />
            </td>
            <td className="object-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-2-1.png"
                alt="redbull"
                className="w-7"
              />
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
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-11-1.png"
                alt="perez"
                className="w-7"
              />
            </td>
            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-2-1.png"
                alt="redbull"
                className="w-7"
              />
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
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-9-2.png"
                alt="leclerc"
                className="w-7"
              />
            </td>
            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-5-1.png"
                alt="ferrari"
                className="w-7"
              />
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
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-8-2.png"
                alt="russell"
                className="w-7"
              />
            </td>
            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-6-1.png"
                alt="mercedes"
                className="w-7"
              />
            </td>
            <td>231</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>5</td>
            <td>🇬🇧</td>
            <td>HAMILTON</td>
            <td>
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-19-1.png"
                alt="hamilton"
                className="w-7"
              />
            </td>
            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-6-1.png"
                alt="mercedes"
                className="w-7"
              />
            </td>
            <td>416</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default Table
