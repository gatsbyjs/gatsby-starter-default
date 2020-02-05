/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import albumStyles from "../components/album.module.css"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <main>{children}</main>
      <footer className={`w-full h-275 mt-40 ${albumStyles.footer}`}>
        <div className="text-gray-100 text-center w-full pt-12">
          Ask Your Dog Guru © {new Date().getFullYear()}
        </div>
        <ul className={`flex justify-center mt-8 text-gray-100`}>
          <li className="ml-6 mr-6 hover">
            <a href="https://www.facebook.com/AskYourDogGuru/">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.966 24H1.34C.6 24 0 23.4 0 22.66V1.064c0-.74.6-1.34 1.34-1.34h21.596c.74 0 1.34.6 1.34 1.34V22.66c0 .74-.6 1.34-1.34 1.34H16.75v-9.4h3.155l.473-3.664H16.75v-2.34c0-1.06.294-1.783 1.816-1.783h1.94V3.534c-.336-.044-1.488-.144-2.827-.144-2.797 0-4.712 1.707-4.712 4.843v2.702H9.803V14.6h3.163V24z"
                  fill="#F7FAFC"
                />
              </svg>
            </a>
          </li>
          <li className="ml-6 mr-6">
            <a href="https://twitter.com/ask_dogguru">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.184 2.142a9.728 9.728 0 0 1-2.86.804A5.096 5.096 0 0 0 23.514.12 9.81 9.81 0 0 1 20.35 1.36a4.912 4.912 0 0 0-3.635-1.612c-2.749 0-4.979 2.287-4.979 5.107 0 .4.043.789.128 1.163C7.725 5.804 4.056 3.773 1.598.679a5.2 5.2 0 0 0-.674 2.57c0 1.771.88 3.335 2.216 4.251a4.89 4.89 0 0 1-2.257-.637v.063c0 2.475 1.717 4.54 3.997 5.007a4.75 4.75 0 0 1-1.313.18c-.32 0-.634-.03-.937-.09.634 2.027 2.472 3.505 4.652 3.544a9.834 9.834 0 0 1-7.374 2.117 13.867 13.867 0 0 0 7.635 2.293c9.162 0 14.17-7.78 14.17-14.53 0-.222-.004-.444-.012-.662a10.223 10.223 0 0 0 2.483-2.643z"
                  fill="#F7FAFC"
                />
              </svg>
            </a>
          </li>
          {/* <li className="ml-6 mr-6">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.954-.275c-3.296 0-3.71.014-5.004.073-1.292.059-2.174.264-2.946.564a5.95 5.95 0 0 0-2.15 1.4 5.95 5.95 0 0 0-1.4 2.15c-.3.772-.506 1.654-.565 2.946-.059 1.295-.073 1.708-.073 5.005 0 3.296.014 3.71.073 5.004.06 1.292.265 2.174.565 2.946a5.95 5.95 0 0 0 1.4 2.15 5.951 5.951 0 0 0 2.15 1.4c.772.3 1.654.506 2.946.564 1.295.06 1.708.073 5.004.073 3.297 0 3.71-.014 5.005-.073 1.292-.058 2.174-.264 2.946-.564a5.95 5.95 0 0 0 2.15-1.4 5.951 5.951 0 0 0 1.4-2.15c.3-.772.505-1.654.564-2.946.06-1.295.073-1.708.073-5.004 0-3.297-.014-3.71-.073-5.005-.059-1.292-.264-2.174-.564-2.946a5.95 5.95 0 0 0-1.4-2.15 5.949 5.949 0 0 0-2.15-1.4c-.772-.3-1.654-.505-2.946-.564-1.295-.06-1.708-.073-5.005-.073zm0 2.187c3.241 0 3.625.012 4.905.07 1.183.054 1.826.252 2.254.418.567.22.97.484 1.396.908.424.425.687.83.907 1.396.167.428.364 1.07.418 2.254.059 1.28.071 1.664.071 4.905 0 3.24-.012 3.624-.07 4.904-.055 1.184-.252 1.826-.419 2.254a3.76 3.76 0 0 1-.907 1.396c-.425.424-.83.688-1.396.908-.428.166-1.07.364-2.254.418-1.28.058-1.664.07-4.905.07-3.24 0-3.625-.012-4.904-.07-1.184-.054-1.827-.252-2.254-.418a3.761 3.761 0 0 1-1.396-.908 3.76 3.76 0 0 1-.908-1.396c-.166-.428-.364-1.07-.418-2.254-.058-1.28-.07-1.663-.07-4.904 0-3.241.012-3.625.07-4.905.054-1.184.252-1.826.418-2.254.22-.567.483-.971.908-1.396A3.76 3.76 0 0 1 4.796 2.4c.427-.166 1.07-.364 2.254-.418 1.28-.058 1.663-.07 4.904-.07zm0 3.718a6.233 6.233 0 1 0 0 12.466 6.233 6.233 0 0 0 0-12.466zm0 10.279a4.046 4.046 0 1 1 0-8.092 4.046 4.046 0 0 1 0 8.091zM19.89 5.383a1.457 1.457 0 1 1-2.913 0 1.457 1.457 0 0 1 2.913 0z"
                fill="#F7FAFC"
              />
            </svg>
          </li> */}
        </ul>
      </footer>
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
