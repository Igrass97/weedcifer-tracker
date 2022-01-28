import { useQuery } from 'react-query'
import { BACKEND_API } from './backend-api'
import WAxios from './Auth/WAxios'

export const useAPIHealth = () => {
  const { isLoading, data } = useQuery(['health'], async () => {
    const { data } = await WAxios.get(BACKEND_API.health)

    return data
  })

  return { isCheckingHealth: isLoading, isHealthy: !!data }
}
