import React, { useState, useRef } from "react";
// import { BsArrowRight } from "react-icons/bs";
import wave from "./../../Images/stepsImg.png";
import "./PortalForm.css";
import Dropdown from "react-dropdown";
import { Navigate, useNavigate } from "react-router-dom";
import "react-dropdown/style.css";
import axios from "axios";
import FileBase64 from "react-file-base64";
function Portalform() {
  const [currentSelection, setCurrentSelection] = useState(
    ""
  );
  // const [file, setFile] = useState([]);
  const [newFile, setNewFile] = useState({
    file1: "",
    file2: "",
    file3: "",
    file4: "",
    file5: "",
    file6: "",
    file7: "",
    file8: "",
    file9: "",
    file10: "",
    file11: "",
    file12: "",

  });

  const handleFileChange = (event) => {
    console.log("event",event)
    console.log("event--target",event.target)
    console.log("event--target----name",event.target.name)
    // console.log(req.name)
    const { name, files } = event.target;
    setNewFile({
      ...newFile,
      [name]: files[0],
    });
    console.log("fileImages",newFile)
    // setFile(event.target.files);
  }
  
  const [inputFields, setInputFields] = useState({
    passCountry: "",
    passNumber: "",
    passSeries: "",
    radio: "",
    phoneNumber: "",
    famName: "",
    fName: "",
    pName: "",
    radio1: "",
    birthday: "",
    fatherFname: "",
    fatherLname: "",
    motherFname: "",
    motherLname: "",
    diploma1: "",
    diploma2: "",
    highschool: "",
    countrySchool: "",
    address: "",
    dateOfAdm: "",
    dateOfComp: "",
    bool1: "",
    bool2: "",
    bool3: "",
    bool4: "",
    bool5: "",
    bool6: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
    ans6: "",
    ans7: "",
    opt1: currentSelection,
  });
  // console.log(inputFields)
  const handleFields = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };
  const options = [
    { value: "one", label: "English Language Test Completed Recently" },

    {
      type: "group",
      name: "Cambridge ESOL:",
      items: [
        {
          value: "three",
          label:
            "PET / Preliminary English Test (graduated with minimal level = B2)",
        },
        { value: "four", label: "FCE / First Certificate in English" },
        { value: "five", label: "CAE / Cambridge Advanced in English" },
        { value: "six", label: "CPE / Cambridge Proficiency in English" },
        {
          value: "seven",
          label:
            "BEC / Business English Certificate Preliminary (graduated with minimal level = B2)",
        },
        { value: "eight", label: "BEC Vantage" },
        { value: "nine", label: "BEC Higher" },
        { value: "ten", label: "ESOL Skills for Life – Level 1, Level 2" },
      ],
    },
    {
      type: "group",
      name: " Michigan University:",
      items: [
        {
          value: "eleven",
          label:
            "ECCE / Examination for the Certificate of Competency in English",
        },
        {
          value: "twelve",
          label:
            "ECPE / Examination for the Certificate of Proficiency in English",
        },
      ],
    },
    {
      type: "group",
      name: "International English Language Testing System:",
      items: [
        {
          value: "thirteen",
          label: "IELTS General or Academic, minimal grade 6 / “competent user",
        },
      ],
    },
    {
      type: "group",
      name: "TOEFL:",
      items: [
        { value: "fourteen", label: "TOEFL IBT, minimum 87 points" },
        { value: "fifteen", label: "TOEFT ITP, minimum 543 points" },
        {
          value: "sixteen",
          label:
            "TOEIC (minimum 400 for listening, 385 for reading, 160 for speaking, 150 for writing",
        },
      ],
    },
    {
      type: "group",
      name: "British Council:",
      items: [{ value: "seventeen", label: "APTIS – minimal level B2" }],
    },
    {
      type: "group",
      name: "London Chamber of Commerce and Industry:",
      items: [
        { value: "eighteen", label: "LCCI / ELSA – minimal level B2" },
        { value: "19", label: "LCCI / JETSET – level 5, level 6" },
        { value: "20", label: "LCCI / EFB – level 2, level 3" },
      ],
    },
    {
      type: "group",
      name: "Pearson Language Tests:",
      items: [
        { value: "nineteen", label: "PTE General – Level 3" },
        { value: "twenty", label: "PTE Academic – minimal score 51" },
        { value: "twentyone", label: "Edexcel – Level 1, Level 2" },
        { value: "twentytwo", label: "APTIS – minimal level B2" },
      ],
    },
    {
      type: "group",
      name: "European Consortium for the Certificate of Attainment in Modern Languages:",
      items: [{ value: "twentythree", label: "ECL – minimal level B2" }],
    },
    {
      type: "group",
      name: "Examagram: ",
      items: [
        {
          value: "twentyfive",
          label:
            "Advanced level of English or at least grade C at the Use of English test",
        },
      ],
    },
    {
      type: "group",
      name: "GCE / General Certificate of Education:",
      items: [{ value: "twentysix", label: "minimal score 572" }],
    },
    {
      type: "group",
      name: "Trinity College London:",
      items: [
        {
          value: "twentyseven",
          label: "Integrated Skills in English / ISE II, ISE III, ISE IV",
        },
        {
          value: "twentyeight",
          label:
            "Graded Examinations in Spoken English / GESE with minimal grade 7",
        },
      ],
    },
    {
      type: "group",
      name: "Boston Educational Services: ",
      items: [
        {
          value: "twentyseven",
          label:
            "ITEP / International Test of English Proficiency – Academic, minimal grade 4",
        },
      ],
    },
  ];
  const defaultOption = options[0];

  let navigate = useNavigate();

  function handleDropDown(e) {
    setInputFields({
      ...inputFields,
      opt1: e.label,
    });
  }

