import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Center,
  Flex,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  Alert,
  AlertIcon,
  Box,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useAuth } from '../Auth/Auth'
import { WInput } from '../Common/WInput/WInput'
import { ROUTES } from '../Router/routes'

const LoginErrorAlert = ({
  message,
  onClearMessage: handleClearMessage,
  ...props
}) => {
  if (!message) return null

  return (
    <Box {...props}>
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={handleClearMessage}
        />
      </Alert>
    </Box>
  )
}
export const Login = () => {
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ defaultValues: { email: '', password: '' }, mode: 'onChange' })

  const { login, isLoading } = useAuth()

  const isLoginDisabled = !isValid || isLoading

  const handleLogin = async data => {
    try {
      await login(data.email, data.password)
      navigate('/', { replace: true })
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <Center height="100vh" width="100%" color="white">
      <Flex width="300px" direction="column">
        <Heading textAlign="center" mb={7}>
          Weedcifer Tracker
        </Heading>
        <LoginErrorAlert
          message={errorMessage}
          onClearMessage={() => setErrorMessage('')}
          mb={7}
        />
        <WInput
          placeholder="Email"
          type="email"
          height="45px"
          error={errors?.email?.message}
          ControlProps={register('email', { required: 'Email is required' })}
        />
        <WInput
          placeholder="Password"
          type="password"
          mb={5}
          height="45px"
          error={errors?.password?.message}
          ControlProps={register('password', {
            required: 'Password is required',
          })}
        />
        <Button
          variant="solid"
          colorScheme="purple"
          onClick={handleSubmit(handleLogin)}
          isLoading={isLoading}
          disabled={isLoginDisabled}
        >
          Sign in
        </Button>
        <Text mt={5} textAlign="center">
          Don't have an account?{' '}
          <ChakraLink as={Link} to={ROUTES.register.path} color="purple.300">
            Create One
          </ChakraLink>
        </Text>
      </Flex>
    </Center>
  )
}
