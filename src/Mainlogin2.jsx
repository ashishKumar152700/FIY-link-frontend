import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import axios from "axios";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import BasicModal from "./Loader";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Mainlogin2 = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "/admin";
    }
  }, []);

  const handlelogin = (evt) => {
    evt.preventDefault();
    setshow(true);

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("password", password);
    localStorage.setItem("username", username);

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
        console.log(response.data); // Check the response data
        // ... rest of the code

        const receivedToken = response.data.token;
        localStorage.setItem("token", receivedToken);
        // alert(`Logged in successfully as ${username}`);
        setIsLoading(false);

        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container3">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1 className="modal-title">Welcome!</h1>
                  <p className="modal-desc">
                    <b> FIY-LINK </b>
                  </p>{" "}
                </div>

                <form>
                  <div className="input-block">
                    <label htmlFor="UserName" className="input-label">
                      UserName
                    </label>
                    <input
                      type="UserName"
                      autoComplete="off"
                      name="UserName"
                      id="username"
                      placeholder="UserName"
                      defaultValue={localStorage.getItem("username")}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="modal-buttons">
                    <button
                      className="input-button"
                      type="submit"
                      onClick={handlelogin}
                      style={{
                        fontSize: "12px",
                        fontWeight: "bolder",
                        letterSpacing: "2px",
                      }}
                    >
                      {isLoading ? <BasicModal name="Loading" /> : "Login"}
                    </button>
                  </div>
                </form>

                <p className="sign-up">
                  <Link to="/signup">
                    {" "}
                    <b> Create New Account </b>{" "}
                  </Link>
                  <Link to="/reset">
                    {" "}
                    <b> Forgot Password?</b>{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link to="/">
                    <KeyboardBackspaceIcon /> <b>Back To Home</b>{" "}
                  </Link>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://techcrunch.com/wp-content/uploads/2020/10/Linktree_Online-activisim-mockup.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container3 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 70vw;
    height: 90vh;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
    width: 100%;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 92vw;
    }
    .input-block {
      max-width: 70vw;
      margin-right: 4%;
    }

    .modal-right {
      display: none;
    }
  }
`;
export default Mainlogin2;
