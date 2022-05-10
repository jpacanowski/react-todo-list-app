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

  return (
    <div className="app">
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
