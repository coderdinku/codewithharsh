import React, { useState, useEffect } from "react";
import Axios from "axios";
import useFetch from "./useFetch";
import Leaderboard from "./leaderboard";
const Submission = () => {
  const user = {
    codeForces: "_IMMORTAL__",
  };
  const [final, setFinal] = useState([]);
  const submission = useFetch(
    "https://codeforces.com/api/user.status?handle=" +
      user.codeForces +
      "&from=1&count=5"
  );
  // console.log(submission);
  let res;
  const [reTmr, setReTmr] = useState(0);
  const codes = localStorage.getItem("code");
  let allQues;
  let allUser = [];
  let points = 0;

  const addQustions = async () => {
    points = 0;
    const headers = {
      "Content-Type": "application/json",
    };
    const finale = codes;
    const request = {
      code: finale,
    };

    try {
      res = await Axios.post(
        "http://localhost:3001/lockoutbot/verifycontest",
        request,
        { headers }
      );
      allQues = res.data.data.code[0].questions;
      // console.log(allQues, res.data.data.code[0].user);
      allUser = res.data.data.code[0].user;
      // console.log(allUser);
    } catch (err) {
      console.log("ye h err", err);
    }
    if (submission && reTmr === 0) {
      for (let ques in allQues) {
        const currQues = allQues[ques];
        for (let submit in submission) {
          const currSubmit = submission[submit];
          if (currQues.name === currSubmit.problem.name) {
            if (currSubmit.verdict === "OK") {

              points = points + currQues.points;
            }
          }
        }
      }
      setReTmr(1);
    }
    try {
      if (allUser != [] && points != 0) {
        for (let us in allUser) {
          const currUser = allUser[us];
          if (currUser.codeForces === user.codeForces) {
            const thisPoint = allUser[us].points;
            allUser[us].points = thisPoint + points;
            console.log("hit", allUser[us].points);
          }
        }
        const value = {
          code: codes,
          questions: allQues,
          user: allUser,
        };
        const update = await Axios.patch(
          `http://localhost:3001/lockoutbot/update-user/${res.data.data.code[0]._id}`,
          value,
          { headers }
        );
        // console.log(update);
        points = 0;
      }
    } catch (err) {
      console.log(err);
    }
    try {
      const reas = await Axios.post(
        "http://localhost:3001/lockoutbot/verifycontest",
        request,
        { headers }
      );
      setFinal(reas.data.data.code[0].user);
      // console.log(final)
      // console.log(reas.data.data.code[0].user)
      points = 0;
    } catch (err) {
      console.log("ye h err", err);
    }

    points = 0;
  };

  useEffect(() => {
    addQustions();
  }, [submission]);

  return (
    <>
      <table>
    
        <thead>
          <tr>
            <th>Username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {!final.length ? (
            <tr>
              <td>NULL</td>
              <td>NULL</td>
            </tr>
          ) : (
            final.map((obj) => <Leaderboard key={obj._id} obj={obj} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default Submission;
