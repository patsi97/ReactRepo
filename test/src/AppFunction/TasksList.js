import React from "react";
import styles from "./AppFunction.module.css";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {allTasks.map(({ title, description, id }) => (
          <li key={id}>
            <div className={styles.taskContainer}>
              <div>
                <h2 className={styles.title}>{title}</h2>
                {!description ? null : (
                  <p className={styles.details}>{description}</p>
                )}
              </div>
              <button
                className={styles.removeButton}
                onClick={() => handleDelete(id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
