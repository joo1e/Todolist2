import { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./TodoList";

const todoObj = {
  id: 1,
  title: "Learn React",
  content: "Learn React today",
  isDone: "false",
};

const TodoController = () => {
  const [todos, setTodos] = useState([todoObj]);

  const onSubmitTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <Todolist todos={todos} />
    </main>
  );
};

export default TodoController;
