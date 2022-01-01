import React from 'react'
import {
  Center,
  Flex,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../Auth/Auth'
import { WInput } from '../Common/WInput/WInput'
import { useForm } from 'react-hook-form'
import { ROUTES } from '../Router/routes'

export const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ defaultValues: { email: '', password: '' }, mode: 'onChange' })

  const { login, isLoading } = useAuth()

  const isLoginDisabled = !isValid || isLoading

  const handleLogin = async data => {
    await login(data.email, data.password)
    navigate('/', { replace: true })
  }

  return (
    <Center height="100vh" width="100%" color="white">
      <Flex width="300px" direction="column">
        <Heading textAlign="center" mb={7}>
          Weedcifer Tracker
        </Heading>
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
          <Link to={ROUTES.register.path}>
            <ChakraLink color="purple.300">Create One</ChakraLink>
          </Link>
        </Text>
      </Flex>
    </Center>
  )
}
