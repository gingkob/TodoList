import React from 'react';
import { Divider } from '@material-ui/core'
import Filters from './Filters'
import TodoItem from './TodoItem';
import { useTodos } from '../../../store/Store'

const FirstPage = () => {
  const { firstPageTodos = [] } = useTodos();
  return (
    firstPageTodos.length ?
      <>
        <Divider />
        <TodoItem /* todos={todos.slice(5 * (page - 1), 4 + 5 * (page - 1))} */ />
        <Divider />
        <Filters />
      </> : null
  )
}

export default FirstPage
