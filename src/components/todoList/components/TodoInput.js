import { Button, TextField, Paper, Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    marginBottom: theme.spacing(1),
    '& .MuiFormControl-root': {
      verticalAlign: "middle !important",

    },
    '& .MuiTextField-root': {
      // marginRight: theme.spacing(1),
      width: '35ch',
    },
    '& .MuiPaper-root#firstPaper': {
      marginRight: theme.spacing(1),
    },
    '& .MuiButton-root': {
      height: '56px'
    }
  },
}));

const TodoInput = (props) => {
  const { todo = "", onChange, onSubmit } = props;
  const classes = useStyles()
  return (
    <Box className={classes.root}>
    <Paper elevation={1} id="firstPaper">
        <TextField label="What is on your mind today?" variant="outlined" value={todo} onChange={onChange} />
    </Paper>
    <Paper elevation={1}>
        <Button disabled={!todo.trim().length} variant="contained" color="secondary" size='large' onClick={onSubmit}>Add Todo</Button>
    </Paper>
    </Box>
  )
}

export default TodoInput;
