import './App.css';
import Announce from './components/announce';
import Question from './components/Questions';
import Discussions from './components/Discussion/Discussions';
import Menubar from "./components/Layout/menu";
import ManageQuestions from "./components/ManageQuestions";
import ManagePosts from "./components/ManagePosts";
import Leaderboard from "./components/Layout/sideLeaderboard";
import MainLeaderboard from './components/MainLeaderboard';
import EditDetails from "./Account/Editdetails"
import Login from './Account/login';
import Signup from './Account/signup';
import Topbar from "./components/Layout/topbar";
import Womendes from './components/WomenCommunity/WomenDes';
import style from "./styles/Home.module.css";
import ContestReminder from './components/ContestReminder/contestReminder';
import Questions from './LockoutBot/Questions';
import Main from './LockoutBot/main';
import Form from './LockoutBot/Form';
import Submission from './LockoutBot/Submission';
import JoinContest from './LockoutBot/JoinContest';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import React from 'react';
import { useState, useEffect} from 'react';
<<<<<<< Updated upstream
import Alert from './components/alert';
import ApiState from './contextApi/apiState';
=======

>>>>>>> Stashed changes
function App() {
  const user=JSON.parse(localStorage.getItem("User"));
  console.log(user);
<<<<<<< Updated upstream
=======
  useEffect(()=>{},[user]);
>>>>>>> Stashed changes
  return (
   <>
   <ApiState>
    <BrowserRouter>
      
      <div className={style.app}>
        <div style={{position: "-webkit-sticky", position: "sticky" ,top: "0", left:"0",alignSelf: "start"}}>
          <Menubar users={user}/>
        </div>
        <div >
          <div style={{position: "-webkit-sticky", position: "sticky" ,top: "0"}}> 
            <Topbar />
<Alert/>
          </div>
         
          <div className={style.part2}>
            <div>
              <Routes>
            
                <Route path="/" element={<Announce />}/>
                <Route path="/Discussions" element={<Discussions/>} /> 
                <Route path="/Leaderboard" element={<MainLeaderboard/>} /> 
                <Route path="/Questions" element={<Question/>}/> 
                <Route path="/signup" element={<Signup />} /> 
                <Route path="/Login" element={<Login/>} /> 
                <Route path="/EditDetails" element={<EditDetails/>} /> 
                <Route path="/WomenDes" element={<Womendes/>} />
                {user != null?
                <>
                <Route path="/ManageQuestions"  element={user.isAdmin?user.isAdmin === "true" ?<ManageQuestions/>: <h1>Error 404 page not found</h1>: <h1>Error 404 page not found</h1> } /> 
                <Route path="/ManagePosts" element= {user.isAdmin?user.isAdmin === "true"? <ManagePosts/>: <h1>Error 404 page not found</h1>: <h1>Error 404 page not found</h1> } /> 
                </>:<></>
                }
                <Route path="/Lockout" element={<Main/>}/>
                <Route path="/LockoutBot/create-contest" element={<Form/>}/>
                <Route path="/LockoutBot/questions" element={<Questions/>}/>
                <Route path="/LockoutBot/join-contest" element={<JoinContest/>}/>
                <Route path="*" element={<h1>Error 404 page not found</h1>} /> 
                <Route path="/Lockout/userinfo" element={<Submission/>}/>
              </Routes>
            </div>
            <div style={{position: "sticky", top: "80px", alignSelf: "start"}}>
              <div className={style.part3}>
                <ContestReminder />
                <Leaderboard />
              </div>
            </div>
          </div>
        </div>
    </div>
       
    </BrowserRouter>
    </ApiState>
    </>

  );
}

export default App;