const fieldValues = Object.values(inputFields);
console.log(fieldValues)
// const fieldLengths = fieldValues.map(value => value.length);
const fieldLengths = fieldValues.every(value => value.length);
console.log(fieldLengths);



  async function Submit(e) {
    e.preventDefault();

if(fieldLengths){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })

    const data = new FormData();
  data.append("passCountry", inputFields.passCountry);
  data.append("passNumber", inputFields.passNumber);
  data.append("passSeries", inputFields.passSeries);
  data.append("phoneNumber", inputFields.phoneNumber);
  data.append("famName", inputFields.famName);
  data.append("fName", inputFields.fName);
  data.append("pName", inputFields.pName);
  data.append("birthday", inputFields.birthday);
  data.append("radio1", inputFields.radio1);
  data.append("radio", inputFields.radio);
  data.append("file1", newFile.file1);
  data.append("file2", newFile.file2);
  data.append("file3", newFile.file3);
  data.append("file4", newFile.file4);
  data.append("file5", newFile.file5);
  data.append("fatherFname", inputFields.fatherFname);
  data.append("fatherLname", inputFields.fatherLname);
  data.append("motherFname", inputFields.motherFname);
  data.append("motherLname", inputFields.motherLname);
  data.append("diploma1", inputFields.diploma1);
  data.append("diploma2", inputFields.diploma2);
  data.append("highschool", inputFields.highschool);
  data.append("countrySchool", inputFields.countrySchool);
  data.append("address", inputFields.address);
  data.append("dateOfAdm", inputFields.dateOfAdm);
  data.append("dateOfComp", inputFields.dateOfComp);
  data.append("bool1", inputFields.bool1);
  data.append("bool2", inputFields.bool2);
  data.append("bool3", inputFields.bool3);
  data.append("bool4", inputFields.bool4);
  data.append("bool5", inputFields.bool5);
  data.append("bool6", inputFields.bool6);
  data.append("file6", newFile.file6);
  data.append("file7", newFile.file7);
  data.append("file8", newFile.file8);
  data.append("file9", newFile.file9);
  data.append("file10", newFile.file10);
  data.append("file11", newFile.file11);
  data.append("file12", newFile.file12);
  data.append("ans1", inputFields.ans1);
  data.append("ans2", inputFields.ans2);
  data.append("ans3", inputFields.ans3);
  data.append("ans4", inputFields.ans4);
  data.append("ans5", inputFields.ans5);
  data.append("ans6", inputFields.ans6);
  data.append("ans7", inputFields.ans7);
  data.append("opt1", inputFields.opt1);

    axios.post('http://localhost:9000/portal',
        data
    )
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
    <>
      <form id="inputForm" className="portal-container">
        <div className="portal-title">Personal Info</div>

        <div className="portal-input">
          <input
            onChange={handleFields}
            name="passCountry"
            placeholder="Passport Country"
            type="text"
          />
          <input
            onChange={handleFields}
            name="passNumber"
            placeholder="Passport Number"
            type="number"
          />
          <input
            onChange={handleFields}
            name="passSeries"
            placeholder="Passport Series"
            type="number"
          />
          <p style={{ margin: "0" }}>Are you an "EU" citizen?</p>
          <div className="input-radios">
             {" "}
            <input
              onChange={handleFields}
              name="radio"
              type="radio"
              id="Yes"
              value="true"
            />
              <label htmlFor="Yes">Yes</label>
            <br /> {" "}
            <input
              onChange={handleFields}
              name="radio"
              type="radio"
              id="No"
              value="false"
            />
              <label htmlFor="No">No</label>
            <br />
          </div>

          <input
            onChange={handleFields}
            name="phoneNumber"
            placeholder="Phone Number"
            type="number"
          />

          <input
            onChange={handleFields}
            name="famName"
            placeholder="Family Name"
            type="text"
          />

          <input
            onChange={handleFields}
            name="fName"
            placeholder="First Name"
            type="text"
          />
          <input
            onChange={handleFields}
            name="pName"
            placeholder="Previous Names"
            type="text"
          />
          <p style={{ margin: "0" }}>Gender :</p>
          <div className="input-radios">
             {" "}
            <input
              onChange={handleFields}
              type="radio"
              id="Other"
              name="radio1"
              value="OTHER"
            />
              <label htmlFor="html">Other</label>
            <br /> {" "}
            <input
              onChange={handleFields}
              type="radio"
              id="Female"
              name="radio1"
              value="FEMALE"
            />
              <label htmlFor="html">Female</label>
            <br /> {" "}
            <input
              onChange={handleFields}
              type="radio"
              id="Male"
              name="radio1"
              value="MALE"
            />
              <label htmlFor="html">Male</label>
            <br />
          </div>
          <p>Date of Birth :</p>
          <div className="input-radios">
            <input
              name="birthday"
              onChange={handleFields}
              placeholder="Date of Birth"
              type="date"
            />
          </div>

          {/* <input
            onChange={handleFields}
            name="email"
            placeholder="E-mail"
            type="email"
          /> */}
        </div>

        <div className="portal-title">Personal Docs</div>

        <div className="portal-input">
          <p>
            Copy of a document stating the candidate’s address outside Romania
            driver’s license, id, etc.
          </p>
          <input name="file1" onChange={handleFileChange} type="file" />

          <p>Pages 1,2,3,4 passport, vald for at least 9 months</p>
          <input name="file2" onChange={handleFileChange} type="file" />

          <p>Medical certificate</p>
          <input name="file3"onChange={handleFileChange} type="file" />

          <p>Birth certificate</p>
          <input name="file4"onChange={handleFileChange} type="file" />

          <p>Passport photo, face clearly shown</p>
          <input name="file5"onChange={handleFileChange} type="file" />
        </div>

        <div className="portal-title">Family Info</div>

        <div className="portal-input">
          <input
            onChange={handleFields}
            name="fatherFname"
            placeholder="Your Father first Name "
            type="text"
          />
          <input
            onChange={handleFields}
            name="fatherLname"
            placeholder="Your Father last Name "
            type="text"
          />
          <input
            onChange={handleFields}
            name="motherFname"
            placeholder="Your Mother first Name "
            type="text"
          />
          <input
            onChange={handleFields}
            name="motherLname"
            placeholder="Your Mother last Name "
            type="text"
          />
        </div>

        <div className="portal-title">Education 1</div>

        <div className="portal-input">
          <input
            onChange={handleFields}
            name="diploma1"
            placeholder="Name of the diploma (certificate) issued 1
  "
            type="text"
          />
          <input
            onChange={handleFields}
            name="diploma2"
            placeholder=" Name of the diploma (certificate) issued by the country , exam boards
