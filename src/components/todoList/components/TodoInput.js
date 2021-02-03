import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom:theme.spacing(1),
    '& .MuiFormControl-root': {
      verticalAlign: "middle !important",
      
    },
    '& .MuiTextField-root': {
      marginRight: theme.spacing(1),
      width: '35ch',
    },
    '& .MuiButton-root': {
      height: '56px'
    }
  },
}));

const TodoInput = (props) => {
  const{todo = "", onChange, onSubmit} = props;
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TextField label="What is on your mind today?" variant="outlined" value={todo} onChange={onChange}/>
      <Button variant="outlined" color="secondary" size='large' onClick={onSubmit}>Add Todo</Button>
    </div>
  )
}

export default TodoInput;
