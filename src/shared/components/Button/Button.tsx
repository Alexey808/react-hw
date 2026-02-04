import styles from './Button.module.css';
import { forwardRef } from 'react';
import { ButtonProps } from './Button.interface';


function Button({children, ...props}: ButtonProps) {
  return (
    <button {...props} className={styles.button}>{children}</button>
  );
}

export default Button;