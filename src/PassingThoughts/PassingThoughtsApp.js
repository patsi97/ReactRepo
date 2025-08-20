import React, { useState } from "react";
import { AddThoughtForm } from "./AddThoughtForm.js";
import { Thought } from "./Thought.js";
import { generateId, getNewExpirationTime } from "./utilities.js";
import "./style.css";

export default function PassingThoughtsApp() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((prev) => {
      return [thought, ...prev];
    });
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
        thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  return (
      <div className="App">
        <header>
          <h1>Passing Thoughts</h1>
        </header>
        <main>
          <AddThoughtForm addThought={addThought} />
          <ul className="thoughts">
            {thoughts.map((thought) => (
                <Thought
                    key={thought.id}
                    thought={thought}
                    removeThought={removeThought}
                />
            ))}
          </ul>
        </main>
      </div>
  );
}