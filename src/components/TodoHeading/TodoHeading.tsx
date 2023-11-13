import styles from "./TodoHeading.module.css";

export default function TodoHeading() {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.main}>TODO</div>
      <div className={styles.sub}>Type your TODOs below to get started.</div>
    </div>
  );
}
