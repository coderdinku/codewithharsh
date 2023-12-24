import { useContext, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import styles from "../styles/announce.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
<<<<<<< Updated upstream
import Comment from "./Comment";
import ApiContext from "../contextApi/apiContext";

export default function Announce({credentials}) {
  const context=useContext(ApiContext)
  const{allAnnouncementPosts,posts}=context
=======
import Comment from "./Layout/Comment";

export default function Announce() {
 
  const [post, setPost] = useState([]);
 
>>>>>>> Stashed changes
 const history = useNavigate();
  useEffect(() => {
    allAnnouncementPosts();  
}, [])
  return (
    <>
      <div>
        <ul>
          {posts && posts.map((obj, key) => {
            console.log(obj);
            return (
              <Comment obj= {obj} key= {key}/>
            );
          })}
        </ul>
      </div>
    </>
  );
}
