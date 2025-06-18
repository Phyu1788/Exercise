"use client";

import { useState } from "react";

export default function SimpleForm() {
  const [input, setInput] = useState("");

    const handleAdd = () => {
    if (!input.trim()) return;
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }
    setInput("");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Simple Form</h1>
      <div className="form-input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-input"
          placeholder="Enter something..."
        />
        <button onClick={handleAdd} className="form-button">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
  
      </div>
  );
}