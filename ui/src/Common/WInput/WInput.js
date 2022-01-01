import React from 'react'
import { Input, Box } from '@chakra-ui/react'
import { InputAlert } from '../InputAlert/InputAlert'

export const WInput = ({ error, ControlProps, ...props }) => {
  return (
    <Box minHeight="74px">
      <Input
        placeholder="Email"
        type="email"
        mb={1}
        height="45px"
        isInvalid={!!error}
        {...ControlProps}
        {...props}
      />
      <Box ml={2}>
        <InputAlert msg={error} />
      </Box>
    </Box>
  )
}
