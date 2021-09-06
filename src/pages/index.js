import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
import '../components/wrapper.css';
import '../components/layout.css';
import Header from "../components/header";
import ResourceContainer from "../components/resourceContainer";

const IndexPage = () => {
  return (
    <>
    <Header />
    <ResourceContainer />
    </>
  )
}

export default IndexPage
