import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TodoInput from './components/TodoInput';
import { withProvider } from '../../store/Store';
import SecondPage from './components/SecondPage';
import FirstPage from './components/FirstPage';
import Filters from './components/Filters';

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

  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <TodoInput />
        <FirstPage />
        <Filters />
      </Paper>
      <SecondPage />
    </div>
  )
}

export default withProvider(TodoList);
