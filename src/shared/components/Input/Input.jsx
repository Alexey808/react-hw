import { forwardRef } from 'react';
import styles from "./Input.module.css";
import cn from "classnames"


export const Input = forwardRef(
  ({srcIcon = '', ...props}, ref) => {
    return (
      <div className={styles['input-container']}>
        {srcIcon && <img src={srcIcon} alt="search-icon"></img>}
        <input
          {...props}
          type="text"
          ref={ref}
          className={cn({
            [styles['with-left-icon']]: srcIcon 
          })}
        />
      </div>
    );
  }
);

export default Input;