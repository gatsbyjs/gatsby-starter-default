import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        holla:{" "}
        <a
          href="https://twitter.com/Soham_Asmi"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Soham_Asmi
        </a>
      </p>
    </Layout>
  )
}
