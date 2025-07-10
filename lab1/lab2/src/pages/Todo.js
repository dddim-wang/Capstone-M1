import React, { useState, useEffect } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Fetch example todos from a fake API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    if (newItem.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      title: newItem,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewItem('');
  };

  const toggleComplete = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
