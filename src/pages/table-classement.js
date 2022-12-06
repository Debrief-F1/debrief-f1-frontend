const TableClassement = () => {
  return (
    <div>
      <table className="w- text-center">
        <thead>
          <tr>
            <th className="">POS</th>
            <th className="20">NAT</th>
            <th className="20">PILOTS</th>

            <th className="20">CONSTructor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>🇳🇱</td>
            <td>
              <div className="flex pl-3">
                <img
                  src="https://www.f1actu.com/wp-content/uploads/2022/03/image-10-1.png"
                  alt="verstappen"
                  className="w-7"
                />
                VERSTAPPEN
              </div>
            </td>
            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-2-1.png"
                alt="redbull"
                className="w-7"
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>2</td>
            <td>🇲🇽</td>
            <td>
              <div className="flex pl-3">
                <img
                  src="https://www.f1actu.com/wp-content/uploads/2022/03/image-11-1.png"
                  alt="perez"
                  className="w-7"
                />
                PEREZ
              </div>
            </td>

            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-2-1.png"
                alt="redbull"
                className="w-7"
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>3</td>
            <td>🇲🇨</td>
            <td>
              <div className="flex pl-3">
                <img
                  src="https://www.f1actu.com/wp-content/uploads/2022/03/image-9-2.png"
                  alt="leclerc"
                  className="w-7"
                />
                LECLERC
              </div>
            </td>

            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-5-1.png"
                alt="ferrari"
                className="w-7"
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>4</td>
            <td>🇬🇧</td>
            <td>
              <div className="flex pl-3">
                <img
                  src="https://www.f1actu.com/wp-content/uploads/2022/03/image-8-2.png"
                  alt="russell"
                  className="w-7"
                />
                RUSSELL
              </div>
            </td>

            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-6-1.png"
                alt="mercedes"
                className="w-7"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>5</td>
            <td>🇬🇧</td>
            <td>
              <div className="flex pl-3">
                <img
                  src="https://www.f1actu.com/wp-content/uploads/2022/03/image-19-1.png"
                  alt="hamilton"
                  className="w-7"
                />
                HAMILTON
              </div>
            </td>

            <td className="flex justify-center">
              <img
                src="https://www.f1actu.com/wp-content/uploads/2022/03/image-6-1.png"
                alt="mercedes"
                className="w-7"
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default TableClassement
