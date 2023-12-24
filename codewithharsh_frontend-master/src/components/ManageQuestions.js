import Questions from "./Questions";
import { setState, useState } from "react";
import styles from "../styles/Post.module.css";
import Axios from "axios";
import style from "../Account/Account.module.css";

export default function ManageQuestions() {

  const initialvalues={question:"", url: "",points: "", msg:"Please add a new question." }
    const [formvalues,setformvalues]=useState(initialvalues)
    const addADiscuss = async(values) =>{
      console.log(values)
      const request = {
        ...values
      }
      console.log(request);
      const  headers = {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
    }
      const response = await Axios.post("http://localhost:3001/questions/add-question",request,{headers});
      setformvalues(initialvalues);
      if(response.data) {  
        setformvalues({...initialvalues, msg: "Question Added Successfully"})
      }
      else {
        setformvalues({...initialvalues, msg: "Unable to add the question"})
      }
      
  }
    const handleChange =(e)=>{
        const {name,value}=e.target
        setformvalues({ ...formvalues,[name]:value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        addADiscuss({...formvalues}) 
        setformvalues(initialvalues)   
    }
  

  return (
    <div className={style.outer1}>
        <div className={style.box}>
      <h3>{formvalues.msg}</h3>
      <div className={style.form} >
        <div>
        <label className={style.label}>Question name : </label>
        <input
          type="text"
          name = "question"
          value={formvalues.question}
          className={style.input}
          onChange={handleChange}
        />
        </div>
        
        <div>
        <label className={style.label}>Question link : </label>
        <input
          type="text"
          name = "url"
          value={formvalues.url}
          className={style.input}
          onChange={handleChange}
        />
        </div>
        
        <div>
        <label className={style.label}>Points: </label>
        <input
          type="number"
          name = "points"
          value={formvalues.points}
          className={style.input}
          onChange={handleChange}
        />
        </div>
        
        <div className={style.buttonbox}>
          <button className={style.button} onClick={handleSubmit}>Add New Question</button>
        </div>
        </div>
      </div>
      <div>
        <Questions />
      </div>
    </div>
  );
}
