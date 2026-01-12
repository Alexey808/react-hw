import styles from "./Login.module.css";
import Title from "../../shared/components/Title/Title";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";
import { useLocalStorage } from '../../shared/hooks/useLocalStorage/useLocalStorage';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState(null);
  const [userStore, setUserStore] = useLocalStorage('users');

  const handleChangeUserName = (e) => {
    setUser({ name: e.target.value, isLogined: true });
  };

  const handleEntry = () => {
    const userNames = (userStore || []).map((item) => item.name);
    const currentUserName = user?.name || '';

    if (userNames.includes(currentUserName)) {
      setUserStore([...(userStore || []).map((item) => {
        return item.name === currentUserName ? { ...item, isLogined: true } : item;
      })]);
    } else {
      setUserStore([...(userStore || []), user]);
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
  )
}