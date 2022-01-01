import { useAuth } from './Auth/Auth'
import { Router } from './Router/Router'

const App = () => {
  const { isAuthenticated } = useAuth()

  return <Router isAuthenticated={isAuthenticated} />
}

export default App
