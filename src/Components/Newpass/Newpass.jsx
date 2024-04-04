import React from "react";
import { useState } from "react";
import "./Newpass.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Newpassword() {
  const [pass, setPass] = useState();
  const [newPass, setNewPass] = useState();
  const [email, setEmail] = useState();
  let navigate = useNavigate();
  const { id } = useParams();
  console.log("params", id);
  function handlePass(e) {
    setPass(e.target.value);
  }
  function handleNewPass(e) {
    setNewPass(e.target.value);
  }
  async function handleReset() {
    if (!pass || !newPass || pass !== newPass) {
      Swal.fire({
        icon: "error",
        title: "Oops....",
        text: "Something went wrong!",
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Password has been changed successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");

      let newPassresult = await fetch("http://localhost:9000/reset-password", {
        method: "PUT",
        body: JSON.stringify({ id, pass }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      newPassresult = await newPassresult.json();
      console.warn("new password result====", newPassresult);
      // localStorage.setItem("log-in", JSON.stringify(newPassresult));
    }
  }

  return (
    <div className="pass-container">
      <div className="pass-fields">
        <div className="pass-title">Reset Password</div>
        {/* <p style={{color:"red"}}>{validLog}</p> */}
        <div className="pass-tag">
          Want to create new account?
          <br />
          <span>
            <Link className="sign-link" to={"/signup"}>
              Sign up
            </Link>
          </span>
        </div>

        <div className="pass-fields--inner">
          <input
            onChange={handlePass}
            type="password"
            name="forgetpass"
            id="password"
            placeholder="Enter new Password"
          />
          <input
            onChange={handleNewPass}
            type="password"
            name="forgetpass"
            id="forgetpass"
            placeholder="Confirm new Password"
          />
          <button onClick={handleReset} className="field-btn--inner">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newpassword;
