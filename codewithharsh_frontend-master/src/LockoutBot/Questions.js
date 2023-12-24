import React, { useEffect, useState } from "react";

import Componen from "./Component";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Questions = ({ codes, rating }) => {
  const [total, setTotal] = useState([]);
  const history = useNavigate();
  const user = {
    codeForces: "_IMMORTAL__",
  };
  const fetchUserData = () => {
    fetch("https://codeforces.com/api/problemset.problems?tags=implementation")
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        setTotal(results.result.problems);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [URL]);

  const x = {
    800: [],
    900: [],
    1000: [],
    1100: [],
    1200: [],
    1300: [],
    1400: [],
    1500: [],
    1600: [],
    1700: [],
    1800: [],
    1900: [],
    2000: [],
    2100: [],
    2200: [],
    2300: [],
    2400: [],
    2500: [],
    2600: [],
    2700: [],
    2800: [],
    2900: [],
    3000: [],
    3100: [],
    3200: [],
    3300: [],
    3400: [],
    3500: [],
  };

  for (let q in total) {
    let p = total[q].rating;

    let pstr = String(p);
    if (x[pstr]) {
      x[pstr].push(total[q]);
    } else {
      //console.log(questions[q]);
    }
  }
  const allratings = rating;
  const final = [];
  for (let ratings in allratings) {
    let pstr = String(allratings[ratings]);
    if (pstr) {
      const xlen = x[pstr].length;
      const y = Math.floor((Math.random() * xlen * 100) % xlen);
      const result = x[pstr][y];
      if (result) {
        if (!result.points) {
          result.points = 500;
        }
        const res = {
          url:
            "https://codeforces.com/problemset/problem/" +
            result.contestId +
            "/" +
            result.index,
          rating: result.rating,
          name: result.name,
          points: result.points,
        };
        final.push(res);
      }
    }
  }
  useEffect(() => {
    if (final.length) {
      postQues();
      history("/Lockoutbot/join-contest");
    }
  }, [final]);
  const postQues = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const request = {
      code: codes,
      admin: user.codeForces,
      questions: final,
    };
    try {
      const response = await Axios.post(
        "http://localhost:3001/lockoutbot/add-contest",
        request,
        { headers }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
};

export default Questions;
