import { ActiveUserContextProvider } from './shared/contexts/ActiveUserContext/ActiveUserContextProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

function App() {
  return (
    <ActiveUserContextProvider>
      <RouterProvider router={router}/>
    </ActiveUserContextProvider>
  )
}

export default App
