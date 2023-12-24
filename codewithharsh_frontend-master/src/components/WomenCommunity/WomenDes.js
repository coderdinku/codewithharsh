import styles from "./womenDes.module.css";
import style from "../../Account/Account.module.css";
import Axios from "axios";
import { setState, useState,useEffect } from "react";
import WomenPost from "./WomenPost";
import { useNavigate } from "react-router-dom";
export default function WomenDes() {
  const user = JSON.parse(localStorage.getItem("User"));
  const history = useNavigate();
  const [womenpost, setWomenPost] = useState([]);
  const initialvalues = {
    title: "",
    body: "",
    comments: [],
    name: `${user.firstName} ${user.lastName}`,
  };
  const [formvalues, setformvalues] = useState(initialvalues);
  const addDiscuss = async(values) =>{
    const request = {
      ...values
    }
    const  headers = {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem("token")
  }
    try{
      const response = await Axios.post("http://localhost:3001/women-section/add-women-post",request,{headers})
    }
    catch(err){
      console.log("error h bhai",err);
    }
    if (localStorage.getItem("token")) {
      const headers= {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
     }
      Axios.get("http://localhost:3001/women-section/get-women-posts", {headers}).then((res) => {
      

        setWomenPost(res.data.data.womenposts);

      });
    }
    else {
        history("/login")
    }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    addDiscuss({...formvalues}) 
    setformvalues({title: "",
    body: "",
    comments: [],
    name: `${user.firstName} ${user.lastName}`})
   
  };

  const handleChange = (e)=>{
    setformvalues({...formvalues,[e.target.name]:e.target.value})
}


  useEffect(() => {
    if (localStorage.getItem("token")) {
      const headers= {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
     }
      Axios.get("http://localhost:3001/women-section/get-women-posts", {headers}).then((res) => {
        setWomenPost(res.data.data.womenposts);
      });
    }
    else {
        history("/login")
    }
  }, []);
  return (
    <div>
      <div className={styles.description}>
        <h3>Women Community</h3>
        <p>
          Please Share Any useful Information or new opportunities for girls.
        </p>
        <div className={styles.createpost}>
          <div className={style.box}>
            <form onSubmit={handleSubmit} >
              <div className={style.form}>
              <div>
                <label className={style.label}>Title: </label>
                <input
                  type="text"
                  name="title"
                  value={formvalues.title}
                  onChange={handleChange}
                  className={style.input}
                />
              </div>
              <div>
                <label className={style.label}>Body: </label>
                <input
                  type="textarea"
                  name="body"
                  value={formvalues.body}
                  onChange={handleChange}
                  className={style.input}
                />
                </div>
              </div>
              <div className={style.buttonbox}>
                <button className={style.button}>Sumbit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <WomenPost  womenpost={womenpost}/>
      </div>
    </div>
  );
}
