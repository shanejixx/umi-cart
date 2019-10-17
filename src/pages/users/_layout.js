
import styles from './_layout.css';

export default function(props) {
  return (
    <div className={styles.normal}>
      <div>{props.children}</div>
    </div>
  );
}
