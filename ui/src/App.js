import { useAuth } from './Auth/Auth'
import { Router } from './Router/Router'
import { useAPIHealth } from './useAPIHealth'

const App = () => {
  const { isCheckingHealth, isHealthy } = useAPIHealth()
  const { isAuthenticated } = useAuth()

  if (isCheckingHealth) {
    return <h3>Loading...</h3>
  }

  if (!isHealthy) {
    return <h1>API Error</h1>
  }

  return <Router isAuthenticated={isAuthenticated} />
}

export default App
