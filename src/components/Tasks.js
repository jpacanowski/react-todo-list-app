function Tasks({ tasks }) {

  return (
    <>
      <form className="todo-list">
        <ul>
          {tasks.map((task) => (
            <li className="todo">
              <div className="checkbox"></div>
              <input type="text" value={task.content} />
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default Tasks;
