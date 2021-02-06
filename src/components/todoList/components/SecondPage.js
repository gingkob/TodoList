import React from 'react'
import { Box, IconButton, Paper, Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowLeft } from '@material-ui/icons';
import { useTodos } from '../../../store/Store'
import TodoItem from './TodoItem';

const SecondPage = () => {
  const { secondPageTodos = [], page = 1 } = useTodos();

  return (
    secondPageTodos.length ? <Paper elevation={2} style={{ width: "448px", paddingTop: 38 }} >
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
      <Box style={{ margin: '15px 0px 0px' }}>
        <TodoItem todos={secondPageTodos} />
      </Box>
    </Paper > : null
  )
}

export default SecondPage