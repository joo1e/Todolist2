import TodoItem from "./Todoitem";

const Todolist = ({ todos }) => {
  return (
    <section>
      <h2>Working</h2>
      <ul>
        {todos.map((todos) => (
          <TodoItem key={todos.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default Todolist;
