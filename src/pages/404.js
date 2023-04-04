import { Box } from "@theme-ui/components"
import React from "react"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Box>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Box>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
