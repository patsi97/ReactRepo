import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = ({ target }) => setName(target.value);

  return (
      <>
        <h2>How many seconds u have spend here: {time}</h2>
        <input value={name} onChange={handleChange} type="text" />
      </>
  );
}