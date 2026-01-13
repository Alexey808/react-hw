import styles from "./LinkButton.module.css";

function LinkButton({children, ...props}) {
  return (
    <a {...props} className={styles['link-button']}>{children}</a>
  )
}

export default LinkButton;