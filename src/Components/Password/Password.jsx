import React from "react";
import { useState } from "react";
import "./Password.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Password() {
  const [email, setEmail] = useState();

  function handleEamil(e) {
    setEmail(e.target.value);
  }

  async function handleReset() {
    

    let passresult = await fetch("http://localhost:9000/forget-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    passresult = await passresult.json();
    console.warn(passresult);
    localStorage.setItem("log-in", JSON.stringify(passresult));
    if(passresult.status){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'See your email for reset link!',
        showConfirmButton: false,
        timer: 2000
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }

  return (
    <div className="pass-container">
      <div className="pass-fields">
        <div className="pass-title">Forgot Password</div>
        {/* <p style={{color:"red"}}>{validLog}</p> */}
        <div className="pass-tag">
          Want to create new account?
          <br />
          <span>
            {" "}
            <Link className="sign-link" to={"/signup"}>
              Sign up
            </Link>{" "}
          </span>
        </div>

        <div className="pass-fields--inner">
          <input
            onChange={handleEamil}
            type="email"
            name="forgetemail"
            id="email"
            placeholder="Enter your existing email"
          />
          <button onClick={handleReset} className="field-btn--inner">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Password;
