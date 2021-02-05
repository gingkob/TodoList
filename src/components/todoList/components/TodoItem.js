import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';
import { useTodos } from '../../../store/Store'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "450px",
    backgroundColor: theme.palette.background.paper,
    '& .MuiListItem-gutters': {
      paddingLeft: '10px',
      paddingRight: '0px',
    },
  },
}));

const TodoItem = () => {
  const { filteredTodos, toggleTodo, deleteTodo } = useTodos();
  const classes = useStyles();
  return (
    <List dense className={classes.root}>
      {filteredTodos().map((todo, index) => {
        return (
          <Paper key={todo.id} elevation={1} style={{
            display: "flex", borderLeft: '1px solid green',
            borderRight: '1px solid green',
            borderRadius: "4px", marginTop: index !== 0 ? "5px" : "0px"
          }} >
            <ListItem onClick={() => alert(todo.id)}>
              <ListItemText primary={todo.text} />
            </ListItem>
            <Checkbox
              edge="end"
              onChange={() => toggleTodo(todo.id)}
              checked={todo.isCompleted}
            />
            <IconButton onClick={() => deleteTodo(todo.id)}>
              <DeleteForever color='error' />
            </IconButton>
          </Paper>
        );
      })}
    </List>
  )
}

export default TodoItem
