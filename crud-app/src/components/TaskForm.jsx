import { useState } from "react";
import api from "../services/api";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");


  // handling CREATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await api.post("/tasks", {
      title,
      completed: false
    });

    setTitle("");
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;