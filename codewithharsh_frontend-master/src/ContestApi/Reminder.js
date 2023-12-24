import { useState } from "react";

import ContestComponent from "./Contestcomponent";
import styles from "../components/ContestReminder/contestReminder.module.css";
import useFetch from "./useFetch";
export default function Reminder() {
    const codeforces = useFetch("https://kontests.net/api/v1/codeforces");
    const codechef = useFetch("https://kontests.net/api/v1/code_chef");
    const leetcode = useFetch("https://kontests.net/api/v1/leet_code");

  
    return (
      <div className={styles.contestbox}>
        <h3>Contest Reminder</h3>
        {codeforces!==null?codeforces.map(contest=>(
           contest.in_24_hours==="Yes"? <ContestComponent key={contest.name} obj={contest}/>:<span></span>
            )):<div>No Contests to Show</div>}
        {codechef!==null?codechef.map(contest=>(
           contest.in_24_hours==="Yes"? <ContestComponent key={contest.name} obj={contest}/>:<span></span>
            )):<div>No Contests to Show</div>}
        {leetcode!==null?leetcode.map(contest=>(
           contest.in_24_hours==="No"? <ContestComponent key={contest.name} obj={contest}/>:<span></span>
            )):<span>No Contests to Show</span>}
        
       
        
      </div>
    );
  }
  