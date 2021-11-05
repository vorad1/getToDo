import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Posts from "./Posts";
import Users from "./Users";
import { UserContext } from "./UserContext";
import { useState } from "react";

export default function Home() {
  const [userId,setUserId] = useState(1);
  return (
    <div className={styles.container}>
      <UserContext.Provider value = {{userId,setUserId}} >
        <Users />
        <Posts />
      </UserContext.Provider>
    </div>
  );
}
