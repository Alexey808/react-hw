import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';
import {Provider} from 'react-redux';
import {appStore} from './store/store.ts';


function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
