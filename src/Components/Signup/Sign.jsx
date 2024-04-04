import React from "react";
import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GiConsoleController } from "react-icons/gi";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[valid,setValidState]=useState();
  const [password, setPass] = useState("");
  const signAuth = localStorage.getItem("sign-up");
  console.log("valid",valid)
  let navigate = useNavigate();
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePass(e) {
    setPass(e.target.value);
  }
  async function signup() {
    if (name.length == 0 || email.length == 0 || password.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      let result = await fetch("http://localhost:9000/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      result = await result.json();
      console.log(result);
      ItlocalStorage.setem("sign-up", JSON.stringify(result));

     if(result.status)
     {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      })
      Toast.fire({
        icon: "success",
        title: "Signed up successfully",
      });
      navigate("/login");
    }
    else{
      setValidState(result.error)
    }
     }
  }

  return (
    <div className="signup-container">
      <div className="signup-fields">
        <div className="signup-title">Sign Up</div>
        <p style={{color:"red"}}>{valid}</p>
        <input
          onChange={handleName}
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          onChange={handleEmail}
          type="email"
          placeholder="Enter your Email"
          required
        />
        <input
          onChange={handlePass}
          type="passsword"
          placeholder="Enter your Password"
          required
        />
        <button onClick={signup} className="signup-btn--inner">
          SignUp
        </button>
        <div className="signup-tag">
          Already have account?
          <span style={{ cursor: "pointer", textDecoration: "underline" }}>
            <Link className="log-link" to={"/login"}>
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
