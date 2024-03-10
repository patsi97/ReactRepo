// import the default export and the named export `useState` from the 'react' library
import React, { useState } from "react";
import styles from "./ColorPicker.module.css";

export default function ColorPicker({ color, setColor }) {
  // call useState and assign its return values to `color` and `setColor`
  // const [color, setColor] = useState('');
  const divStyle = { backgroundColor: color };
  document.body.style.backgroundColor = color;

  return (
    <>
      <div style={divStyle}>
        <p>The color is {color}</p>
        <button className={styles.button} onClick={() => setColor("Tomato")}>
          Tomato
        </button>
        <button
          className={styles.button}
          onClick={() => setColor("BlueViolet")}
        >
          BlueViolet
        </button>
        <button
          className={styles.button}
          onClick={() => setColor("Chartreuse")}
        >
          Chartreuse
        </button>
        <button
          className={styles.button}
          onClick={() => setColor("CornflowerBlue")}
        >
          CornflowerBlue
        </button>
        <button
          className={styles.button}
          onClick={() => setColor("Aquamarine")}
        >
          Aquamarine
        </button>
        <button
          className={styles.button}
          onClick={() => setColor("DarkMagenta")}
        >
          Dark Magenta
        </button>
        <button className={styles.button} onClick={() => setColor("HotPink")}>
          Hot Pink
        </button>
      </div>
    </>
  );
}
