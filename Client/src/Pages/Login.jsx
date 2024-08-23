import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import './login.css'
const Login = () => {
    
     const userRef = useRef();
     const errRef = useRef();  

     const Navigate = useNavigate()

     const handlePage = () => {
        Navigate("/")
     }

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [success, setSuccess] = useState(false);
     const [error, setError] = useState("");

     const navigate = useNavigate();

     useEffect(() => {
       userRef.current.focus();
     }, []);

     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         const response = await axios.post("http://localhost:8000/login", {
           username,
           password,
         });
         console.log(response);
         if (response) {
           console.log(response);
           if (response.data.user.role == "admin") {
             navigate("/");
           } else {
             navigate("/faculty-home");
           }
         }
       } catch (err) {
         console.log(err);
       }
     };


  return (
    <div className="Login">
      <div></div>

      <div className="Fields">
        <h3 style={{ marginLeft: "34vh", fontSize: "30px" }}>Login</h3>
        <div style={{ marginLeft: "20vh" }}>
          <h4 className="faculty-name">
            <span>
              <FontAwesomeIcon icon={faUser} style={{ marginLeft: "10px" }} />
            </span>{" "}
            UserName
          </h4>
          <input
            type="Text"
            className="InputField"
            placeHolder="Enter Username here.."
            ref={userRef}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginLeft: "20vh" }}>
          <h4 className="faculty-name">
            <span>
              <FontAwesomeIcon icon={faLock} style={{ marginLeft: "10px" }} />
            </span>{" "}
            Password
          </h4>
          <input
            type="password"
            className="InputField"
            placeHolder="Enter Password here.."
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-btn"
            style={{ marginRight: "50vh" }}
            onClick={handlePage}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login