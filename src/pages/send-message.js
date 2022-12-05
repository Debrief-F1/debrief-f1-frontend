import { useState } from "react"
import api from "@/services/api"

const SendMessage = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e, resetForm) => {
    e.preventDefault()

    if (!email || !subject || !message) {
      console.log("error")

      return
    }

    console.log(456)

    try {
      setLoading(true)
      const { data } = await api.post(`/api/email`, {
        email,
        subject,
        message,
      })
      setLoading(false)
      console.log("msg sensed")
      resetForm()
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <div className="">
      <header className="flex flex-col p-3 items-center">
        <form onSubmit={submitHandler}>
          <h1 className="text-2xl font-bold">Send Message</h1>
          <div className="flex flex-col my-2">
            <label htmlFor="email">Email</label>
            <input
              className="px-3 border border-black"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            ></input>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="subject">Subject</label>
            <input
              className="px-3 border border-black"
              id="subject"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="px-3 border border-black"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label></label>
            <button
              className="bg-blue-600 rounded-xl p-2"
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </header>
    </div>
  )
}

export default SendMessage
