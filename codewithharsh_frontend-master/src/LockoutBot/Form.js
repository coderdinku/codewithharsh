import { useState } from "react";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
import style from "./lockoutstyle.module.css";
export default function Form() {
  const [formvalues, setFormvalues] = useState({ rating1: "", rating2: "" , rating3: "" , rating4: "" , rating5: ""  });
  const [p, setP] = useState('');
  
  const handleSubmit = ((e)=>{
    e.preventDefault();
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r);
    setP(r);
  

  })
  const handleChange =(e)=>{
    const {name,value}=e.target
    setFormvalues({ ...formvalues,[name]:value})
}
const arr=[formvalues.rating1,formvalues.rating2,formvalues.rating3,formvalues.rating4,formvalues.rating5]

  return (
    <div className={style.outest}>
     {p==''?<form onSubmit={handleSubmit}>
     
      <h4 style={{color: "#D8E4E8"}}>Rating of each question</h4>
      <div>
      <input
        type="text"
        name="rating1"
        value={formvalues.rating1}
        onChange={handleChange}
        placeholder="ques 1"
        className = {style.input}
      ></input>
      </div>
      <div>
      <input
        type="text"
        name="rating2"
        value={formvalues.rating2}
        onChange={handleChange}
        placeholder="ques 2"
        className = {style.input}
      ></input>
      </div>
      <div>
      <input
        type="text"
        name="rating3"
        value={formvalues.rating3}
        onChange={handleChange}
        placeholder="ques 3"
        className = {style.input}
      ></input>
      </div>
      <div>
      <input
        type="text"
        name="rating4"
        value={formvalues.rating4}
        onChange={handleChange}
        placeholder="ques 4"
        className = {style.input}
      ></input>
      </div>
      <div>
      <input
        type="text"
        name="rating5"
        value={formvalues.rating5}
        onChange={handleChange}
        placeholder="ques 5"
        className = {style.input}
      ></input>
      </div>
      <button className={style.btn}>Create Contest</button>
      
     </form>:<Questions codes={p} rating={arr}/>}
     
    </div>
  );
}
