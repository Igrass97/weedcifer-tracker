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
    <Flex alignItems="center" cursor="pointer">
      <Avatar name={user.name} size="sm" mr="2" />
      <Menu>
        <MenuButton>{user.name}</MenuButton>
        <MenuList>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
