import { useState } from "react";
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  const AddTodo = () => {
    if (todo !== "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const DeleteTodo = (text) => {
    const newListTodo = todoList.filter((todo) => {
      return todo !== text;
    });
    setTodoList(newListTodo);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      AddTodo();
      setTodo("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        background: "gray",
      }}
    >
      <TodoInput
        todo={todo}
        handleEnterPress={handleEnterPress}
        setTodo={setTodo}
        AddTodo={AddTodo}
      />
      <TodoList todoList={todoList} DeleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;
