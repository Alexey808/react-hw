import { useEffect, useState } from 'react'
import { ActiveUserContext } from './ActiveUserContext.context';
import { useLocalStorage } from '../../hooks/useLocalStorage/useLocalStorage';


export const ActiveUserContextProvider = ({children}) => {
  const [userStore, setUserStore] = useLocalStorage('users');
  
  const guest = {name: 'Гость', isLogined: false};
  const [activeUser, setActiveUser] = useState(guest);

  const logoutActiveUser = () => {
    const newUnactivedUser = {...activeUser, isLogined: false};

    setUserStore(userStore.map((user) => {
      return user.name === activeUser.name ? newUnactivedUser : user;
    }));

    setActiveUser(newUnactivedUser);
  }

  useEffect(() => {
    const cachedActiveUser = (userStore || []).find((item) => item.isLogined) || null;
    if (cachedActiveUser) {
      setActiveUser({...cachedActiveUser, isLogined: true});
    }
  }, [userStore]);

  return (
    <ActiveUserContext.Provider value={{activeUser, setActiveUser, logoutActiveUser}}>
      {children}
    </ActiveUserContext.Provider>
  );
}