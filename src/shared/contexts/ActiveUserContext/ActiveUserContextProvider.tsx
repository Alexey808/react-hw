import { useEffect, useState } from 'react'
import { ActiveUserContext, ActiveUser } from './ActiveUserContext.context';
import { User } from '../../models/user/user.interface';
import { ActiveUserContextProviderProps } from './ActiveUserContext.interface';
import { useUsersLocalStorage } from '../../hooks/useUsersLocalStorage/useUsersLocalStorage';


export const ActiveUserContextProvider = ({children}: ActiveUserContextProviderProps) => {
  const [userStore, setUserStore] = useUsersLocalStorage();
  
  const guest: User = {name: 'Гость', isLogined: false};
  const [activeUser, setActiveUser] = useState<User>(guest);

  const logoutActiveUser = () => {
    const inactiveUser = {...activeUser, isLogined: false};

    setUserStore(userStore.map((user) => {
      return user.name === activeUser.name ? inactiveUser : user;
    }));

    setActiveUser(inactiveUser);
  }

  useEffect(() => {
    const cachedActiveUser = userStore.find((item) => item.isLogined) || null;
    if (cachedActiveUser) {
      setActiveUser({...cachedActiveUser, isLogined: true});
    }
  }, [userStore]);


  const value: ActiveUserContext = {
    name: activeUser.name,
    isLogined: activeUser.isLogined,
    setActiveUser,
    logoutActiveUser
  };

  return (
    <ActiveUser.Provider value={value}>
      {children}
    </ActiveUser.Provider>
  );
}