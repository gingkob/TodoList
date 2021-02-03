import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(4),
    },
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const onSubmit = () => {
    let id = 1;
    if (todos.length > 0){
      id = Math.max(todos.map(todo => todo.id))+1
    }
    let todoItem = {
      id,
      text:todo,
      isDone: false,
      craetedAt: new Date(),
      updatedAt: new Date()
    }
    setTodos([...todos, todoItem]);
    setTodo("")
  }
  const onChange = (e) =>{
    setTodo(e.target.value)
  }

  const toggleChange = (id) =>{
    let newArr = todos.map(todo =>{
      if(todo.id === id){
        todo.isDone = !todo.isDone
      }
      return todo;
    })
    setTodos(newArr);
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <TodoInput todo={todo} onChange={onChange} onSubmit={onSubmit}/>
        <Divider />
        <TodoItem todos={todos} toggleChange={toggleChange} onDelete={deleteTodo}/>
      </Paper>
    </div>
  )
}

export default TodoList;
