import "./App.css";
import { TextField } from "@mui/material";
import img from "../public/img1.png";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";
import * as React from "react";
import axios from "axios";
import logo from "../public/main.png";
const Username = () => {
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [usernameAvailability, setUsernameAvailability] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      name.trim() == ""
    ) {
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

    axios
      .post("http://192.168.0.118:5000/user/auth/register", {
        username: username,
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        // navigate("/login");
      })
      .catch((error) => {
        //error code 400, 409
        console.log(error);
        if (error.response.status == 409) {
          alert(error.response.data.errorMessage);
          console.log(error.reponse);
        } else if (error.response.status == 400) {
          let fieldError = error.response.data;
          alert(JSON.stringify(fieldError));
          console.log();
        }
      });
  };

  const usernamecheck = () => {
    axios
      .post("http://192.168.0.118:5000/user/auth/username-availability", {
        username: username,
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.data) {
          setUsernameAvailability(true);
        } else {
          setUsernameAvailability(false);
        }
      })
      .catch((error) => {
        console.log("error...");
      });
  };

  return (
    <>
      <div className="username-grid">
        <div className="first" style={{ backgroundColor: "#fb8500" }}>
          <div className="logo-reg">
            {" "}
            <img src={logo} alt="" height={250} width={250} />
          </div>
        </div>

        <div className="second" style={{ backgroundColor: "#0a9396" }}>
          <h1 id="create">Create Your Account</h1>
          <span style={{ marginLeft: "16vh" }}>
            <b>
              {" "}
              Choose your FIY-Link username. You can always change it later.{" "}
            </b>
          </span>
          <br />
          <br /> <br />
          <TextField
            id="outlined-basic"
            label="Name"
            style={{
              borderColor: "#FCA311",
              width: "60%",
              fontSize: 42,
              marginLeft: "15vh",
              backgroundColor: "white",
            }}
            variant="outlined"
            required
            onChange={(e) => setname(e.target.value)}
          />
          <br /> <br />
          <TextField
            id="outlined-basic"
            label="Username"
            style={{
              borderColor: usernameAvailability === true ? "green" : "red",
              width: "60%",
              fontSize: 42,
              marginLeft: "15vh",
              backgroundColor: "white",
            }}
            variant="outlined"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="button"
            value="Check Availability"
            className="check-availability-button"
            onClick={usernamecheck}
          />{" "}
          <br /> <br />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            style={{
              borderColor: "#FCA311",
              width: "60%",
              fontSize: 42,
              marginLeft: "15vh",
              backgroundColor: "white",
            }}
            variant="outlined"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            style={{
              borderColor: "#FCA311",
              width: "60%",
              fontSize: 42,
              marginLeft: "15vh",
              backgroundColor: "white",
            }}
            variant="outlined"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <button onClick={handleCreateAccount}>
            {" "}
            Create Account{" "}
          </button> <br /> <br />
          <span id="already-login">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "white" }}>
              {" "}
              Log In{" "}
            </Link>{" "}
          </span>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>

        <div className="third">
          <img src={img} id="img-cover" alt="" />
        </div>
      </div>
    </>
  );
};
export default Username;
