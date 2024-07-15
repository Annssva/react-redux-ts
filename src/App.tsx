import React, {Suspense} from 'react';
import UserList from "./components/User/UserList";
import TodoList from "./components/TodoList/TodoList";
import "./App.scss"
import Loading from "./components/Loading/Loading";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route key="/users" path="/users" element={
          <Suspense fallback={<Loading />}>
            <UserList />
          </Suspense>
          }>
        </Route>
        <Route key="/todos" path="/todos" element={
          <Suspense fallback={<Loading />}>
            <TodoList />
          </Suspense>
        }>
        </Route>
      </Routes>
    </>
  );
};

export default App;