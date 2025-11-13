import { useState } from "react";

function Header({ handleSearchValue }) {
  const [value, setValue] = useState("");
  function handleInputValue(val) {
    setValue(val);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) handleSearchValue(value.trim());
        setValue("");
      }}
      className="w-full mt-6 flex items-center gap-3 p-3 bg-white/80 dark:bg-gray-800/70 rounded-2xl shadow-md transition-colors"
      aria-label="Add todo form"
    >
      <div className="flex-1">
        <label htmlFor="todo-input" className="sr-only">
          Add todo
        </label>

        <input
          id="todo-input"
          className="w-full pl-3 pr-3 py-2 border-2 border-gray-200 rounded-xl outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-shadow"
          type="text"
          onChange={(e) => {
            handleInputValue(e.target.value);
          }}
          value={value}
          placeholder="Add a new to‑do..."
          aria-label="Todo input"
        />
      </div>

      <button
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transform transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-300"
        type="submit"
        aria-label="Add todo"
        title="Add"
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Add
      </button>
    </form>
  );
}

export default Header;
