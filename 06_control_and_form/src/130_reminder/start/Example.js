import { useState } from "react";

const Example = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  const [todos, setTodos] = useState(todosList);

  const completeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => completeTodo(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
      <form onSubmit={(e) => addTodo(e.target.value)}>
        <input type="text" />
        <button>追加</button>
      </form>
    </>
  );
};

export default Example;
