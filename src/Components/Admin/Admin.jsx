import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import axios from "axios";
function Admin() {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9000/admin")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //   console.log("api data from be",apiData)

  return (
    <div className="admin-container">
      <h1>Admin</h1>
      <div className="admin-btn portal-btn">
        <button className="portal-btn--inner">Get data</button>
      </div>

      {Array.from(apiData)?.map((item) => (
        <div className="div">
          <div className="admin-fields">
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.passCountry}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.passNumber}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.passSeries}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.radio}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.phoneNumber}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.famName}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.fName}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.pName}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.radio1}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.birthday}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.fatherFname}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.fatherLname}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.motherFname}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.motherLname}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.diploma1}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.diploma2}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.highschool}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.countrySchool}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.address}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.dateOfAdm}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.dateOfComp}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.bool1}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.bool2}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.bool3}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.bool4}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.bool5}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.bool6}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.ans1}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.ans2}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.ans3}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.ans4}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.ans5}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.ans6}</li>
            </div>
            <div className="admin-fld">
              <h5>Data</h5>
              <li key={item.id}>{item.ans7}</li>
            </div>
          </div>

          <div className="admin-img">
            <img className="admin-images" src={item.file1} alt="" />
            <img className="admin-images" src={item.file2} alt="" />
            <img className="admin-images" src={item.file3} alt="" />
            <img className="admin-images" src={item.file4} alt="" />
            <img className="admin-images" src={item.file5} alt="" />
            <img className="admin-images" src={item.file6} alt="" />
            <img className="admin-images" src={item.file7} alt="" />
            <img className="admin-images" src={item.file8} alt="" />
            <img className="admin-images" src={item.file9} alt="" />
            <img className="admin-images" src={item.file10} alt="" />
            <img className="admin-images" src={item.file11} alt="" />
            <img className="admin-images" src={item.file12} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Admin;
