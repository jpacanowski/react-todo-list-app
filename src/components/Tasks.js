function Tasks({ tasks, handleKeyDown, updateTodoAtIndex, toggleTodoCompleteAtIndex }) {

  return (
    <>
      <form className="todo-list">
        <ul>
          {tasks.map((task, i) => (
            <li className={`todo ${task.isCompleted && 'todo-is-completed'}`}>
              <div className="checkbox" onClick={() => toggleTodoCompleteAtIndex(i)}>
                {task.isCompleted && (<span>&#x2714;</span>)}
              </div>
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
