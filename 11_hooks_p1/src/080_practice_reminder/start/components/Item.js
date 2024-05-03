import { useState } from "react";
const Item = ({ todo, complete }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };
  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo.id)}>完了</button>
      {todo.editing ? (
        <input type="text" value={editingContent} onChange={changeContent} />
      ) : (
        <span>{todo.content}</span>
      )}
    </div>
  );
};

export default Item;
