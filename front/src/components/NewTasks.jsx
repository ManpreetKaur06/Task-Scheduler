import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTasks, setEnteredTasks] = useState('');

  function handleChange(event) {
    setEnteredTasks(event.target.value);
  }

  function handleClick() {
    onAdd(enteredTasks);
    setEnteredTasks('');
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        className="w-full md:w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTasks}
        placeholder="Enter task"
      />
      <button
        className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}