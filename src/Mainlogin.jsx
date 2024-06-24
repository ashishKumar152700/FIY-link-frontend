import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import BasicModal from "./Loader";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Mainlogin = () => {
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [usernameAvailability, setUsernameAvailability] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = (evt) => {
    evt.preventDefault();
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

    setIsLoading(true);

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
        setIsLoading(false);

        navigate("/login");
      })
      .catch((error) => {
        //error code 400, 409
        console.log(error);
        alert(error);
        if (error.response.status == 409) {
          alert(error.response.data.errorMessage);
          console.log(error.reponse);
        } else if (error.response.status == 400) {
          let fieldError = error.response.data;
          alert(JSON.stringify(fieldError));
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
      <GlobalStyle />
      <Wrapper>
        <div className="container2">
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
                  <h1 className="modal-title" style={{ fontWeight: "bolder" }}>
                    {" "}
                    Welcome!
                  </h1>
                  <p className="modal-desc">
                    <b> FIY-LINK </b>
                  </p>{" "}
                </div>
                <form>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="UserName" className="input-label">
                      UserName
                    </label>
                    <input
                      type="UserName"
                      autoComplete="off"
                      name="UserName"
                      id="UserName"
                      placeholder="UserName"
                      maxLength={15}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="modal-buttons">
                    <button
                      className="input-button"
                      type="submit"
                      onClick={handleCreateAccount}
                      style={{
                        fontSize: "12px",
                        fontWeight: "bolder",
                        letterSpacing: "2px",
                      }}
                    >
                      {isLoading ? <BasicModal name="Loading" /> : "Register"}
                    </button>
                  </div>

                  <p className="sign-up">
                    <Link to="/">
                      <KeyboardBackspaceIcon /> <b> Back To Home</b>{" "}
                    </Link>
                  </p>
                </form>
                <p className="sign-up">
                  Already have an account?
                  <Link to="/login">
                    <b> Sign In </b>{" "}
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
  .container2 {
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
    margin: 40px 0 0;
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
      max-width: 90vw;
      max-height: 90vmax;
    }
    .input-block {
      display: flex;
      flex-direction: column;

      width: 70vw;
      margin-right: 6%;
    }

    .modal-right {
      display: none;
    }
  }
`;
export default Mainlogin;
