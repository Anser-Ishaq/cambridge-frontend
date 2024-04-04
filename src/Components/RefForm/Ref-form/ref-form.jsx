import React from "react";
import "./ref-form.css";
import wave from "./../../Images/stepsImg.png";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
// import SweetAlert from 'sweetalert2';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2";
// import { useForm } from "react-hook-form";
function Refform() {
  const [form, setForm] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [refname, setRefName] = useState("");
  const [refphone, setRefPhone] = useState("");
  const [refemail, setRefEmail] = useState("");
  const [err, setErr] = useState(false);
  // const {reset} = useForm();
  // const MySwal = withReactContent(Swal)

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleRefName(e) {
    setRefName(e.target.value);
  }

  function handleRefPhone(e) {
    setRefPhone(e.target.value);
  }

  function handleRefEmail(e) {
    setRefEmail(e.target.value);
  }

  function handleFields(e) {
    // e.preventDefault();

    if (!name || !phone || !email) {
      // setForm(0);
      console.log("name123", name, email, phone);
      setErr(true);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    } else {
      setForm(1);
      console.log("first handle", name, email, phone);
      setErr(false);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    console.log("handle for first time", name, email, phone);
  }

  function handleFields2(e) {
    e.preventDefault();

    if (refname.length == 0 || refphone.length == 0 || refemail.length == 0) {
      setErr(true);
      setForm(1);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    } else {
      setErr(false);
      setForm(3);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  function handleFields3(e) {
    e.preventDefault();
    setForm(0);
    setName("");
    setPhone("");
    setEmail("");
  }

  return (
    <>
      <div className="refForm-img">
        <img className="refForm-img--inner" src={wave} alt="" />
      </div>
      {form === 0 && (
        <div className="refForm-container">
          <div className="refForm-title">Referral Form </div>
          <div className="refForm-title--tag">
            Refer a friend and earn €100!
          </div>
          <div className="refForm-title--det">Details :</div>
          <form onSubmit={handleFields} className="refForm-input">
            <input
              onChange={handleName}
              id="name"
              name="text"
              placeholder="Your Name"
              type="text"
              required
            />
            {err && name.length === 0 ? (
              <label className="input-error" placeholder="">
                Please enter Name
              </label>
            ) : (
              ""
            )}

<input
              onChange={handleEmail}
              id="email"
              name="email"
              placeholder="Your Email Address"
              type="text"
              required
            />
            {err && email.length === 0 ? (
              <label className="input-error" placeholder="">
                Please enter Email
              </label>
            ) : (
              ""
            )}

            <input
              onChange={handlePhone}
              id="phone"
              name="phone"
              placeholder="Your Phone"
              type="number"
              required
            />

            {err && phone.length === 0 ? (
              <label className="input-error" placeholder="">
                Please enter Phone
              </label>
            ) : (
              ""
            )}
          
            <div className="refForm-btn">
              <button onClick={handleFields} className="refForm-btn--inner">
                Next
              </button>
              <BsArrowRight
                className="refForm-icon--inner"
                style={{ color: "white" }}
              />
            </div>
          </form>
        </div>
      )}
      {form == 1 && (
        <div data-aos="flip-right" className="refForm-container">
          <div className="refForm-title">Referal Form</div>
          <div className="refForm-title--tag">
            Refer a friend and earn €100!
          </div>
          <div className="refForm-title--det">Details :</div>


          <form onSubmit={handleFields2} className="refForm-input">
            <input
              onChange={handleRefName}
              placeholder="Referal Name"
              type="text"
              required
            />

            {err && refname.length <= 0 ? (
              <label className="input-error" placeholder="">
                Please enter Referal Name
              </label>
            ) : (
              ""
            )}
             <input
              onChange={handleRefEmail}
              placeholder="Referal Email Address"
              type="text"
              required
            />
            {err && refemail.length <= 0 ? (
              <label className="input-error" placeholder="">
                Please enter Referal Email
              </label>
            ) : (
              ""
            )}
            <input
              onChange={handleRefPhone}
              placeholder="Referal Phone"
              type="number"
              required
            />
            {err && refphone.length <= 0 ? (
              <label className="input-error" placeholder="">
                Please enter Referal Phone
              </label>
            ) : (
              ""
            )}
            <div className="refForm-buttons">
              <div className="refForm-btn">
                <button onClick={handleFields2} className="refForm-btn--inner">
                  Submit
                </button>
                <BsArrowRight
                  className="refForm-icon--inner"
                  style={{ color: "white" }}
                />
              </div>

              <div className="refForm-pre-btn">
                <button
                  onClick={handleFields3}
                  className="refForm-pre-btn--inner"
                >
                  Previous
                </button>
                <BsArrowRight
                  className="refForm-pre-icon--inner"
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </form>
        </div>
      )}

      {form == 3 && (
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="success-container"
        >
          <h3 className="success-title">SUCCESS</h3>
          <span className="success-tag">Thanks for your participation</span>
        </div>
      )}
    </>
  );
}

export default Refform;
