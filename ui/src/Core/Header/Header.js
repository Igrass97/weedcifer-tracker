import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { User } from '../User/User'
import { useSidenav } from '../Sidenav/SidenavContext'

export const Header = () => {
  const { setIsOpen, isOpen } = useSidenav()

  const menuButtonProps = {
    role: 'button',
    mr: '10px',
    fontSize: '1.4rem',
    cursor: 'pointer',
  }

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
      zIndex={999}
    >
      <Flex alignItems="center">
        {isOpen ? (
          <SmallCloseIcon
            {...menuButtonProps}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <HamburgerIcon {...menuButtonProps} onClick={() => setIsOpen(true)} />
        )}
        <Heading fontSize="lg" userSelect="none">
          Weedcifer Tracker
        </Heading>
      </Flex>
      <User />
    </Box>
  )
}
