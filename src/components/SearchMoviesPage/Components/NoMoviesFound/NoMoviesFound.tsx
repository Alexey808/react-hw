import styles from './NoMoviesFound.module.css';
import Title from './../../../../shared/components/Title/Title.tsx';

export default function NoMoviesFound() {
  return (
    <div className={styles['movies']}>
      <Title title='Упс... Ничего не найдено'/>
      <div className={styles['hint']}>Попробуйте изменить запрос или ввести более точное название фильма</div>
    </div>
  );
}