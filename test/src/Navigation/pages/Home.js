import React from "react";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to My Page</h1>
        <p className={styles.subtitle}>Try out different React components</p>
      </div>
    </div>
  );
}
