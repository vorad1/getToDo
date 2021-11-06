import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext.js";
import styles from "../styles/Home.module.css";

function Users() {
  const [listOfUsers, setListOfUsers] = useState([]);
  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/Users")
      .then((response) => response.json())
      .then((json) => setListOfUsers(json))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getPosts();
  }, []);
  // const userContext = useContext(UserContext);
  const { userId, setUserId } = useContext(UserContext);

  return (
    <div>
      <ul>
        {listOfUsers.map((u) => (
          <li key={u.userId}>
            <span> {u.name} </span>
            <span>
              {" "}
              <button
                classname={StyleSheet.getBtn}
                onClick={() => setUserId(u.id)}
              >
                {" "}
                get Posts{" "}
              </button>{" "}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
