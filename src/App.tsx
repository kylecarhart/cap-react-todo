import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoHeading from "./components/TodoHeading/TodoHeading";
import TodoList from "./components/TodoList/TodoList";
import { Todo as TTodo } from "./types";

function App() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <TodoHeading />
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          todos={todos}
        />
        <TodoList searchText={searchText} todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;
