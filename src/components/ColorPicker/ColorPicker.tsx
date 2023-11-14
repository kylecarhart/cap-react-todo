import clsx from "clsx";
import { Todo } from "../../types";
import styles from "./ColorPicker.module.css";

interface Props {
  updateTodoVariant: (variant: Todo["variant"]) => void;
}

export default function ColorPicker({ updateTodoVariant }: Props) {
  return (
    <div className={styles.container}>
      <button
        className={clsx(styles.button, styles.default)}
        onClick={() => updateTodoVariant("default")}
      ></button>
      <button
        className={clsx(styles.button, styles.success)}
        onClick={() => updateTodoVariant("success")}
      ></button>
      <button
        className={clsx(styles.button, styles.warning)}
        onClick={() => updateTodoVariant("warning")}
      ></button>
      <button
        className={clsx(styles.button, styles.danger)}
        onClick={() => updateTodoVariant("danger")}
      ></button>
      <button
        className={clsx(styles.button, styles.info)}
        onClick={() => updateTodoVariant("info")}
      ></button>
    </div>
  );
}
