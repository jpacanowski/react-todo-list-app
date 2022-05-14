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
    if(e.key === 'Backspace' && tasks[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
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

  function removeTodoAtIndex(i) {
    if(i === 0 && tasks.length === 1) return;
    setTasks(tasks => tasks.slice(0, i).concat(tasks.slice(i + 1, tasks.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
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
