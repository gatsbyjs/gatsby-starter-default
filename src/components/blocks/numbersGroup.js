import React, { useEffect, useState } from "react"
import { Box, Text, Heading, Flex } from "@theme-ui/components"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const NumbersGroup = ({ numbers }) => {
  return (
    <Box>
      <Flex>
        {numbers.map(number => (
          <Number number={number} />
        ))}
      </Flex>
    </Box>
  )
}

const Number = ({ number }) => {
  const [startCount, setStartCount] = useState(false)
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView === true && startCount === false) {
      setStartCount(true)
    }
  }, [inView])

  return (
    <Box mr={4} ref={ref}>
      <Heading variant="h2" sx={{ marginTop: 0, marginBottom: 2 }}>
        <CountUp
          end={number.float}
          prefix={number.prefix ? `${number.prefix} ` : null}
          suffix={number.suffix ? ` ${number.suffix}` : null}
          start={startCount}
        />
      </Heading>
      <Text variant="caption">{number.legend}</Text>
    </Box>
  )
}

export default NumbersGroup
