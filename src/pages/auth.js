import React from "react"
import IdentityModal, {
  useIdentityContext,
  IdentityContextProvider,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

function App() {
  const url = "https://sales-proposal-staffscapes.netlify.com" // supply the url of your Netlify site instance. VERY IMPORTANT. no point putting in env var since this is public anyway
  return (
    <IdentityContextProvider url={url}>
      <AuthStatusView />
    </IdentityContextProvider>
  )
}
export default App

function AuthStatusView() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.full_name) ||
    "NoName"
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <div>
      <div>
        <button className="RNIW_btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "Log In"}
        </button>
      </div>
      {isLoggedIn ? (
        <pre>{JSON.stringify(identity, null, 2)}</pre>
      ) : (
        "Please Log In"
      )}

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => console.log("hello ", user.user_metadata)}
        onSignup={user => console.log("welcome ", user.user_metadata)}
        onLogout={() => console.log("bye ", name)}
      />
    </div>
  )
}
