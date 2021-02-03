import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "450px",
    backgroundColor: theme.palette.background.paper,
    '& .MuiListItem-gutters': {
      paddingLeft: '10px',
      paddingRight: '0px',
      marginTop: "5px",
      borderLeft: '1px solid green',
      borderRight: '1px solid green',
      borderRadius: "4px",
    },
  },
}));

const TodoItem = ({ todos, toggleChange, onDelete }) => {
  const classes = useStyles();
  return (
    <List dense className={classes.root}>
      {todos.map((todo) => {
        return (
          <Paper key={todo.id} elevation={2}>
            <ListItem >
              <ListItemText primary={todo.text} />
              <Checkbox
                edge="end"
                onChange={() => toggleChange(todo.id)}
                checked={todo.isDone}
              />
              <IconButton onClick={() => onDelete(todo.id)}>
                <DeleteForever color='error' />
              </IconButton>
            </ListItem>
          </Paper>

        );
      })}
    </List>
  )
}

export default TodoItem
