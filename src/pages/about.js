import React from 'react'
import { Link } from "gatsby";
import Head from "../components/head"
import Layout from "../components/layout"


export default () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>About text here Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores doloribus assumenda vel minima sit mollitia. Consequatur, officiis temporibus. Ullam totam alias aspernatur reiciendis blanditiis fuga minus dicta voluptatum minima suscipit cum nam libero est illo tempore dolor, harum animi, doloremque temporibus odit dolore laborum. Ad quaerat laboriosam aliquam sapiente.</p>
      <p>Developer? <Link to="/contact">Holla atcha boi</Link></p>
    </Layout>
  )
}
