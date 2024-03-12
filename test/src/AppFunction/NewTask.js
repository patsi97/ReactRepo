import React from "react";
import styles from "./AppFunction.module.css";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div>
        <input
          className={styles.inputField}
          name="title"
          placeholder="New task"
          value={newTask.title || ""}
          onChange={handleChange}
        />
      </div>
      {!newTask.title ? null : (
        <div>
          <textarea
            className={styles.textareaField}
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
        </div>
      )}
      {!newTask.title ? null : (
        <button className={styles.submitButton} type="submit">
          Add Task
        </button>
      )}
    </form>
  );
}
