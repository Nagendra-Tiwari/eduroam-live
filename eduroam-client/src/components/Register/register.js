import React, { useState, useEffect } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    collegeCode: "",
    userType: "",
    userId: "",
    department: "",
    phone_number: "",
    date_of_birth: "",
  });

  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState("");
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch colleges from the server
    axios
      .get("http://localhost:5002/user/getColleges")
      .then((res) => {
        const sortedColleges = res.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setColleges(sortedColleges);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleCollegeChange = (e) => {
    const selectedCollege = colleges.find(college => college.name === e.target.value);

    setUser({
      ...user,
      collegeCode: selectedCollege ? selectedCollege.code : "",
    });
  };

  const handleUserTypeChange = (e) => {
    setUser({
      ...user,
      userType: e.target.value,
      userId: "",
    });
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    filterColleges(e.target.value);
  };

  const filterColleges = (searchTerm) => {
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColleges(filtered);
  };

  const register = () => {
    const { name, email, collegeCode, userType, userId, department, phone_number, date_of_birth } = user;
    if (!name || !email || !collegeCode || !userType || !userId || !department || !phone_number || !date_of_birth) {
      setError("All fields are mandatory.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    

    axios
      .post("http://localhost:5002/user/register", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/requestform");
      })
      .catch((error) => {
        console.error("Error registering:", error);
        alert("An error occurred during registration");
      });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  return (
    <>
    <nav className="navbar">
    <div className="navbar-logo">
      <img
        src={require("../images/logomain.png")}
        alt="Logo"
        className="logo-image"
      />
    </div>
  </nav>

    <div className="register">
      <h1>Register</h1>
      <form>
        <input
          type="radio"
          id="student"
          name="userType"
          value="student"
          checked={user.userType === "student"}
          onChange={handleUserTypeChange}
        />
        <FontAwesomeIcon icon={faUsers} />
        <label htmlFor="student">Student</label>
        <br />
        <input
          type="radio"
          id="faculty"
          name="userType"
          value="faculty"
          checked={user.userType === "faculty"}
          onChange={handleUserTypeChange}
        /> 
        <FontAwesomeIcon icon={faUserTie} />
        <label htmlFor="faculty">Faculty </label>
      </form>

      {user.userType === "student" && (
        <input type="text" name="userId" value={user.userId} placeholder="Your Student ID" onChange={handleChange}></input>
      )}
      {user.userType === "faculty" && (
        <input type="text" name="userId" value={user.userId} placeholder="Your Faculty ID" onChange={handleChange}></input>
      )}
     
      <div>
      <input
          type="text"
          list="collegesList"
          placeholder="Search for a College"
          value={searchTerm}
          onChange={handleSearchTermChange}
          onBlur={handleCollegeChange}  
        />
        <datalist id="collegesList">
          {filteredColleges.map((college) => (
            <option key={college.code} value={college.name} />
          ))}
        </datalist>
      </div> 

      
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input> {error && <div className="error">{error}</div>}

      <input
        type="text"
        name="department"
        value={user.department}
        placeholder="Your Department"
        onChange={handleChange}
      ></input>

      <input
        type="text"
        name="phone_number"
        value={user.phone_number}
        placeholder="Your Phone Number"
        onChange={handleChange}
      ></input>

      <input
        type="date"
        name="date_of_birth"
        value={user.date_of_birth}
        placeholder="Your Date of Birth"
        onChange={handleChange}
      ></input>
      
      <div className="button" onClick={register}>
        Register
      </div>
     
    </div>
    </>
  );
};

export default Register;
