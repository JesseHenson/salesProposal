import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const identity = useIdentityContext(
    "https://sales-proposal-staffscapes.netlify.com"
  )
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <nav style={{ background: "green" }}>
        {" "}
        Login Status:
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      </nav>
      <main>{children}</main>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
