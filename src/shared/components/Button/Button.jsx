import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef((
  {label, ...props}, ref
) => {
  return <button {...props} className={styles.button} ref={ref}>{label}</button>
});

export default Button;