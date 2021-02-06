import React from 'react';
import { Box } from '@material-ui/core';
import TodoItem from './TodoItem';
import { useTodos } from '../../../store/Store'

const FirstPage = () => {
  const { firstPageTodos = [] } = useTodos();
  return (
    firstPageTodos.length ?
      <>
        <Box style={{ margin: '15px 0px' }}>
          <TodoItem todos={firstPageTodos} />
        </Box>
      </> : null
  )
}

export default FirstPage
