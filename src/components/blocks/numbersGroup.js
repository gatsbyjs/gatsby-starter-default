import React from "react"
import { Box, Text, Grid, Heading, Flex } from "@theme-ui/components"
import CountUp from "react-countup"

const NumbersGroup = ({ numbers }) => {
  return (
    <Box>
      <Flex>
        {numbers.map(number => (
          <Box mr={4}>
            <Heading variant="h2" sx={{ marginTop: 0, marginBottom: 2 }}>
              <CountUp
                end={number.float}
                prefix={number.prefix ? `${number.prefix} ` : null}
                suffix={number.suffix ? ` ${number.suffix}` : null}
              />
            </Heading>
            <Text variant="caption">{number.legend}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default NumbersGroup
