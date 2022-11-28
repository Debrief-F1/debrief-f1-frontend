import { useEffect, useState } from "react"

const EVENT_START_DATE = Date.now() + 60 * 60 * 3 * 8 * 1000
const diff = () => EVENT_START_DATE - Date.now()
const init = diff()

const CountdownRace = () => {
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
    <div className="flex flex-col justify-center w-96">
      <div className="bg-gray-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3">
        <div className="bg-gray-500 py-2 px-3 border-b border-black rounded-t-lg">
          <p className="font-bold text-black flex items-center">
            Next Race : Brasil 🇧🇷
          </p>
        </div>
        <div className="flex items-center p-3 bg-gray-500 rounded-b-lg text-black">
          <div>{String(date.getUTCDay()).padStart(2, "0")}</div>:
          <div>{String(date.getUTCHours()).padStart(2, "0")}</div>:
          <div>{String(date.getUTCMinutes()).padStart(2, "0")}</div>:
          <div>{String(date.getUTCSeconds()).padStart(2, "0")}</div>
        </div>
      </div>
    </div>
  )
}

export default CountdownRace
