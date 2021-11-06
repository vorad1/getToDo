import styles from "../styles/Home.module.css";
import Posts from "./Posts";
import Users from "./Users";
import { UserContext } from "./UserContext";
import { useState } from "react";

export default function Home() {
  const [userId,setUserId] = useState(1);
  return (
    <div >
       <div className={styles.todoDisplay}>
      <div className={styles.app}>
      <h2>Get To Do App</h2>
      </div>
      <UserContext.Provider value = {{userId,setUserId}} >
        <div className={styles.todoInput}>
        <Users />
        </div>
        <div className={styles.post}>
          <h4>To Do List</h4>
        </div>
        <div className={styles.todoPosts}>
        <Posts />
        </div>
      </UserContext.Provider>
      </div>
    </div>
  );
}
