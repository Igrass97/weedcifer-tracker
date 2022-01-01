import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { User } from '../User/User'

export const Header = () => {
  return (
    <Box
      as="nav"
      height="60px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="purple.700"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      paddingY="1rem"
      paddingX="2rem"
    >
      <Heading fontSize="lg">Weedcifer Tracker</Heading>
      <User />
    </Box>
  )
}
