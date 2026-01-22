import styles from './Search.module.css';
import { useState } from 'react';
import Button from '../../shared/components/Button/Button';
import Hint from '../../shared/components/Hint/Hint';
import Input from '../../shared/components/Input/Input';
import Title from '../../shared/components/Title/Title';
import searchIcon from '../../assets/search-icon.svg';


function Search() {
  const hint = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
  
  const [moveName, setMoveName] = useState('');
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoveName(e.target.value);
  };

  const handleOnSearch = () => {
    console.log('Искать', moveName);
  };
  
  return (
    <div className={styles['search']}>
      <Title title="Поиск"/>
      <Hint text={hint}/>
      <div className={styles['search-forms']}>
        <Input
          placeholder="Введите название" 
          onChange={handleChangeName}
          value={moveName}
          srcIcon={searchIcon}
        />
        <Button onClick={handleOnSearch}>Искать</Button>
      </div>
    </div>
  )
}

export default Search;