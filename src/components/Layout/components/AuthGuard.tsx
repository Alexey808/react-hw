import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../store/store.ts';

export function AuthGuard({children}: { children: ReactNode }) {
  const { user } = useSelector((store: AppStore) => store.userStore)

  if (!user) {
    return <Navigate to='/login' replace/>
  }

  return children;
}