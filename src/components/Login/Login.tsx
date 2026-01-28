import styles from "./Login.module.css";
import Title from "../../shared/components/Title/Title";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";
import {ChangeEvent, useContext, useState} from 'react';
import {
  ActiveUser,
} from '../../shared/contexts/ActiveUserContext/ActiveUserContext.context';
import { useUsersLocalStorage } from '../../shared/hooks/useUsersLocalStorage/useUsersLocalStorage';
import { User } from '../../shared/models/user/user.interface';
import {useEnterKey} from '../../shared/hooks/useEnterKey/useEnterKey.tsx';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState<User | null>(null);
  const [userStore, setUserStore] = useUsersLocalStorage();
  const {setActiveUser} = useContext(ActiveUser);
  const navigate = useNavigate();


  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ name: e.target.value, isLogined: false });
  };

  const handleEntry = () => {
    const userNames = (userStore || []).map((item) => item.name);
    const currentUserName = user?.name || '';

    if (userNames.includes(currentUserName)) {
      const cacheUser = userStore.find((item) => item.name === currentUserName);
      if (!!setActiveUser && !!cacheUser) {
        setActiveUser({...cacheUser, isLogined: true});
        navigate('/favorite-movies');
      }

    } else {
      const newUser = { name: user?.name || '', isLogined: true};
      
      if (!!setActiveUser) {
        setUserStore([...userStore, newUser]);
        setActiveUser(newUser);
        navigate('/favorite-movies');
      }
    }
  };
  const handleEntryKey = useEnterKey(handleEntry)

  return (
    <div className={styles['login-card']}>
      <Title title="Вход" className={styles['title']}/>
      <Input
        value={user?.name || ''}
        onChange={handleChangeUserName}
        onKeyDown={handleEntryKey}
        placeholder="Ваше имя"
      />
      <div className={styles['buttons']}>
        <Button onClick={handleEntry}>Войти в профиль</Button>
      </div>
    </div>
  );
}