import "./App.css";
import { TextField } from "@mui/material";
import img from "../public/img1.png";
import Username from "./Username.jsx";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Maindiv from "./Maindiv";
import img2 from "../public/img20.jpeg";
import { useState } from "react";
import axios from "axios";
import logo from "../public/main.png";

const Login = () => {
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const handlelogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      return;
    }

    axios
      .post("http://192.168.0.118:5000/user/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        const receivedToken = response.data.token;
        localStorage.setItem("token", receivedToken);
        navigate("/admin");
        alert(`Logged in successfully as ${username}`);
        console.log(receivedToken);
      })
      .catch((error) => {
        alert("either password or username is invalid. Please check!!");
        console.error(error);
      });
  };
  return (
    <>
      <div className="username-grid">
        <div className="first" style={{ backgroundColor: "#fb8500" }}>
          <img src={logo} alt="cant loaded" height={250} width={250} />
        </div>

        <div className="second" style={{ backgroundColor: "#0a9396" }}>
          <h1 id="create">
            {" "}
            <b>Create Your FIY-Link </b>
          </h1>
          <span style={{ textAlign: "center" }}>
            {" "}
            <b>
              Choose Your FIY-Link username. You can always change it later.{" "}
            </b>
          </span>
          <br />
          <br /> <br />
          <TextField
            id="username"
            label="Username"
            defaultValue={localStorage.getItem("username")}
            style={{
              borderColor: "#FCA311",
              width: "60%",
              fontSize: 42,

              marginLeft: "15vh",
              backgroundColor: "white",
            }}
            variant="outlined"
            required
          />
          <br /> <br />
          <TextField
            id="password"
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
          />
          <br /> <br />
          <button onClick={handlelogin}> Login</button> <br /> <br />
          <span id="already-login">
            {" "}
            <b>New Account </b> ?
            <Link to="/registration" style={{ color: "white" }}>
              {" "}
              <b> Sign up </b>{" "}
            </Link>{" "}
          </span>
          <Routes>
            <Route path="/registration" element={<Username />}></Route>
          </Routes>
          <Routes>
            <Route path="/admin" element={<Maindiv />}></Route>
          </Routes>
        </div>

        <div className="third">
          <img src={img2} id="img-cover" alt="" />
        </div>
      </div>
    </>
  );
};
export default Login;
