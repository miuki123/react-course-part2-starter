import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todo_data, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading . . .</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todo_data?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
