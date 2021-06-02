import React, { FC } from "react"
import { Helmet } from "react-helmet"

interface SeoProps {
  description?: string
  lang?: string
  title: string
  page?: string
  author?: string
}

const Seo: FC<SeoProps> = ({
  description = "",
  lang = "en",
  title,
  author = "",
  page,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title ? `%s | ${page}` : undefined}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
      ]}
    />
  )
}

export { Seo }
