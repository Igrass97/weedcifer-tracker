import React, { useState } from 'react'
import { Center, Input, Flex, Button, Heading } from '@chakra-ui/react'
import { useAuth } from '../Auth/Auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' })

  const { login, isLoading } = useAuth()

  const isLoginDisabled = !formData.email || !formData.password || isLoading

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Center height="100vh" width="100%" bg="gray.900" color="white">
      <Flex width="300px" direction="column">
        <Heading textAlign="center" mb={7}>
          Weedcifer Tracker
        </Heading>
        <Input
          placeholder="Email"
          type="email"
          mb="3"
          height="45px"
          value={formData.email}
          onChange={ev => handleFormChange('email', ev.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          mb={5}
          height="45px"
          value={formData.password}
          onChange={ev => handleFormChange('password', ev.target.value)}
        />
        <Button
          variant="solid"
          colorScheme="pink"
          onClick={async () => {
            await login(formData.email, formData.password)
            navigate('/', { replace: true })
          }}
          isLoading={isLoading}
          disabled={isLoginDisabled}
        >
          Sign in
        </Button>
      </Flex>
    </Center>
  )
}
