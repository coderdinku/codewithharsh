import styles from "./topbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Topbar() {
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("User");

    localStorage.setItem("message", "Login First");
    history("/Login");
  };
  return (
    <div className={styles.topbar}>
      <div></div>
      <h1>Indian Institute Of Information Technology, Allahabad</h1>
      <div className={styles.div}>
        <button className={styles.btn}>
          <FontAwesomeIcon icon={faBell} className={styles.icon} />
        </button>
      </div>
      {localStorage.getItem("token") ? (
        <>
          <div className={styles.div}>
            <NavLink to="/EditDetails">
              <button className={styles.btn}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
              </button>
            </NavLink>
          </div>
          <div className={styles.div}>
            <NavLink to="/Login">
              <button className={styles.btn}>
                <FontAwesomeIcon
                  icon={faSignOut}
                  className={styles.icon}
                  onClick={handleLogout}
                />
              </button>
            </NavLink>
          </div>
        </>
      ) : (
        <div className={styles.div}>
          <NavLink to="/Login">
            <button className={styles.btn}>
              <FontAwesomeIcon icon={faSignIn} className={styles.icon} />
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
