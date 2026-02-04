import {ReactNode, useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {ActiveUser} from '../../../shared/contexts/ActiveUserContext/ActiveUserContext.context.ts';

export function AuthGuard({children}: { children: ReactNode }) {
  const {isLogined} = useContext(ActiveUser);

  if (!isLogined) {
    return <Navigate to='/login' replace/>
  }

  return children;
}