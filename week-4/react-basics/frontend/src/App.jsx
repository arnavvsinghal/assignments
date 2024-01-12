import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  console.log("App Rendered.");
  const [todos, setTodos] = useState([]);
  const titleRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    console.log("UseEffect");
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addTodo() {
    const todoData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    axios
      .post("http://localhost:3000/todo", todoData)
      .then((response) => {
        console.log(response.data.message);
        setTodos([...todos, response.data.todo]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function delTodo(id) {
    axios
      .delete(`http://localhost:3000/${id}`)
      .then(() => {
        const updatedItems = todos.filter((item) => item._id !== id);
        setTodos(updatedItems);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div id="todo-input">
        <input type="text" name="Title" placeholder="Title" ref={titleRef} />
        <input
          type="text"
          name="Title"
          placeholder="Description"
          ref={descriptionRef}
        />
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((item) => (
          <TodoComponent
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            onClickDel={delTodo}
          />
        ))}
      </div>
    </div>
  );
}

function TodoComponent({ id, title, description, onClickDel }) {
  return (
    <div style={{ marginBlock: "10px" }}>
      <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}>
        {title}
      </p>
      <p style={{ fontSize: "14px", margin: "0" }}>{description}</p>
      <button onClick={() => onClickDel(id)}>Mark As Done</button>
      <button>Edit</button>
    </div>
  );
}

export default App;
