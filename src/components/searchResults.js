import React, { useEffect, useState } from "react"
import { Box, Heading, Input, Text } from "@theme-ui/components"
import DatoCmsSearch from "datocms-search/dist/datocms-search.base"
import { Link } from "gatsby"
import { i18nContext } from "../context/i18nContext"

const client = new DatoCmsSearch("5de23d9dfe9dde8be90004ab3d663b", "production")

const SearchResults = ({ locale }) => {
  const [query, setQuery] = useState("")
  const [currentQuery, setCurrentQuery] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    // console.log(query)
    // Update the document title using the browser API
    client
      .search(currentQuery, { locale: locale })
      .then(function (response) {
        console.info(response.results)
        // [
        //   {
        //     title: "The Crucifix by Brunelleschi",
        //     body: "...Santa Maria Novella in <strong class=\"highlight\">Florence</strong>..."
        //     url: "http://www.smn.it/en/opere/5104-the-crucifix-by-brunelleschi/",
        //   },
        //   ...
        // ]
        console.info(response.total)
        setResults(response.results)
        // 42
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [currentQuery])

  return (
    <i18nContext.Consumer>
      {t => (
        <Box>
          <Box as="form" name="search" sx={{ mb: 6 }}>
            <Input
              onChange={e => setQuery(e.target.value)}
              type="text"
              name="query"
              id="query"
              value={query}
              required
              sx={{ mb: 3, padding: 3, fontSize: 3 }}
            />
            {/*           <Button onClick={handleSubmit}>{t.search}</Button> */}
          </Box>
          <Box>
            {results.length > 0 ? (
              <Box>
                <Heading sx={{ fontSize: 3, mb: 3 }}>
                  {currentQuery}: {results.length} {t.results}
                </Heading>
                {results.map((result, index) => (
                  <Box sx={{ mb: 4 }} key={index}>
                    <Link to={result.url}>
                      <Heading
                        sx={{ color: "primary", fontSize: 5, mb: 3 }}
                        dangerouslySetInnerHTML={{
                          __html: result.title.split("|")[0],
                        }}
                      />
                    </Link>
                    <Box dangerouslySetInnerHTML={{ __html: result.body }} />
                  </Box>
                ))}
              </Box>
            ) : (
              <Text>{t.noResults}</Text>
            )}
          </Box>
        </Box>
      )}
    </i18nContext.Consumer>
  )
}

export default SearchResults
