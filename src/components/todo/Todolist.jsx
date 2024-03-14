import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <section>
      <h2>Working</h2>
      <ul>
        {todos.map((todos) => (
          <TodoItem key={todos.id} todo={todos} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
