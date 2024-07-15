/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import styles from "./TodoList.module.scss"
import classnames from "classnames"
import Loading from "../Loading/Loading";

const TodoList: React.FC = () => {
  const {page, error, todos, limit, loading} = useTypeSelector(state => state.todo)
  const {fetchTodo, setTodoPage} = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodo(page, limit)
  }, [page])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className={classnames(styles.container)}>
      <h1>Todo:</h1>
      {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
      <div
        className={classnames(styles.pages)}
      >
        {pages.map( p =>
          <div
            className={classnames(styles.page, { [styles.page_select]: p === page })}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;