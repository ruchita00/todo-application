import React, { useState } from "react";

const TodoInput = ({ todo, setTodo, AddTodo, handleEnterPress }) => {
  console.log(todo);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
    >
      <input
        style={{
          margin: "10px",
          padding: "10px",
          width: "300px",
          borderRadius: "10px",
        }}
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Create new todo....."
        onKeyDown={handleEnterPress}
      />
      <button
        style={{
          margin: "10px",
          padding: "13px",
          background: "cryon",
          borderRadius: "50px",
        }}
        onClick={AddTodo}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
