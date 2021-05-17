import React from "react"
import {
  Box,
  Text,
  Grid,
  Heading,
  Flex,
  Link,
  Container,
} from "@theme-ui/components"
import { i18nContext } from "../../context/i18nContext"

const DocumentCollection = ({ title, documents, showPublicationDate }) => {
  return (
    <Box>
      <Container>
        <Grid columns={[1, 1, "2fr 3fr"]} gap={32}>
          <Box></Box>
          <Heading variant="h2">{title}</Heading>
        </Grid>
      </Container>
      <Box>
        {documents.map(document => (
          <Box
            sx={{
              borderTop: "1px solid",
              borderColor: "lightGrey",
              "&:last-child": {
                borderBottom: "1px solid",
                borderColor: "lightGrey",
              },
            }}
          >
            <Container sx={{ paddingY: [4, 5] }}>
              <Flex
                sx={{
                  flexDirection: ["column", "column", "row"],
                  justifyContent: ["space-between"],
                  alignItems: ["flex-start", "flex-start", "center"],
                }}
              >
                <Box sx={{ marginBottom: [3, 3, 0] }}>
                  {showPublicationDate && (
                    <Text as="p" sx={{ fontSize: 0, mb: 2 }}>
                      {document.meta.firstPublishedAt}
                    </Text>
                  )}
                  <Text
                    as="p"
                    variant="h6"
                    sx={{
                      marginTop: [0],
                      marginBottom: [0],
                      fontWeight: "bold",
                    }}
                  >
                    {document.title}
                  </Text>
                  {document.subtitle && (
                    <Text as="p" variant="caption" sx={{ mt: [2] }} mt={[2]}>
                      {document.subtitle}
                    </Text>
                  )}
                </Box>
                <Box sx={{ "*": { mr: 4, "&:last-child": { mr: 0 } } }}>
                  {document.documents.map(file => (
                    <i18nContext.Consumer>
                      {t => (
                        <Link
                          href={file.url}
                          target="blank"
                          rel="noopener nofollow"
                        >
                          {t.download} .{file.format}
                        </Link>
                      )}
                    </i18nContext.Consumer>
                  ))}
                </Box>
              </Flex>
            </Container>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default DocumentCollection
