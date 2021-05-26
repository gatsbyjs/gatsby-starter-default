import React from "react"
import { Box, Container, Text } from "@theme-ui/components"

const Embed = ({ title, code, fullWidth }) => {
  const Wrapper = fullWidth ? Box : Container
  return (
    <Wrapper mb={5}>
      {title && <Text mb={3}>{title}</Text>}
      <Box
        sx={{ iframe: { width: "100%" } }}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </Wrapper>
  )
}

export default Embed
