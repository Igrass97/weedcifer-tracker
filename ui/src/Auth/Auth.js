import { createContext, useContext, useEffect, useState } from 'react'
import WAxios from './WAxios'

import { BACKEND_API } from '../backend-api'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext(null)
export const useAuth = () => useContext(AuthContext)

export const Auth = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      logout()
    } else if (!user) {
      getCurrentUser()
        .then(user => {
          setUser(user)
          navigate('/', { replace: true })
        })
        .catch(() => logout())
    }
  }, [token, user, navigate])

  const getCurrentUser = async () => {
    const { data } = await WAxios.get(BACKEND_API.users.me)

    return data
  }

  const login = async (email, password) => {
    try {
      setIsLoading(true)

      const response = await WAxios.post(BACKEND_API.auth.login, {
        email,
        password,
      })

      const { access_token, user } = response.data

      if (!access_token) throw new Error('Invalid credentials')

      window.localStorage.setItem('token', access_token)
      setUser(user)
    } catch (error) {
      throw new Error('Invalid credentials')
    } finally {
      setIsLoading(false)
    }
  }

  const register = async ({ email, name, password }) => {
    setIsLoading(true)
    try {
      await WAxios.post(BACKEND_API.users.register, {
        email,
        password,
        name,
      })
      await login(email, password)
    } catch (error) {
      throw new Error(error.code)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        user,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
