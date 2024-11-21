import React, { useState } from 'react';

function ToDoListNew() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (inputText.trim() !== '') {
      setTasks([...tasks, { text: inputText, completed: false }]);
      setInputText(''); 
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Добавить задачу"
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTask(index)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>
      <p>Источник: https://codelab.pro/kurs-po-react-na-primere-todolist-huk-usestate/?ysclid=m3rlomj5lm990550873</p>
    </div>
  );
}

export default ToDoListNew;