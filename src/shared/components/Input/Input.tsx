import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.interface';


export function Input({srcIcon = '', ...props}: InputProps) {
  return (
    <div className={styles['input-container']}>
      {srcIcon && <img src={srcIcon} alt="search-icon"></img>}
      <input
        {...props}
        type="text"
        className={cn({
          [styles['with-left-icon']]: srcIcon 
        })}
      />
    </div>
  );
}

export default Input;