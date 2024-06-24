import "./App.css";
import { TextField } from "@mui/material";
import img from "../public/img1.png";
import { Link, Routes, Route } from "react-router-dom";
import Maindiv from "./Maindiv";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [bio, setBio] = useState("");

  // token check
  // useEffect(() => {
  //     const token = localStorage.getItem("token");

  //   if (!token) {
  //      window.location.href = "/login";
  //     } else {

  //     }
  //   }, []);

  const handleContinue = () => {
    localStorage.setItem("bio", bio);

    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.118:5000/user/add-about",
        { bio },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="username-grid">
        <div className="first">
          <h1 id="title">
            <b>FIY-Link</b>
          </h1>
        </div>

        <div className="second">
          <h1 id="create">
            <b>Tell us About Yourself</b>
          </h1>
          <span style={{ marginLeft: "17vh" }}>
            For a personalized Linktree experience
          </span>
          <br />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            label="About"
            style={{
              borderColor: "#FCA311",
              width: "60%",
              fontSize: 42,
              borderRadius: 10,
              marginLeft: "15vh",
            }}
            variant="outlined"
            required
            onChange={(e) => setBio(e.target.value)}
          />

          <br />
          <br />

          <button onClick={handleContinue}>Continue</button>

          <Routes>
            <Route path="/admin" element={<Maindiv />} />
          </Routes>

          <br />
          <br />
        </div>

        <div className="third">
          <img src={img} id="img-cover" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
