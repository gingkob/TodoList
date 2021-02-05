import React, { createContext, useContext, useState } from 'react';

const Context = createContext({
  todos: []
})

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    let id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    setTodos([{ id, text: todo, isCompleted: false }, ...todos])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      }
      return todo
    }))
  }

  const filteredTodos = () => {
    switch (filter) {
      case 'completed': return todos.filter(todo => todo.isCompleted);
      case 'due': return todos.filter(todo => !todo.isCompleted);
      default: return todos;
    }
  }

  const handleFilterChange = (filter) => {
    setFilter(filter)
  }

  return (<Context.Provider value={{ filteredTodos, addTodo, deleteTodo, toggleTodo, filter, handleFilterChange }}>{children}</Context.Provider>)
}

export const useTodos = () => useContext(Context);

export const withProvider = (Component) => ((props) => (<Provider ><Component {...props} /></Provider>))
