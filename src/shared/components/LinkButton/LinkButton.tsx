import { LinkButtonProps } from './LinkButton.interface';
import styles from "./LinkButton.module.css";

function LinkButton({children, ...props}: LinkButtonProps) {
  return (
    <a {...props} className={styles['link-button']}>{children}</a>
  )
}

export default LinkButton;