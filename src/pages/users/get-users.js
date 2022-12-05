import api from "@/services/api.js"
import { useEffect, useState } from "react"
import { ImBin2 } from "react-icons/im"

const GetUsers = () => {
  const [users, setUsers] = useState(null)
  const [count, setCount] = useState(null)
  useEffect(() => {
    ;(async () => {
      const {
        data: { result, count },
      } = await api.get("/users")
      setUsers(result)
      setCount(count)
    })()
  }, [])

  if (!users) {
    return <p>Loading </p>
  }
  /* je ne sais lire */

  return (
    <div className="h-80 bg-slate-500 overflow-y-auto mb-10">
      <div className="bg-slate-700 flex justify-between  text-white text-2xl sticky top-0">
        <h1 className=" text-center  text-2xl ">LIST OF USERS</h1>
        <h1 className=" text-center  text-2xl ">TOTAL: {count}</h1>
      </div>
      <ul>
        {users.map((user) => (
          <li className="p-3 flex justify-between" key={user.id}>
            <div>
              <span className="px-2 bg-blue-600">{user.id}</span>
              <span className="px-2 bg-red-600">{user.email}</span>
              <span className="px-2 bg-yellow-600">{user.username}</span>
              <span className="px-2 bg-blue-300">{user.displayName}</span>
            </div>
            <button
              onClick={() => {
                api.delete(`/users/${user.id}`)
                window.location.reload()
              }}
            >
              <ImBin2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GetUsers
