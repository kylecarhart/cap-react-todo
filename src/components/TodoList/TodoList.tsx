import { useState } from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { Todo as TTodo } from "../../types";

interface Props {}

export default function TodoList({}: Props) {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const incompleteTodos = todos.filter((todo) => !todo.isComplete);
  const completedTodos = todos.filter((todo) => todo.isComplete);

  function addTodo(todoToAdd: TTodo) {
    setTodos([todoToAdd, ...todos]);
  }

  function updateTodo(todoToUpdate: TTodo) {
    setTodos(
      todos.map((todo) => (todo.id === todoToUpdate.id ? todoToUpdate : todo))
    );
  }

  function deleteTodo(todoToDelete: TTodo) {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
  }

  function toggleTodoComplete(todoToToggle: TTodo) {
    if (!todoToToggle.isComplete) {
      // Toggle the todo to complete and reorder the lists
      const newIncompleteTodos = incompleteTodos.filter(
        (todo) => todo.id !== todoToToggle.id
      );
      setTodos([
        ...newIncompleteTodos,
        { ...todoToToggle, isComplete: true },
        ...completedTodos,
      ]);
    } else {
      // Toggle the todo to incomplete and reorder the lists
      const newCompletedTodos = completedTodos.filter(
        (todo) => todo.id !== todoToToggle.id
      );
      setTodos([
        ...incompleteTodos,
        { ...todoToToggle, isComplete: false },
        ...newCompletedTodos,
      ]);
    }
  }

  return (
    <div className={styles.container}>
      <Todo
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleTodoComplete={toggleTodoComplete}
      />
      {incompleteTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          addTodo={addTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodoComplete={toggleTodoComplete}
        />
      ))}
      {completedTodos.length > 0 && <div className={styles.line}></div>}
      {completedTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          addTodo={addTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodoComplete={toggleTodoComplete}
        />
      ))}
    </div>
  );
}
