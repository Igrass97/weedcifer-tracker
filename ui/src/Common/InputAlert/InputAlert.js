import React from 'react'
import { Text } from '@chakra-ui/react'

export const InputAlert = ({ msg }) => {
  if (!msg) return null

  return (
    <Text fontSize="xs" color="red.500">
      {msg}
    </Text>
  )
}
