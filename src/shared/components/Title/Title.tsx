import { TitleProps } from './Title.interface';
import styles from './Title.module.css';

function Title({title}: TitleProps) {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default Title;