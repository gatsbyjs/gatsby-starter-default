import { graphql, useStaticQuery } from "gatsby"

export const useContent = type => {
  const { yaml } = useStaticQuery(
    graphql`
      query SiteQuery {
        yaml: contentsYaml {
          homepage {
            title
            intro

            signupForm {
              title
              redirectUrl
              terms
              buttonLabel
              media {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 80, quality: 90, placeholder: BLURRED)
                }
              }
            }

            backgrounds {
              author
              sourceUrl
              media {
                publicURL
                childImageSharp {
                  gatsbyImageData(quality: 80, placeholder: DOMINANT_COLOR)
                }
              }
            }
          }
        }
      }
    `
  )

  return yaml
}

export default useContent
