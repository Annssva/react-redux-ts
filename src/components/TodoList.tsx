import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
  const {page, error, todos, limit, loading} = useTypeSelector(state => state.todo)
  const {fetchTodo, setTodoPage} = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodo(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div >
      {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
      <div style={{display: "flex"}}>
        {pages.map( p =>
          <div
            style={{border: p === page ? '2px solid green' : "1px solid gray", padding: '10px', margin: '5px'}}
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