import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/index.scss"

export default () => (
  <Layout>
    <Head title="Home" />
    <h1>Hello.</h1>
    <p>Developer? <Link to="/contact">Holla atcha boi</Link></p>
  </Layout>
);
