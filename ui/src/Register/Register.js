import React from 'react'
import { useForm } from 'react-hook-form'
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
import { ROUTES } from '../Router/routes'

export const Register = () => {
  const navigate = useNavigate()
  const { register, isLoading } = useAuth()

  const {
    register: registerField,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rePassword: '',
      name: '',
    },
    mode: 'onChange',
  })

  const pwWatch = watch('password')
  const isRegisterDisabled = !isValid || isLoading

  const handleRegister = async data => {
    if (!isValid) return

    await register(data)
    navigate('/', { replace: true })
  }

  return (
    <Center height="100vh" width="100%" color="white">
      <Flex width="300px" direction="column">
        <Heading textAlign="center" mb={7}>
          Create a free account!
        </Heading>
        <WInput
          placeholder="Email"
          type="email"
          height="45px"
          error={errors?.email?.message}
          ControlProps={registerField('email', {
            required: 'Email is required',
          })}
        />
        <WInput
          placeholder="Name"
          type="text"
          error={errors?.name?.message}
          ControlProps={registerField('name', { required: 'Name is required' })}
        />
        <WInput
          placeholder="Password"
          type="password"
          height="45px"
          error={errors?.password?.message}
          ControlProps={registerField('password', {
            required: 'Password is required',
          })}
        />
        <WInput
          placeholder="Re-Password"
          type="password"
          height="45px"
          error={errors?.rePassword?.message}
          ControlProps={registerField('rePassword', {
            validate: {
              pwMatch: rePw =>
                rePw === pwWatch ? null : 'Passwords must match',
            },
          })}
        />
        <Button
          variant="solid"
          colorScheme="purple"
          onClick={handleSubmit(handleRegister)}
          isLoading={isLoading}
          disabled={isRegisterDisabled}
        >
          Sign in
        </Button>
        <Text mt={5} textAlign="center">
          Already have an account?{' '}
          <Link to={ROUTES.login.path}>
            <ChakraLink color="purple.300">Sign In</ChakraLink>
          </Link>
        </Text>
      </Flex>
    </Center>
  )
}
