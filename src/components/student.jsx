import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Student = () => {
  const [studentDetails, setStudentDetail] = useState({
    name: "",
    rollno: "",
    math: "",
    science: "",
    english: "",
    hindi: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudentDetail({ ...studentDetails, [id]: value });
  };

  const postData = () => {
    axios({
      url: "http://localhost:8000/data",
      method: "POST",
      data: {
        Name: studentDetails.name,
        Roll_no: studentDetails.rollno,
        Math_marks: studentDetails.math,
        Science_marks: studentDetails.science,
        English_marks: studentDetails.english,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = () => {
    if (
      studentDetails.name === "" ||
      studentDetails.rollno === "" ||
      studentDetails.math === "" ||
      studentDetails.science === "" ||
      studentDetails.english === ""
    ) {
      alert("Fill the empty input");
    } else {
      postData();
    }
    // console.log(
    //   studentDetails.name,
    //   studentDetails.rollno,
    //   studentDetails.math,
    //   studentDetails.science,
    //   studentDetails.english
    // );
  };
  return (
    <div>
      <h1>Enter Score</h1>
    <Link to={"/table"}>
     <button>
        {" "}
        <h3>See All student marks</h3>
      </button>
    </Link> 
      <br />
      <label>Student Name : </label>
      <input
        placeholder="Enter Name"
        onChange={handleChange}
        value={studentDetails.name}
        pattern="[a-zA-Z]*"
        oninvalid="setCustomValidity('Please enter on alphabets only. ')"
        type="text"
        id="name"
      />
      <br />
      <label>Student Roll no : </label>
      <input
        placeholder="Enter Roll no"
        onChange={handleChange}
        value={studentDetails.rollno}
        type="text"
        id="rollno"
      />
      <br />
      <label> Math Marks :</label>
      <input
        placeholder="Enter Marks"
        onChange={handleChange}
        value={studentDetails.math}
        type="text"
        id="math"
      />{" "}
      <br />
      <label>Science marks:</label>{" "}
      <input
        placeholder="Enter Marks"
        onChange={handleChange}
        value={studentDetails.science}
        type="text"
        id="science"
      />
      <br />
      <label>English Marks:</label>
      <input
        placeholder="Enter Marks"
        onChange={handleChange}
        value={studentDetails.english}
        type="text"
        id="english"
      />
      <br />
      <label>Hindi Marks:</label>
      <input
        placeholder="Enter Marks"
        onChange={handleChange}
        value={studentDetails.hindi}
        type="text"
        id="hindi"
      />
      <br />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default Student;
