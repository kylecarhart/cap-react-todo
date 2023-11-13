import styles from "./SearchBar.module.css";

interface Props {}

export default function SearchBar({}: Props) {
  return (
    <div className={styles.container}>
      <input className={styles.searchBar} placeholder="Search..."></input>
    </div>
  );
}
