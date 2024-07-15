import React from 'react';
import styles from "./MainPage.module.scss"

const MainPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the react-redux-ts app!</h1>
      <h2>Click on the links in the navbar to see a list of users or a list of todos.</h2>
    </div>
  );
};

export default MainPage;