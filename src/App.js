import React, { useState } from 'react';
import Tasks from './components/Tasks'
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {
      content: 'Learn Hindi',
      isCompleted: true,
    },
    {
      content: 'Start reading the book',
      isCompleted: false,
    },
    {
      content: 'Install FreeBSD',
      isCompleted: false,
    }
  ]);

  function handleKeyDown(e, i) {
    if(e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTasks = [...tasks];
    newTasks.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTasks(newTasks);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTasks = [...tasks];
    newTasks[i].content = e.target.value;
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <Tasks
        tasks={tasks}
        handleKeyDown={handleKeyDown}
        updateTodoAtIndex={updateTodoAtIndex}
      />
    </div>
  );
}

export default App;
