import {createContext} from 'react';
import { User } from '../../models/user/user.interface';

interface DataContextType<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

export interface ActiveUserContext {
  name: string;
  isLogined: boolean;
  setActiveUser?: (value: User) => void;
  logoutActiveUser?: () => void;
}

export const ActiveUser = createContext<ActiveUserContext>({
	name: '',
	isLogined: false,
});
