import React from "react";

const TodoList = ({ todoList, DeleteTodo }) => {
  return (
    <div>
      <h1>TODO</h1>
      <hr style={{ width: "435px" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {todoList.map((todo, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor: "lightcyan",
                border: "1px solid",
                borderRadius: "10px",
                width: "400px",
                padding: "10px",
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {todo}{" "}
              <span>
                <i
                  style={{ cursor: "pointer" }}
                  class="fa-solid fa-trash"
                  onClick={() => DeleteTodo(todo)}
                ></i>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
