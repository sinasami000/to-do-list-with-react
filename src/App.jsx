import Header from "./components/Header";
import useLocalStorage from "./useLocalStorage";
import TodoItem from "./components/todoItem";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", [
    { msg: "checking todo item", status: false },
  ]);

  function handleSearchValue(value) {
    setTodos([...todos, { msg: value, status: false }]);
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
            My To-Do List
          </h1>
        </div>

        <div className="p-6 sm:p-8">
          <Header handleSearchValue={handleSearchValue} />

          <div className="mt-6 space-y-3 max-h-96 overflow-y-auto">
            {todos.length === 0 ? (
              <p className="text-center text-gray-400 py-8">
                No todos yet. Add one to get started!
              </p>
            ) : (
              todos.map((todo, index) => (
                <TodoItem
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  key={index}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
