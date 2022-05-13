function Tasks({ tasks, handleKeyDown }) {

  return (
    <>
      <form className="todo-list">
        <ul>
          {tasks.map((task, i) => (
            <li className="todo">
              <div className="checkbox"></div>
              <input
                type="text"
                value={task.content}
                onKeyDown={e => handleKeyDown(e, i)} />
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default Tasks;
