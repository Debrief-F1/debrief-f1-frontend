import classNames from "classnames"
import { useEffect, useState } from "react"

const EVENT_START_DATE = Date.now() + 60 * 60 * 3 * 8 * 1000
const diff = () => EVENT_START_DATE - Date.now()
const init = diff()

const CountdownRace = (props) => {
  const { className } = props
  const [dateDiff, setDateDiff] = useState(init)

  useEffect(() => {
    const timerId = setInterval(() => {
      if (diff() < 0) {
        setDateDiff(0)
        clearInterval(timerId)

        return
      }

      setDateDiff(diff())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  const date = new Date(0 + dateDiff)

  return (
    <div
      className={classNames(
        "flex flex-col w-11/12 h-fit mx-auto md:mx-0 md:w-[370px] bg-gray-400 text-sm pointer-events-auto bg-clip-padding rounded-lg border-2 border-black block",
        className
      )}
    >
      <div className="p-2 border-b border-black rounded-t-lg">
        <p className="flex items-center text-center font-bold text-black">
          Next Race : Brasil 🇧🇷
        </p>
      </div>
      <div className="flex justify-center p-3 bg-gray-400 rounded-b-lg text-black text-center font-bold gap-2">
        <div>
          <p>JOURS</p>
          {String(date.getUTCDay()).padStart(2, "0")}
        </div>
        <div>
          <p>HEURES</p>
          {String(date.getUTCHours()).padStart(2, "0")}
        </div>

        <div>
          <p>MINUTES</p>
          {String(date.getUTCMinutes()).padStart(2, "0")}
        </div>

        <div>
          <p>SECONDES</p>
          {String(date.getUTCSeconds()).padStart(2, "0")}
        </div>
      </div>
    </div>
  )
}

export default CountdownRace
