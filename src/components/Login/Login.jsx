import styles from "./Login.module.css";
import Title from "../../shared/components/Title/Title";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";
import { useLocalStorage } from '../../shared/hooks/useLocalStorage/useLocalStorage';
import { useContext, useState } from 'react';
import { ActiveUserContext } from '../../shared/contexts/ActiveUserContext/ActiveUserContext.context';

export default function Login() {
  const [user, setUser] = useState(null);
  const [userStore, setUserStore] = useLocalStorage('users');
  const {setActiveUser} = useContext(ActiveUserContext);

  const handleChangeUserName = (e) => {
    setUser({ name: e.target.value, isLogined: false });
  };

  const handleEntry = () => {
    const userNames = (userStore || []).map((item) => item.name);
    const currentUserName = user?.name || '';

    if (userNames.includes(currentUserName)) {
      const cacheUser = userStore.find((item) => item.name === currentUserName);
      setActiveUser({...cacheUser, isLogined: true});
    } else {
      const newUser = {...user, isLogined: true};
      setUserStore([...(userStore || []), newUser]);
      setActiveUser(newUser);
    }
  };

  return (
    <div className={styles['login-card']}>
      <Title title="Вход"/>
      <Input value={user?.name || ''} onChange={handleChangeUserName} placeholder="Ваше имя"/>
      <div className={styles['buttons']}>
        <Button label="Войти в профиль" onClick={handleEntry}/>
      </div>
    </div>
  );
}