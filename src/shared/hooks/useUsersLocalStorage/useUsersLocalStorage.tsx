import { useEffect, useState } from 'react';
import { User } from '../../models/user/user.interface';
import { SetUsers } from './useUsersLocalStorage.interface';
import {UsersLocalStorageKey} from '../../../store/storage.ts';


export function useUsersLocalStorage(): [User[], SetUsers] {
  const [users, setUsers] = useState<User[]>([]);

  const initData = () => {
    const dataByKey: string= localStorage.getItem(UsersLocalStorageKey) || 'undefined';
    if (dataByKey !== 'undefined') {
      const jsonDataByKey = JSON.parse(dataByKey);
      setUsers(jsonDataByKey);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  const saveData = (newData: User[]) => {
    try {
      if (newData) {
        localStorage.setItem(UsersLocalStorageKey, JSON.stringify(newData));
        setUsers(newData);
      }
    } catch (err) {
      console.error(`Ошибка при записи в localStorage по ключу ${UsersLocalStorageKey}:`, err);
    }
  };

  return [users, saveData];
}
