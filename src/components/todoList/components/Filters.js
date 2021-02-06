import React from 'react';
import { Box, Button, Paper } from '@material-ui/core';
import { useTodos } from '../../../store/Store';

const Filters = () => {
  const { filteredTodos, page, changePage, filter, handleFilterChange } = useTodos();
  return (
    <>
      <Box style={{ display: 'flex', marginTop: "8px", width: "100%" }}>
        <Paper elevation={1} style={{ marginRight: "8px" }}>
          <Button variant={filter === 'all' ? 'contained' : 'outlined'} color='primary' onClick={() => handleFilterChange('all')}>All</Button>
        </Paper>
        <Paper elevation={1} style={{ marginRight: "8px" }}>
          <Button variant={filter === 'completed' ? 'contained' : 'outlined'} color='primary' onClick={() => handleFilterChange('completed')}>Completed</Button>
        </Paper>
        <Paper elevation={1} style={{ marginRight: "8px" }}>
          <Button variant={filter === 'due' ? 'contained' : 'outlined'} color='primary' onClick={() => handleFilterChange('due')}>Due</Button>
        </Paper>
        <Paper elevation={1} style={{ marginLeft: "auto" }}>
          <Button disabled={page === 1} variant='outlined' color='secondary' onClick={() => changePage(- 1)}>Prev</Button>
        </Paper>
        <Paper elevation={1} style={{ marginLeft: "8px" }}>
          <Button disabled={page >= Math.ceil((filteredTodos.length - 4) / 5)} variant='outlined' color='secondary' onClick={() => changePage(1)}>Next</Button>
        </Paper>
      </Box>
    </>
  )
}

export default Filters
