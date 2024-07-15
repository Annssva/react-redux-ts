import React, {Suspense} from 'react';
import UserList from "./components/User/UserList";
import TodoList from "./components/TodoList/TodoList";
import "./App.scss"
import Loading from "./components/Loading/Loading";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";

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
        <Route key="/react-redux-ts" path="/react-redux-ts" element={
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        }>
        </Route>
      </Routes>
    </>
  );
};

export default App;