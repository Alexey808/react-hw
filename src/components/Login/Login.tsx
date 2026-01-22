import styles from "./Login.module.css";
import Title from "../../shared/components/Title/Title";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";
import { useContext, useState } from 'react';
import {
  ActiveUser,
  ActiveUserContext,
} from '../../shared/contexts/ActiveUserContext/ActiveUserContext.context';
import { useUsersLocalStorage } from '../../shared/hooks/useUsersLocalStorage/useUsersLocalStorage';
import { User } from '../../shared/models/user/user.interface';

export default function Login() {
  const [user, setUser] = useState<User | null>(null);
  const [userStore, setUserStore] = useUsersLocalStorage();
  const {setActiveUser} = useContext(ActiveUser);


  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ name: e.target.value, isLogined: false });
  };

  const handleEntry = () => {
    const userNames = (userStore || []).map((item) => item.name);
    const currentUserName = user?.name || '';

    if (userNames.includes(currentUserName)) {
      const cacheUser = userStore.find((item) => item.name === currentUserName);
      if (!!setActiveUser && !!cacheUser) {
        setActiveUser({...cacheUser, isLogined: true});
      }

    } else {
      const newUser = { name: user?.name || '', isLogined: true};
      
      if (!!setActiveUser) {
        setUserStore([...userStore, newUser]);
        setActiveUser(newUser);
      }
    }
  };

  return (
    <div className={styles['login-card']}>
      <Title title="Вход"/>
      <Input
        value={user?.name || ''}
        onChange={handleChangeUserName}
        placeholder="Ваше имя"
      />
      <div className={styles['buttons']}>
        <Button onClick={handleEntry}>Войти в профиль</Button>
      </div>
    </div>
  );
}