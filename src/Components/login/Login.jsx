import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState(false);
  const logAuth = localStorage.getItem("log-in");
 const [validLog,setValidLogState]=useState("")

  let navigate = useNavigate();
  function handelEmail(e) {
    setEmail(e.target.value);
  }
  function handelPass(e) {
    setPass(e.target.value);
  }

  async function login(e) {
    e.preventDefault();

    if (email.length == 0 || password.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      let logresult = await fetch("http://localhost:9000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      logresult = await logresult.json();
      console.warn(logresult);
      localStorage.setItem("log-in", JSON.stringify(logresult));

      if(logresult.status){
        navigate("/portal");
        console.log("validLog",validLog)
        console.log("Logged in successfully", logresult.status,logresult.error)

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      else{
        setValidLogState("OOOOOps....something is wrong")
        // console.log("validLog",validLog)
        // console.log("Logged in was not successfully", logresult.status,logresult.error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    
    }
  }

//   useEffect(()=>{
//  if(logAuth){
//   navigate("/portal");
//  }
 

  // },[])

  return (
    <div className="login-container">
      <div className="login-fields">
        <div className="login-title">Log In</div>
        <h6 style={{color:"red"}}>{validLog}</h6>
        <div className="login-tag">
          New to this site?
          <span>
            {" "}
            <Link className="sign-link" to={"/signup"}>
              Sign up
            </Link>{" "}
          </span>
        </div>
        {err && email.length <= 0 ? (
          <h1 style={{ color: "red" }}>please fill all the fileds</h1>
        ) : (
          ""
        )}
        <div className="login-fields--inner">
          <input
            onChange={handelEmail}
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
            required
          />
          <input
            onChange={handelPass}
            type="password"
            name=""
            id=""
            placeholder="Enter your Passsword"
            required
          />

          <button onClick={login} className="field-btn--inner">
            Login
          </button>
          <div className="pass-tag">
          <span>
            {" "}
            <Link className="sign-link" to={"/forgot-password"}>
            Forget Password ?
            </Link>{" "}
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
