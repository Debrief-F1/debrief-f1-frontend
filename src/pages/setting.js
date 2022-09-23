import { useAppContext } from "@/components/AppContext.jsx"
import Link from "@/components/Link"
import Page from "@/components/Page"

const Settings = () => {
  const {
    state: { session },
  } = useAppContext()

  return (
    <Page name={Settings}>
      <div className="p-10">
        <h1 className=" text-3xl font-bold mb-10">Settings</h1>
        <div>
          <h1 className="text-xl font-bold">Profil:</h1>
          {session ? (
            <div className="px-5 flex flex-col gap-5">
              <div className="text-center font-bond underline">
                {session.user.role === "ADMIN" ? (
                  <h1 className=" skew-y-12">ADMINISRATOR</h1>
                ) : null}
              </div>

              <h1>Name: {session.user.username}</h1>
              <h1>DisplayName: {session.user.displayName}</h1>
              <h1>email: {session.user.email}</h1>
              <div className="flex justify-center">
                <Link
                  className="mt-5 p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                  href="/user-patch"
                >
                  modify{" "}
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-red-700 text-3xl font-bold text-center">
                t'as pas de compte
              </p>
              <div className="mt-5 flex justify-center">
                <Link className="bg-blue-500 px-5 py-2" href="/inscription">
                  Sign-Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Page>
  )
}
export default Settings
