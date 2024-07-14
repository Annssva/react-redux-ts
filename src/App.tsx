import React from 'react';
import UserList from "./components/User/UserList";
import TodoList from "./components/TodoList/TodoList";
import "./App.scss"

const App = () => {
  return (
    <div>
      <UserList />
      <hr/>
      <TodoList />
    </div>
  );
};

export default App;