"
            type="text"
          />
          <input
            onChange={handleFields}
            name="highschool"
            placeholder=" Name of high school
"
            type="text"
          />
          <input
            onChange={handleFields}
            name="countrySchool"
            placeholder="Country (of highschool)
 "
            type="text"
          />
          <input
            onChange={handleFields}
            name="address"
            placeholder=" Place (address of highschool)
"
            type="text"
          />
          <p>Date of Admission</p>

          <input onChange={handleFields} name="dateOfAdm" type="date" />
          <p>Date of Completion</p>

          <input onChange={handleFields} name="dateOfComp" type="date" />
        </div>

        <div className="portal-title">Education 2</div>

        <div className="portal-input">
          <p style={{ margin: "0" }}>Highschool Subjects :</p>
          <div className="input-radios">
             {" "}
            <input
              onChange={handleFields}
              type="checkbox"
              id="Other"
              name="bool6"
              value="English"
            />
              <label htmlFor="html">English</label>
            <br /> {" "}
            <input
              onChange={handleFields}
              type="checkbox"
              id="Female"
              name="bool1"
              value="Biology"
            />
              <label htmlFor="html">Biology</label>
            <br /> {" "}
            <input
              onChange={handleFields}
              type="checkbox"
              id="Male"
              name="bool2"
              value="Chemistry"
            />
              <label htmlFor="html">Chemistry</label>
            <br />
          </div>
          <div className="input-radios">
             
            <input
              onChange={handleFields}
              type="checkbox"
              id="Male"
              name="bool3"
              value="Other"
            />
              <label htmlFor="html">Other</label>
            <br /> {" "}
            <input
              onChange={handleFields}
              type="checkbox"
              id="Female"
              name="bool4"
              value="Physics"
            />
              <label htmlFor="html">Physics</label>
            <br /> {" "}
            <input
              onChange={handleFields}
              type="checkbox"
              id="Other"
              name="bool5"
              value="Mathematics"
            />
              <label htmlFor="html">Mathematics</label>
            <br />
          </div>
        </div>

        <div className="portal-title">Education Docs</div>

        <div className="portal-input">
          <p>Matric/GCSE/High School Certificate</p>
          <input onChange={handleFileChange} type="file" name="file6" />

          <p>FSC/A-Level/College Certificate</p>
          <input onChange={handleFileChange} name="file7" type="file" />
          <p>Proof of payment of fee</p>
          <input onChange={handleFileChange} name="file8" type="file" />
          <p>A letter of recommendation from the principal of the school </p>
          <input onChange={handleFileChange} name="file9" type="file" />
          <p>
            Letters of recommendation or proof of voluntary activities in the
            medical-pharmaceutical or related fields
          </p>
          <input onChange={handleFileChange} name="file10" type="file" />
          <p>
            C.V. with experience and skills in the field of medicine and
            pharmacy or related
          </p>
          <input name="file11" onChange={handleFileChange} type="file" />
          <p>signed and stamped high school Transcript of Records</p>
          <input name="file12" onChange={handleFileChange} type="file" />

          {/* <div className="portal-btn">
            <button className="portal-btn--inner">Submit</button></div> */}
        </div>

        <div className="portal-title">Questions</div>

        <div className="portal-input">
          <p>
            What/ who has influenced your decision to apply for a medical
            school?
          </p>

          <input
            onChange={handleFields}
            name="ans1"
            placeholder="Answer here!"
            type="textarea"
          />
          <p>What will you do to be a good student/ doctor/ dentist?</p>
          <input
            onChange={handleFields}
            name="ans2"
            placeholder="Answer here!"
            type="textarea"
          />
          <p>What plans do you have with your medical education?</p>
          <input
            onChange={handleFields}
            name="ans3"
            placeholder="Answer here!"
            type="textarea"
          />
          <p>
            Which extracurricular activity of yours are you most proud of and
            why?
          </p>
          <input
            onChange={handleFields}
            name="ans4"
            placeholder="Answer here!"
            type="textarea"
          />
          <p>What is your favorite book and how has it influenced you?</p>
          <input
            onChange={handleFields}
            name="ans5"
            placeholder="Answer here!"
            type="textarea"
          />
          <p>
            Are there any unusual circumstances in your life that would make us
            consider your application in a different light?
          </p>
          <input
            onChange={handleFields}
            name="ans6"
            placeholder="Answer here!"
            type="textarea"
          />
          <p>
            Describe the world in which you have lived and tell us what you
            would like to change about it. How do you intend to make an impact?
          </p>
          <input
            onChange={handleFields}
            name="ans7"
            placeholder="Answer here!"
            type="textarea"
          />
          <Dropdown
            onChange={handleDropDown}
            name="opt1"
            options={options}
            value={currentSelection}
          />
          <div onClick={Submit} className="portal-btn">
            <button className="portal-btn--inner">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Portalform;
