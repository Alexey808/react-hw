import styles from "./Input.module.css";
import cn from "classnames"

function Input({onChange, value, srcIcon = '', placeholder = ''}) {
  return (
    <div className={styles['input-container']}>
      {srcIcon && <img src={srcIcon} alt="search-icon"></img>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn({
          [styles['with-left-icon']]: srcIcon 
        })}
      />
    </div>
  );
}

export default Input;