import { TitleProps } from './Title.interface';
import styles from './Title.module.css';
import cn from 'classnames';

function Title({title, className, ...props}: TitleProps) {

  return (
    <h1 {...props} className={cn(styles['title'], className)}>{title}</h1>
  )
}

export default Title;