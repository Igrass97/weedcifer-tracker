import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Link as ChakraLink, Divider, Flex, Slide } from '@chakra-ui/react'
import { useSidenav } from './SidenavContext'
import { ROUTES } from '../../Router/routes'

export const Sidenav = () => {
  const { isOpen } = useSidenav()

  if (!isOpen) return null

  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
      <Box
        width="300px"
        height="calc(100vh - 60px)"
        position="fixed"
        top="60px"
        left="0"
        bg="purple.700"
        borderTop="1px solid rgba(255,255,255,0.1)"
      >
        <Flex direction="column" mt="1rem">
          {Object.keys(ROUTES).map(
            routeKey =>
              !ROUTES[routeKey].ignoreLink && (
                <Box key={routeKey} width="100%">
                  <ChakraLink
                    as={Link}
                    _hover={{ textDecoration: 'none' }}
                    to={ROUTES[routeKey].path}
                    pl="1.3rem"
                  >
                    {ROUTES[routeKey].name}
                  </ChakraLink>
                  <Divider mt="1rem" mb="1rem" />
                </Box>
              )
          )}
        </Flex>
      </Box>
    </Slide>
  )
}

export default Sidenav
