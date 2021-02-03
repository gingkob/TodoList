import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { Box, Button, Divider } from '@material-ui/core';

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
    if (todos.length > 0) {
      id = todos.sort((a, b) => {
        if ((a.id - b.id) > 0) {
          return -1
        }
        else return 1
      })
      id = id[0].id + 1
    }
    let todoItem = {
      id,
      text: todo,
      isDone: false,
      craetedAt: new Date(),
      updatedAt: new Date()
    }
    setTodos([todoItem, ...todos]);
    setTodo("")
  }
  const onChange = (e) => {
    setTodo(e.target.value)
  }

  const toggleChange = (id) => {
    let newArr = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo;
    })
    setTodos(newArr);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <TodoInput todo={todo} onChange={onChange} onSubmit={onSubmit} />
        {todos.length ?
          <>
            <Divider />
            <TodoItem todos={todos} toggleChange={toggleChange} onDelete={deleteTodo} />
            <Divider />
            <Box style={{ display: 'flex', marginTop: "8px", width: "100%" }}>
              <Paper elevation={1} style={{ marginRight: "8px" }}>
                <Button variant='outlined' color='primary'>All</Button>
              </Paper>
              <Paper elevation={1} style={{ marginRight: "8px" }}>
                <Button variant='outlined' color='primary'>Completed</Button>
              </Paper>
              <Paper elevation={1} style={{ marginRight: "8px" }}>
                <Button variant='outlined' color='primary'>Due</Button>
              </Paper>
              <Paper elevation={1} style={{ marginLeft: "auto" }}>
                <Button variant='outlined' color='secondary'>Prev</Button>
              </Paper>
              <Paper elevation={1} style={{ marginLeft: "8px" }}>
                <Button variant='outlined' color='secondary'>Next</Button>
              </Paper>
            </Box>
          </> : null}
      </Paper>
    </div>
  )
}

export default TodoList;
