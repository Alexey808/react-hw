import styles from './Search.module.css';
import {ChangeEvent, useState} from 'react';
import Button from '../../../../shared/components/Button/Button.tsx';
import Hint from '../../../../shared/components/Hint/Hint.tsx';
import Input from '../../../../shared/components/Input/Input.tsx';
import Title from '../../../../shared/components/Title/Title.tsx';
import searchIcon from '../../../../assets/search-icon.svg';
import {SearchProps} from './Search.interface.ts';
import {useEnterKey} from '../../../../shared/hooks/useEnterKey/useEnterKey.tsx';


function Search({searchMovie}: SearchProps) {
  const hint = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
  
  const [movieName, setMovieName] = useState('Avengers');
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value);
  };

  const handleOnSearch = () => {
    searchMovie(movieName)
  };

  const handleOnEnter = useEnterKey(handleOnSearch);
  
  return (
    <div className={styles['search']}>
      <Title title="Поиск"/>
      <Hint text={hint}/>
      <div className={styles['search-forms']}>
        <Input
          placeholder="Введите название" 
          onChange={handleChangeName}
          value={movieName}
          srcIcon={searchIcon}
          onKeyDown={handleOnEnter}
        />
        <Button onClick={handleOnSearch}>Искать</Button>
      </div>
    </div>
  )
}

export default Search;