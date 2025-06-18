"use client";

import { useState } from "react";
import "./SimpleForm.css"; // Import external CSS

export default function SimpleForm() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
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
      <ul className="form-list">
        {items.map((item, index) => (
          <li key={index} className="form-list-item">
            <span>{item}</span>
            <div className="form-actions">
              <button onClick={() => handleEdit(index)} className="btn edit">
                Edit
              </button>
              <button onClick={() => handleRemove(index)} className="btn remove">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
