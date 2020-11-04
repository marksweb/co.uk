import React from "react"
import Layout from "../layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/">Return home</Link>
      </p>
    </Layout>
  )
}

export default NotFound