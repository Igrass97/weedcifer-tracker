import axios from 'axios'
const WAxios = axios.create()

WAxios.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')

  config.headers = {
    'x-auth-token': token,
  }

  return config
})

export default WAxios
