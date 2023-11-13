import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoHeading from "./components/TodoHeading/TodoHeading";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <TodoHeading />
        <SearchBar />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
