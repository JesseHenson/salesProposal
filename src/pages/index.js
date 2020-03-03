import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LunchGenerator from "../components/lunch"
import SimpleList from "../components/BasicList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleList />
  </Layout>
)

export default IndexPage
