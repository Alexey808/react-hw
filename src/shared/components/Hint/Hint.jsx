import styles from "./Hint.module.css";

function Hint({text}) {
  return <p className={styles.hint}>{text}</p>;
}

export default Hint;