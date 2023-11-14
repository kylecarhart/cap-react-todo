import clsx from "clsx";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo as TTodo } from "../../types";
import DragIcon from "../Icons/DragIcon";
import styles from "./Todo.module.css";

type Props = {
  addTodo: (todo: TTodo) => void;
};

export default function Todo({ addTodo }: Props) {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!text) {
      return;
    }

    if (e.key === "Enter") {
      addTodo({ id: uuidv4(), text, isComplete: false });
      setText("");
    }
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    return setText(e.target.value);
  }
  return (
    <div className={clsx(styles.container)}>
      <span className={styles.dragIcon}>
        <DragIcon />
      </span>
      <input disabled={true} type="checkbox" className={styles.checkbox} />
      <input
        className={clsx(styles.input)}
        placeholder={"Type your next todo here and hit enter..."}
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        value={text}
        ref={inputRef}
      />
    </div>
  );
}
