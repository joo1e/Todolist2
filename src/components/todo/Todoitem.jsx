const TodoItem = ({ todo }) => {
  const { id, title, content, isDone } = todo;

  return (
    <li>
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <div>
          <button>삭제</button>
          <button>완료</button>
        </div>
      </article>
    </li>
  );
};

export default TodoItem;
