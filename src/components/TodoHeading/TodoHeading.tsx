import styles from "./TodoHeading.module.css";

export default function TodoHeading() {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.main}>Todo</div>
      <div className={styles.sub}>Type your todos below to get started.</div>
    </div>
  );
}
