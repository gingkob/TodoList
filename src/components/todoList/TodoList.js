import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { Box, Button, Divider, IconButton, Typography } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowDown } from '@material-ui/icons';
import { withProvider } from '../../store/Store';

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
  const [page, setPage] = React.useState(1);
  
  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <TodoInput />
       {/*  {todos.length ? */}
          <>
            <Divider />
            <TodoItem /* todos={todos.slice(5 * (page - 1), 4 + 5 * (page - 1))} */ />
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
                <Button disabled={page === 1} variant='outlined' color='secondary' onClick={() => setPage(prevState => prevState - 1)}>Prev</Button>
              </Paper>
              <Paper elevation={1} style={{ marginLeft: "8px" }}>
                <Button /* disabled={page >= Math.ceil((todos.length - 4) / 5)} variant='outlined' color='secondary' onClick={() => setPage(prevState => prevState + 1)} */>Next</Button>
              </Paper>
            </Box>
          </> {/* : null} */}
      </Paper>
      {/* {todos.length > 4 ? */}
        <Paper elevation={2} style={{ width: "448px", paddingTop: 38 }}>
          <div style={{ display: "flex", marginBottom: "8px", width: "100%" }}>
            <Paper style={{ display: "flex", width: '100%', justifyContent: 'space-between', padding: "0px 12px" }}>
              <span>
                <IconButton edge="start">
                  <KeyboardArrowLeft color='primary' />
                </IconButton>
                <Typography variant="overline"> {page} Page</Typography>
              </span>
              <span>
                <Typography variant="overline">Page {page + 1} </Typography>
                <IconButton edge="end">
                  <KeyboardArrowDown color='primary' />
                </IconButton>
              </span>
            </Paper>
          </div>
          <Divider />
          <TodoItem /* todos={todos.slice(4 + 5 * (page - 1), 9 + 5 * (page - 1))} */ />
        </Paper> {/* : null} */}
    </div>
  )
}

export default withProvider(TodoList);
