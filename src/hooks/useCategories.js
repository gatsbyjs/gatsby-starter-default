import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useCategories = () => {
  const categories = useStaticQuery(graphql`
    query CategoriesQuery {
      allDatoCmsProductCategory {
        nodes {
          id
          slug
          title
          locales
          image {
            gatsbyImageData(
              width: 1920
              placeholder: NONE
              forceBlurhash: false
              imgixParams: {
                blendColor: "#212C30"
                blendMode: "multiply"
                blendAlpha: 30
              }
            )
          }
        }
      }
    }
  `)

  return categories
}
