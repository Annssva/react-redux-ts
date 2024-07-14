import React, {useEffect} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import styles from "./UserList.module.scss"
import Loading from "../Loading/Loading";

const UserList: React.FC = () => {
  const {error, users, loading} = useTypeSelector(state => state.user)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className={styles.user_container}>
      <h1>Users:</h1>
      {users.map(user =>
      <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

export default UserList;