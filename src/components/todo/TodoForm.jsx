const TodoForm = ({ onSubmitTodo }) => {
  const handlersubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    onSubmitTodo({
      id: Date.now(),
      title,
      content,
      isDone: false,
    });

    e.target.reset();
  };

  return (
    <form>
      <input type="text" placeholder="제목" name="title" />
      <input type="text" placeholder="내용" name="content" />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
