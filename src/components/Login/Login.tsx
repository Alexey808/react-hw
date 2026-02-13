import styles from "./Login.module.css";
import Title from "../../shared/components/Title/Title";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Button/Button";
import {ChangeEvent, useState} from 'react';
import { useUsersLocalStorage } from '../../shared/hooks/useUsersLocalStorage/useUsersLocalStorage';
import { User } from '../../shared/models/user/user.interface';
import {useEnterKey} from '../../shared/hooks/useEnterKey/useEnterKey.tsx';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store.ts';
import {userSliceAction} from '../../store/userSlice/user.slice.ts';

export default function Login() {
  const [user, setUser] = useState<User | null>(null);
  const [userStore, setUserStore] = useUsersLocalStorage();

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ name: e.target.value, isLogined: false });
  };

  const handleEntry = () => {
    const userNames = (userStore || []).map((item) => item.name);
    const currentUserName = user?.name || '';

    if (userNames.includes(currentUserName)) {
      const cacheUser = userStore.find((item) => item.name === currentUserName);
      if (!!cacheUser) {
        dispatch(userSliceAction.addUser(cacheUser))
        navigate('/favorite-movies');
      }

    } else {
      const userName = user?.name || '';
      if (userName) {
        const newUser = { name: userName, isLogined: true};
        setUserStore([...userStore, newUser]);
        dispatch(userSliceAction.addUser(newUser))
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