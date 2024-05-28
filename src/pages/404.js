import { Box } from "@theme-ui/components"
import React from "react"
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
  <Box>
    <Helmet>
      <title>404: Not found</title>
    </Helmet>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Box>
)

export default NotFoundPage
