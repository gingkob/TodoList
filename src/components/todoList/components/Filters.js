import React from 'react'
import { Box, Button, Paper } from '@material-ui/core'

const Filters = () => {
  return (
    <>
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
          <Button /* disabled={page === 1} */ variant='outlined' color='secondary'/*  onClick={() => setPage(prevState => prevState - 1)} */>Prev</Button>
        </Paper>
        <Paper elevation={1} style={{ marginLeft: "8px" }}>
          <Button /* disabled={page >= Math.ceil((todos.length - 4) / 5)} variant='outlined' color='secondary' onClick={() => setPage(prevState => prevState + 1)} */>Next</Button>
        </Paper>
      </Box>
    </>
  )
}

export default Filters
