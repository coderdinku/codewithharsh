import style from "./Comment.module.css";
import { useState } from "react";
import axios from "axios";
import Reply from "./Reply";
import styles from "../../styles/announce.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUser,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Comment({ obj }) {
  const initialvalues = { comment: " " };
  const user = JSON.parse(localStorage.getItem("User"));
  const [show, setShow ] = useState("false");
  const [formvalues, setformvalues] = useState(initialvalues);

  const handleClick = () => {
    if (show === "false") {
      setShow("true");
    } else {
      setShow("false");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const final = obj.comments;
    final.push({
      comment: formvalues.comment,
      person: `${user.firstName} ${user.lastName}`,
    });
    const values = {
      title: obj.title,
      body: obj.body,
      comments: final,
      name: obj.name,
    };
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    };
    axios
      .patch(`http://localhost:3001/posts/update-post/${obj._id}`, values, {
        headers,
      })
      .then((res) => {
        const msg = res.data.status;
        console.log(msg);
        if (msg === "Post Updated Successfully") {
          setformvalues(initialvalues);
        }
      });
  };

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h3>Title: {obj.title} </h3>
          <p>{obj.body}</p>
          <hr className={styles.line}></hr>
          <div className={styles.postedByp}>
            <div>
              <span style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
              </span>{" "}
              <span style={{ marginLeft: "8px" }}>Posted by</span> {obj.name}
              <span></span>
              <span className={styles.time}>date&time</span>
            </div>

            <FontAwesomeIcon
              icon={faComment}
              className={styles.icon}
              onClick={handleClick}
              style={{
                fontSize: 15,
                color: "black",
                cursor: "pointer",
              }}
            />
          </div>
          {show === "true" ? (
            obj.comments.map((obj, key) => {
              return (
                <div key={key}>
                  <Reply obj={obj} />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>

        <form onSubmit={handleSubmit} action="#" method="post">
          <div className={style.comment}>
            {" "}
            <textarea
              placeholder="Write your comment here"
              name="comment"
              value={formvalues.comment}
              onChange={handleChange}
              className={style.commentbox}
            ></textarea>
            <button type="submit" className={style.btn}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{
                  fontSize: "25px",
                  color: " #052E3B",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
