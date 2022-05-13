function Tasks({ tasks, handleKeyDown, updateTodoAtIndex }) {

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
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default Tasks;
