import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { MdDoneOutline } from "react-icons/md";
import ResponsiveDialog from "./ResponsiveDialog";

const buttonBaseStyles =
  "p-2 rounded-md cursor-pointer text-white shadow-sm transition transform duration-150 hover:scale-105 focus:outline-none";
const editButtonStyles = `${buttonBaseStyles} bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300`;
const deleteButtonStyles = `${buttonBaseStyles} bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300`;
const doneButtonStyles = `${buttonBaseStyles} bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-300`;

function TodoItem({ todo, todos, setTodos }) {
  const [editvalue, setEditValue] = useState(todo.msg);
  const [open, setOpen] = useState(false);
  const [editStatus, setEditStatus] = useState(false);

  function handleDoneButton() {
    const newTodos = todos.map((each) =>
      each.msg === todo.msg ? { ...each, status: !todo.status } : each
    );
    setTodos(newTodos);
  }

  function saveEditedtodo(todomsg) {
    const newTodos = todos.map((each) =>
      each.msg === todo.msg ? { ...each, status: false, msg: todomsg } : each
    );
    setTodos(newTodos);
  }

  function handleDelete(status) {
    if (status) {
      const newTodos = todos.filter((each) => each.msg !== todo.msg);
      setTodos(newTodos);
    }
  }

  return (
    <>
      <ResponsiveDialog
        open={open}
        handleDelete={handleDelete}
        setOpen={setOpen}
      />
      <div className="w-full flex justify-between items-center">
        {editStatus ? (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-1 flex-1 mr-2"
          >
            <input
              onChange={(e) => setEditValue(e.target.value)}
              type="text"
              value={editvalue}
              className="p-1 outline-0 border-2 border-white flex-1 rounded"
              autoFocus
            />
            <button
              onClick={() => {
                if (editvalue) {
                  saveEditedtodo(editvalue);
                  setEditStatus(false);
                }
              }}
              className={editButtonStyles}
              type="submit"
            >
              Done
            </button>
          </form>
        ) : (
          <h1
            className={
              todo.status
                ? "text-2xl line-through text-gray-300 font-semibold"
                : "text-2xl font-semibold"
            }
          >
            {todo.msg}
          </h1>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => setEditStatus(!editStatus)}
            className={editButtonStyles}
            aria-label="Edit todo"
            title="Edit"
          >
            <CiEdit className="text-xl" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className={deleteButtonStyles}
            aria-label="Delete todo"
            title="Delete"
          >
            <ImCross className="text-xl" />
          </button>
          {!editStatus && (
            <button
              onClick={handleDoneButton}
              className={doneButtonStyles}
              aria-label="Mark todo done"
              title="Done"
            >
              <MdDoneOutline className="text-xl" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default TodoItem;
