import NewTasks from "./NewTasks";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="px-4 md:px-0">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 md:mt-4 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex flex-col md:flex-row items-center justify-between my-4">
              <span className="md:mr-4">{task.text}</span>
              <button className="text-stone-700 hover:text-red-500 mt-2 md:mt-0" onClick={() => onDelete(task.id)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
