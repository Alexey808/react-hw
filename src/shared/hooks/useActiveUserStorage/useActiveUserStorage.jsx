import { useEffect, useState } from 'react';
import { useLocalStorage } from '../useLocalStorage/useLocalStorage';

export function useActiveUserStorage() {
  const [user, setActiveUser] = useState(null);

  const [users, setUsers] = useLocalStorage('users');

  useEffect(() => {
    setActiveUser((users || []).find((item) => item.isLogined) || null);
  }, [users]);

  const unsetActiveUser = (userName) => {
    setUsers([...users].map(item => {
      return item.name === userName ? { ...item, isLogined: false } : item;
    }));
    setActiveUser(null);
  }

  return [user, setActiveUser, unsetActiveUser];
} 