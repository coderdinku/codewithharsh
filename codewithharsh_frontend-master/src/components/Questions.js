import styles from "../styles/Questions.module.css";
import style from "../styles/Home.module.css";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons"
import {useState, useEffect, setState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Question() {
  const [question, setQuestions] = useState([])
  const history = useNavigate();
  let headers;
  if (localStorage.getItem("token")) {
     headers= {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem("token")
    }
  }
  useEffect(() => {
    if(headers) {
      Axios.get('http://localhost:3001/questions/get-questions', {headers}).then(res => {
        setQuestions(res.data.data.questions)
        console.log(res.data);
      })
    }
    else {
      history("/login");
    }
  },[question])
  
  const deleteQuestion = (id) => {
    if(headers) {
      Axios.delete(`http://localhost:3001/questions/delete-question/${id}`, {headers}).then(res => {
        setQuestions(res.data.data.questions)
        console.log(res.data);
      })  
    }
    else {
      history("/login");
    } 
  }
  return (
    <div>
      <ul>{
        question.map((val,key) => {
          
          console.log(val);
          return <li key={key} className={styles.li} >
            <span><a href={val.url} target="_blank">{val.question}</a></span>
            <span>{val.points}</span>
            <button type="delete" style={{border: "none", backgroundColor: "#D8E4E8",}} onClick ={() => {deleteQuestion(val._id)} }>
              <FontAwesomeIcon
                icon={faTrash}          
                style={{ fontSize: 15, color: "black", cursor: "pointer" }}
              />
            </button>
            {/* <button type="edit" style={{border: "none", backgroundColor: "#D8E4E8"}}>
            <FontAwesomeIcon
              icon={faEdit}          
              style={{ fontSize: 15, color: "black", cursor: "pointer" }}
            />
          </button> */}
          </li>
        })
      }      
      </ul>
    </div>
  )
}
