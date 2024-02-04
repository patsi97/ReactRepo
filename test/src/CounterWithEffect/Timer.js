import React, {useState, useEffect} from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    //geschweifte Klammer {} kann mehrere Zeile ausführen, funktioniert auch ohne klammer in diesem Fall?
    return clearInterval(intervalId);
  }, []);

// {target} = event.target -> kann ich input element bearbeiten
  const handleChange = ({target}) => setName(target.value);

  return (
      <>
        <h1>Time: {time}</h1>
        <input value={name} onChange={handleChange} type="text"/>
      </>
  );
}
