import React from 'react'
import { Divider, IconButton, Paper, Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowLeft } from '@material-ui/icons';
import { useTodos } from '../../../store/Store'
import TodoItem from './TodoItem';

const SecondPage = () => {
  const { secondPageShow = false, page = 1 } = useTodos();

  return (
    secondPageShow ? <Paper elevation={2} style={{ width: "448px", paddingTop: 38 }} >
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
      <TodoItem /> {/* todos={todos.slice(4 + 5 * (page - 1), 9 + 5 * (page - 1))} */}
    </Paper > : null
  )
}

export default SecondPage
/*

{
    secondPage?

      }

*/