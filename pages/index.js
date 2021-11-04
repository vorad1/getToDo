import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Posts from "./Posts";
import Users from "./Users";
import { UserContext } from "./UserContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <UserContext>
        <Users />
        <Posts />
      </UserContext>
    </div>
  );
}
