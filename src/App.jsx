import Layout from './components/Layout/Layout';
import { ActiveUserContextProvider } from './shared/contexts/ActiveUserContext/ActiveUserContextProvider';

function App() {
  return (
    <ActiveUserContextProvider>
      <Layout/>
    </ActiveUserContextProvider>
  )
}

export default App
