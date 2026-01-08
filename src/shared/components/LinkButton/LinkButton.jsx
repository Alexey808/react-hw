import styles from "./LinkButton.module.css";

function LinkButton({children}) {
  return (
    <a className={styles['link-button']}>{children}</a>
  )
}

export default LinkButton;