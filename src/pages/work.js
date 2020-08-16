import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/index"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard/index"
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query SiteProjectsQuery {
      site {
        projectDetails {
          title
          description
          techStack
          role
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Work" />
      <ProjectCard projects={data.site.projectDetails} />
    </Layout>
  )
}

export default AboutPage
