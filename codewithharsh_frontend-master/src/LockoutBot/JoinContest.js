import React, { useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import Componen from "./Component";
import style from "./lockoutstyle.module.css";
import Timer from "./Timer";
const JoinContest = () => {
  const [final, setFinal] = useState([]);
  const [codes, setCodes] = useState("");
  const user = {
    codeForces: "_IMMORTAL__",
  };

  const addQustions = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    let news = "false";
    const finale = codes;
    const request = {
      code: finale,
    };

    try {
      console.log(request);
      const res = await Axios.post(
        "http://localhost:3001/lockoutbot/verifycontest",
        request,
        { headers }
      );
      setFinal(res.data.data.code[0].questions);
      const oldUsers = res.data.data.code[0].user;
      console.log(final);
      for (let a in oldUsers) {
        if (oldUsers[a].codeForces === user.codeForces) news = "true";
      }
      console.log(news);
      if (news === "false") {
        oldUsers.push({
          codeForces: user.codeForces,
          points: 0,
        });
        localStorage.setItem("code", finale);
        const values = {
          code: res.data.data.code[0].code,
          questions: res.data.data.code[0].questions,
          user: oldUsers,
        };
        const update = await Axios.patch(
          `http://localhost:3001/lockoutbot/update-user/${res.data.data.code[0]._id}`,
          values,
          { headers }
        );

        console.log(update);
      }
    } catch (err) {
      console.log("ye h err", err);
      alert(err);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    addQustions();
  };
  const handleChange = (e) => {
    const { codes, value } = e.target;
    setCodes(value);
  };
  console.log(final);

  return (
    <>
      {!final.length ? (
        <div className={style.outest}>
          <form onSubmit={handleClick}>
            <input
              type="text"
              name="codes"
              value={codes}
              onChange={handleChange}
              placeholder="Provide Code"
              className={style.input}
            ></input>
            <button className={style.btn}>Enter Code</button>
          </form>
        </div>
      ) : (
        <div className={style.table}>
          <Timer ques={final} />
          <div>
            <table>
              <thead className={style.tablehead}>
                <tr>
                  <th>Rating</th>
                  <th>Problem name</th>
                  <th>Points</th>
                </tr>
              </thead>
              {final.map((obj) => (
                <>
                  <Componen key={obj._id} obj={obj} />
                </>
              ))}
            </table>
          </div>
        </div>
      )}
      <div>
        <NavLink to="/userinfo">
          <button>End Contest</button>
        </NavLink>
      </div>
    </>
  );
};

export default JoinContest;


