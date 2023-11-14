import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import { Todo as TTodo } from "../../types";
import DragIcon from "../Icons/DragIcon";
import XIcon from "../Icons/XIcon";
import TodoSettingsButton from "../TodoSettingsButton/TodoSettingsButton";
import styles from "./Todo.module.css";

type Props = {
  todo: TTodo;
  updateTodo: (todo: TTodo) => void;
  deleteTodo: (todo: TTodo) => void;
  toggleTodoComplete: (todo: TTodo) => void;
};

export default function Todo({
  todo,
  updateTodo,
  deleteTodo,
  toggleTodoComplete,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    return updateTodo({ ...todo, text: e.target.value });
  }

  function handleCheckboxChange() {
    toggleTodoComplete(todo);
  }

  function handleDeleteClick() {
    deleteTodo(todo);
  }

  function handleUpdateTodoVariant(variant: TTodo["variant"]) {
    updateTodo({ ...todo, variant });
  }

  return (
    <div
      className={clsx(styles.container, styles[todo.variant || ""])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.dragIcon}>
        <DragIcon />
      </span>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.isComplete}
        onChange={handleCheckboxChange}
      />
      <input
        className={clsx(styles.input, {
          [styles.isComplete]: todo?.isComplete,
        })}
        placeholder="Type your next todo here and hit enter..."
        onChange={handleOnChange}
        value={todo.text}
        ref={inputRef}
      />
      <TodoSettingsButton
        className={styles.icon}
        updateTodoVariant={handleUpdateTodoVariant}
      />
      <button className={styles.icon} onClick={handleDeleteClick}>
        <XIcon />
      </button>
    </div>
  );
}
