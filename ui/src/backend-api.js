const BASE_URL = 'http://localhost:3001'

export const BACKEND_API = {
  auth: {
    login: `${BASE_URL}/auth`,
  },
  users: {
    me: `${BASE_URL}/users/me`,
    register: `${BASE_URL}/users/register`,
  },
}
