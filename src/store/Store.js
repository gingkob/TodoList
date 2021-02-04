import React, { createContext, useContext, useState } from 'react';

const Context = createContext({
  todos:[]
})

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    let id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    setTodos([{ id, text: todo, isCompleted: false }, ...todos])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) =>{
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted;
        return todo;
      }
      return todo
    }))
  }

  return (<Context.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>{children}</Context.Provider>)
}

export const useTodos = () => useContext(Context);

export const withProvider = (Component) => ((props) => (<Provider ><Component {...props} /></Provider>))
