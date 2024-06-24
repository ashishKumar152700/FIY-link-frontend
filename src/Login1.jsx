import React from 'react';
import './radhe.css';
import img from "../public/log.svg";
import imgg from "../public/register.svg";
import axios from "axios";
import { useState } from "react";
import {  Routes, Route, Link,useNavigate } from "react-router-dom";
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUserAlt } from "react-icons/fa";
function Login1() {

  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [usernameAvailability, setUsernameAvailability] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  



    const navigate = useNavigate();
  const handlelogin = () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username.trim() === "" || password.trim() === "") {
        alert("Please enter username and password");
        return; 
      } 


        axios.post("http://192.168.0.106:8080/user/auth/login", { "username":username,"password": password })
          .then((response) => {
            console.log(response.data)
           
            const receivedToken = response.data.token;
            localStorage.setItem('token', receivedToken); 
            // alert(`Logged in successfully as ${username}`);
            navigate('/biopage');
            
            
            
          })
          .catch((error) => {
              alert("either password or username is invalid. Please check!!");
            console.error(error);
          });
          
    };



  
  const handleSignUp = () => {
    const container = document.querySelector('.container-login');
    container.classList.add('sign-up-mode');
  };

  const handleSignIn = () => {
    const container = document.querySelector('.container-login');
    container.classList.remove('sign-up-mode');
  };




  //username logic

  const handleCreateAccount = () => {
    if (username.trim() === "" || email.trim() === "" || password.trim() === "" || name.trim()==""  ) {
      alert("Please fill in all the fields");
      return;
    }
    if (username.includes(" ")) {
      alert("Username should not contain spaces");
      return;
    }


    localStorage.setItem("name", name);
    localStorage.setItem("username", username); 
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);




    axios.post("http://192.168.0.106:8080/user/auth/register",{
      "username":username,
       "name" : name,
       "email":email,
      "password":password
  })
    .then( (response) => {
        console.log(response.status);
        console.log(response.data);
         navigate("/login");
      }
    )
    .catch((error) => {
      //error code 400, 409
      console.log(error);
      if(error.response.status == 409) {
        alert(error.response.data.errorMessage);
        console.log(error.reponse);
      }
      else if(error.response.status ==400){
        
        let fieldError = error.response.data;
        alert(JSON.stringify(fieldError));
        console.log();

      }
      
    });

    

  };
  

const usernamecheck=()=>{
  axios.post("http://192.168.0.106:8080/user/auth/username-availability",{"username":username})
  .then( (response) => {
      console.log(response.status);
      console.log(response.data);
      if(response.data) {
        setUsernameAvailability(true);
        }
      else{
        setUsernameAvailability(false);

      }
    }
  )
  .catch((error) => {
    console.log('error...')
  });


}


  return (
    <div className="container-login" >
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title" style={{textDecoration:'underline'}}> <b>Login Your Account </b></h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" id="username" defaultValue={localStorage.getItem("username")}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password"   id="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={handlelogin}  />
            {/* <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title" style={{textDecoration:'underline'}}> <b>Create Your Account</b></h2>
            <div className="input-field">


         


             <input type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
            </div>
            <div className="input-field">
                        
              <input type="text" placeholder="Username"  onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" className="btn" value="Sign up" onClick={handleCreateAccount} />
            {/* <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>
         
        </div>
      </div>

      <div className="panels-container" style={{overflow:'hidden'}}>
        <div className="panel left-panel" >
          <div className="content-login" >
            <h3>New here ?</h3>
            <p>Choose your FIY-Link username. You can always change it later.</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUp}  >
              Sign up
            </button>
          </div>
          <img src={img} className="image" alt="Sign In" />
        </div>
        <div className="panel right-panel " >
          <div className="content-login" >
            <h3>One of us ?</h3>
            <p>Choose Your FIY-Link username. You can always change it later.</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignIn} >
              Sign in
            </button>
          </div>
          <img src={imgg} className="image" alt="Sign Up" />
        </div>
      </div>
    </div>
  );
}

export default Login1;
