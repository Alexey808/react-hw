import { HintProps } from './Hint.interface';
import styles from "./Hint.module.css";

function Hint({text}: HintProps) {
  return <p className={styles.hint}>{text}</p>;
}

export default Hint;