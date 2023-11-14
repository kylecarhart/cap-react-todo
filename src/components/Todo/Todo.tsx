import clsx from "clsx";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo as TTodo } from "../../types";
import XIcon from "../Icons/XIcon";
import styles from "./Todo.module.css";
import CogIcon from "../Icons/CogIcon";
import DragIcon from "../Icons/DragIcon";

type Props = {
  todo?: TTodo;
  addTodo: (todo: TTodo) => void;
  updateTodo: (todo: TTodo) => void;
  deleteTodo: (todo: TTodo) => void;
  toggleTodoComplete: (todo: TTodo) => void;
};

export default function Todo({
  todo,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodoComplete,
}: Props) {
  const [text, setText] = useState(todo?.text || "");
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isInputTodo = !todo;

  useEffect(() => {
    if (isInputTodo) {
      inputRef.current?.focus();
    }
  }, [isInputTodo]);

  function handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!isInputTodo || !text) {
      return;
    }

    if (e.key === "Enter") {
      addTodo({ id: uuidv4(), text, isComplete: false });
      setText("");
    }
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (isInputTodo) {
      return setText(e.target.value);
    }

    return updateTodo({ ...todo, text: e.target.value });
  }

  function handleCheckboxChange() {
    if (isInputTodo) {
      return;
    }

    toggleTodoComplete(todo);
  }

  function handleDeleteClick() {
    if (isInputTodo) {
      return;
    }

    deleteTodo(todo);
  }

  return (
    <div
      className={clsx(styles.container)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.dragIcon}>
        <DragIcon />
      </span>
      <input
        disabled={isInputTodo}
        type="checkbox"
        className={styles.checkbox}
        checked={todo?.isComplete}
        onChange={handleCheckboxChange}
      />
      <input
        className={clsx(styles.input, {
          [styles.isComplete]: todo?.isComplete,
        })}
        placeholder="Type your todo here..."
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        value={todo ? todo.text : text}
        ref={inputRef}
      />
      {!isInputTodo && (
        <>
          <button className={styles.icon}>
            <CogIcon />
          </button>
          <button className={styles.icon} onClick={handleDeleteClick}>
            <XIcon />
          </button>
        </>
      )}
    </div>
  );
}
