import Modal from "@/components/Modal"
import Page from "@/components/Page"
import api from "@/services/api.js"
import { useEffect, useState } from "react"
import { ImBin2 } from "react-icons/im"

const GetUsers = () => {
  const [users, setUsers] = useState(null)
  const [count, setCount] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [comments, setComments] = useState([])

  const handleClick = async (event) => {
    const userId = Number(event.currentTarget.getAttribute("data-id"))
    const {
      data: { result },
    } = await api.get(`/comments/${userId}`)
    setComments(result)
    setOpenModal(true)
  }

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

  // const handleClick = () => {

  // }
  const onClose = () => {
    setOpenModal(false)
  }

  /* je ne sais lire */

  return (
    <Page>
      <div className={` bg-slat-500 ${openModal ? "opacity-40" : null} `}>
        <div className="bg-slate-700 p-3 sticky top-0 flex justify-between  text-white text-2xl">
          <h1 className=" text-center  text-2xl ">LIST OF USERS</h1>
          <h1 className=" text-center  text-2xl ">TOTAL: {count}</h1>
        </div>
        <ul>
          <li className="flex justify-between border-t-2 border-white p-3 text-white sticky top-0 bg-slate-700">
            <p className="px-2 w-10 text-center bg-ble-600 ">id</p>
            <p className="px-2 w-48 text-center bg-ble-600 ">E-Mail</p>
            <p className="px-2 w-32 text-center bg-ble-600 ">Username</p>
            <p className="px-2 w-32 text-center bg-ble-600 ">Displayname</p>
            <p>Del</p>
          </li>
          {users.map((user) => (
            <li
              className="p-3 border-2 border-black flex justify-between odd:bg-slate-200"
              key={user.id}
            >
              <p className="px-2 w-10 bg-ble-600 overflow-x-auto">{user.id}</p>
              <button onClick={handleClick} data-id={user.id}>
                <p className="px-2 w-48 bg-blue-300 rounded  overflow-x-auto">
                  {user.email}
                </p>
              </button>
              <p className="px-2 w-32 bg-ellow-600 overflow-x-auto">
                {user.username}
              </p>
              <p className="px-2 w-32 bgblue-300 overflow-x-auto">
                {user.displayName}
              </p>
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
      <Modal className="bg-slat-100 " open={openModal}>
        <div className="flex flex-col m-[25%]  overflow-y-auto bg-white w-[50%] h-80 border-2 border-black rounded-xl">
          <div className=" pl-3 flex justify-between items-center font-bold  sticky top-0 bg-slate-700 rounded-t-xl text-white ">
            Liste des commentaires:
            <button
              className="  w-10 h-10 text-white font-bold bg-blue-500 active:bg-blue-700 rounded-t-xl "
              onClick={onClose}
            >
              X
            </button>
          </div>
          <ul className="">
            <li className="flex justify-between border-t-2 border-white text-white  sticky top-10  bg-slate-700 ">
              <p className=" w-[20%] text-center bg-ble-600 ">userId</p>
              <p className=" w-[20%] text-center bg-ble-600 ">RaceId</p>
              <p className=" w-[60%] text-center bg-ble-600 ">Content</p>
            </li>
            {comments.length ? (
              <div>
                {" "}
                {comments.map((comment) => (
                  <li
                    className="flex justify-between   overflow-x-auto  items-center border-2 border-black odd:bg-slate-200"
                    key={comment.id}
                  >
                    <p className="px-2 w-[20%]">{comment.userId}</p>
                    <p className="px-2 w-[20%]">{comment.raceId}</p>
                    <p className="px-2 w-[60%]">{comment.content}</p>
                  </li>
                ))}
              </div>
            ) : (
              <p className="text-2xl font-bold p-5 text-center">
                Il y'a pas de commentaires pour cet user
              </p>
            )}
          </ul>
        </div>
      </Modal>
    </Page>
  )
}

export default GetUsers
