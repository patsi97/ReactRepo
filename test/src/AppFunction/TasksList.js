import React from "react";
import styles from "./AppFunction.css";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul className={styles.ul}>
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}
