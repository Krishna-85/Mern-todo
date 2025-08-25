import React, { useState } from "react";

const Create = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="type your todo"
        name=""
        id=""
      />
      <button onClick={(e) => handleSubmit()} type="button">
        add
      </button>
    </div>
  );
};

export default Create;
