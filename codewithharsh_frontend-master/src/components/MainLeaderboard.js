import styles from "../styles/Leaderboard.module.css";
import style from "../styles/Home.module.css";
import { useState,  useEffect } from "react";
import Axios from 'axios'

export default function MainLeaderboard() {
  const [users, setAllUsers] = useState([]);
  useEffect(() => {
    const headers= {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem("token")
    }
    Axios.get("http://localhost:3001/auth/getAllUsers",{headers}).then((res) => {
     console.log(res);
      setAllUsers(res.data);
  });
  
}, [])
  return (
      <div>
        <div className={styles.button}>
          <button className={styles.buttoncom}>Leaderboard</button>
          <button className={styles.buttoncom1}>Lockout Leaderboard</button>
        </div>
  
        <ul>
          {users.map((obj, key) => {
            return <>
             <li className={styles.li}>
                <span className={styles.first}>{key}</span>
                <span className={styles.span1}></span>
                <span>{obj.firstName + obj.lastName}</span>
                <span className={styles.third}>{obj.points}</span>
                <span className={styles.span2}></span>
              </li> </>         
          })}
          
         
        </ul>
      </div>

  );
}
