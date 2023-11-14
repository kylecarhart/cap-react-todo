import { Todo as TTodo } from "../../types";
import styles from "./SearchBar.module.css";

interface Props {
  searchText: string;
  setSearchText: (searchText: string) => void;
  todos: TTodo[];
}

export default function SearchBar({ searchText, setSearchText, todos }: Props) {
  const filteredNumber = todos.reduce((acc, todo) => {
    if (!todo.text.toLowerCase().includes(searchText.toLowerCase())) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      {filteredNumber > 0 && (
        <span className={styles.filterText}>
          You are filtering out <strong>{filteredNumber} todos items.</strong>
        </span>
      )}
    </div>
  );
}
