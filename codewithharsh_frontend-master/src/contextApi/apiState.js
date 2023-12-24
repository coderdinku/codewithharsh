import ApiContext from "./apiContext";
import { useState } from "react";
import  Axios  from "axios";
const ApiState = (props) => {

  const [posts,setPosts]=useState([]);
 /// ANNOUNCEMENT POSTS

//Get All POST
const allAnnouncementPosts = async ()=>{
    const headers= {
        'Content-Type': 'application/json',
      }
      Axios.get("http://localhost:3001/posts/get-posts",{headers}).then((res) => {
        setPosts(res.data.data.posts);
    });
}

//ADD A POST

const addAnnouncementPost = async (values) => {
    console.log(values);
    const request = {
      ...values,
    };
    console.log(request);
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    };
    const response = await Axios.post(
      "http://localhost:3001/posts/add-posts",
      request,
      { headers }
    );
    setPosts(posts.concat(response));
  };


































  
    ///alert 

    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1000);
    }


    return (
        <ApiContext.Provider value={{alert,showAlert,posts,addAnnouncementPost,setPosts,allAnnouncementPosts }}>
            {props.children}
        </ApiContext.Provider>
    )

}

export default ApiState;
