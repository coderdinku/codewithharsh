import { useState } from "react";
import axios from "axios";
import style from "./Account.module.css";
import { useNavigate } from "react-router-dom";
export default function EditDetails() {
  // const initialvalues={firstname:"",lastname:"",codeforces:"",codechef:"",atcoder:"",leetcode:"",hackerearth:""}
  const credentials = JSON.parse(localStorage.getItem("User"));
  const [formvalues, setformvalues] = useState(credentials);
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formvalues.emailId);
    await axios.patch(
        `http://localhost:3001/auth/editdetails/${formvalues._id}`,
        formvalues
      )
      .then((res) => {
        const msg = res.data.status;
        console.log(msg);
        if (msg === "Successfully updated the user") {
          const result = res.data.data.updateduser;
          localStorage.setItem("User", JSON.stringify(result));
          alert(msg);
        }
      });
  };
  const handleSubmitBack = () => {
    history("/");
  }
  return (
    <div className={style.outer}>
      <div className={style.codeplus}>
        <form  >
          <div>
            <h3>Personal Details</h3>
          </div>
          <div className={style.form}>
            <div className={style.label}>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formvalues.firstName}
                onChange={handleChange}
                className={style.input1}
              />
            </div>
            <div className={style.label}>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formvalues.lastName}
                onChange={handleChange}
                className={style.input1}
              />
            </div>
          </div>
          <div>
            <h3>Please provide handle name of the following:</h3>
          </div>
          <div className={style.form}>
            <div className={style.label}>
              <label>Codeforces:</label>
              <input
                type="text"
                name="codeForces"
                value={formvalues.codeForces}
                onChange={handleChange}
                className={style.input1}
              />
            </div>
            <div className={style.label}>
              <label>Atcoder:</label>
              <input
                type="text"
                name="atCoder"
                value={formvalues.atCoder}
                onChange={handleChange}
                className={style.input1}
              />
            </div>
            <div className={style.label}>
              <label>Codechef:</label>
              <input
                type="text"
                name="codechef"
                value={formvalues.codechef}
                onChange={handleChange}
                className={style.input1}
              />
            </div>
            <div className={style.label}>
              <label>Leetcode:</label>
              <input
                type="text"
                name="leetcode"
                value={formvalues.leetcode}
                onChange={handleChange}
                className={style.input1}
              />
            </div>
            <div className={style.label}>
              <label>Hackerearth:</label>
              <input
                type="text"
                name="hackerEarth"
                value={formvalues.hackerEarth}
                onChange={handleChange}
                className={style.input1}
              />
            </div>
          </div>
          <div className={style.buttonbox}>
            <button className={style.button} onCLick={handleSubmit}>Save Changes</button>
          </div>
          <div className={style.buttonbox}>
            <button className={style.button} onClick = {handleSubmitBack}>Back to Home</button>
          </div>
        </form>
      </div>
    </div>
  );
}
