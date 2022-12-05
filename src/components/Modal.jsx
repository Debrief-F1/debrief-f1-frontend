const Modal = (props) => {
  const { open, onClose, children } = props

  if (!open) {
    return null
  }

  return (
    <>
      <div className="fixed inset-0 w-full  h-screen overflow-auto  rounded-md border-2 border-indigo-600   ">
        <div className="">
          {children}
          <button
            className=" absolute top-0 right-0 px-2 m-2 w-16 text-white font-bold bg-blue-500 active:bg-blue-700 rounded-xl "
            onClick={onClose}
          >
            ferme
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
