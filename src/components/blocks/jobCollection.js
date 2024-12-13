import React from "react"
import { Box, Container, Grid, Heading, Link } from "@theme-ui/components"

import { getJobPath } from "../../utils/path"
import { InboundLink } from "../link"
import { LanguageSwitcherContext } from "../../context/languageSwitcherContext"

const JobCollection = ({ block }) => {
  console.log(block)
  const locale = React.useContext(LanguageSwitcherContext).activeLocale
  return (
    <Container>
      {block.title && (
        <Heading as="h2" mb={4}>
          {block.title}
        </Heading>
      )}

      <Grid gap={4} columns={[1, 2, 3]}>
        {block.jobs.map((job, index) => (
          <Box
            key={index}
            sx={{ p: 3, border: "1px solid", borderColor: "muted" }}
          >
            <Heading as="h3" mb={2}>
              {job.name}
            </Heading>
            <Box mb={3} dangerouslySetInnerHTML={{ __html: job.description }} />

            <Box sx={{ display: "flex", gap: 3 }}>
              {/* Link interno alla pagina del lavoro */}
              <InboundLink
                to={getJobPath(job, locale)}
                sx={{
                  color: "primary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Maggiori informazioni
              </InboundLink>

              {/* Link esterno (es. LinkedIn) */}
              {job.link && (
                <InboundLink
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Candidati su LinkedIn
                </InboundLink>
              )}
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  )
}

export default JobCollection
