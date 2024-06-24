import axios from "axios";
import { useState } from "react";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [password, setpassword] = useState("");

  const handleclick = async (e) => {
    e.preventDefault();

    console.log("sad");
  
    let body = {
      name: name,
      email: email,
      age: age,
      password: password,
    };
  
    console.log(body);
  
    try {
      const response = await axios.post("http://198.168.0.198:8080/user/signup", body);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
      />{" "}
      <br />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />{" "}
      <br />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => setage(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleclick}>Submit</button>
    </>
  );
}

export default Signup;
