import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.scss"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/users">Users</Link>
      <Link to="/todos">Todos</Link>
    </div>
  );
};

export default Navbar;