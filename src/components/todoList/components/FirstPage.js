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
        <TodoItem todos={firstPageTodos} />
        <Divider />
        <Filters />
      </> : null
  )
}

export default FirstPage
