import React from "react"
import { Box, Container } from "@theme-ui/components"

const Embed = ({ code, fullWidth }) => {
  const Wrapper = fullWidth ? Box : Container
  return (
    <Wrapper mb={5}>
      <Box
        sx={{ iframe: { width: "100%" } }}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </Wrapper>
  )
}

export default Embed
