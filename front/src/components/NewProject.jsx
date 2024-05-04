import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation
    if (
      enteredTitle.trim() === "" ||
      enteredDesription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Show the error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-lg md:text-xl font-bold text-stone-700 my-2 md:my-4">
          Invalid Input
        </h2>
        <p className="text-sm md:text-base text-stone-600 mb-2 md:mb-4">
          Oops....looks like you forgot to enter the value
        </p>
        <p className="text-sm md:text-base text-stone-600 mb-2 md:mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-full md:w-[35rem] mt-8 md:mt-16 px-4 md:px-0">
        <menu className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 md:gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 md:px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due date" />
        </div>
      </div>
    </>
  );
}
