import React from 'react'
import { useAuth } from '../../Auth/Auth'
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from '@chakra-ui/react'

export const User = () => {
  const { user, logout } = useAuth()

  return (
    <Menu>
      <MenuButton>
        <Flex alignItems="center" cursor="pointer">
          <Avatar name={user.name} size="sm" mr="2" />
          {user.name}
          <MenuList>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Flex>
      </MenuButton>
    </Menu>
  )
}
