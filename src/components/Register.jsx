import React, { useState } from "react";
import man from "../Images/register.jpg";
import "../Style/register.css";
import axios from "axios";

const URL = "http://localhost:8083/register";

function Register() {
  const [email, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const RegisterName = (e) => {
    setName(e.target.value);
  };

  const RegisterPassword = (e) => {
    setPassword(e.target.value);
  };

  const RegisterEmail = (e) => {
    setMail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Register = { email, name, password };
    axios.post(URL, Register);

   
  };

  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={man} className="img1"></img>
        </div>
        <div className="col-12 col-lg-6  reg_col">
          <div className="w-75  col  container-fluid div_input ">
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-100 p-2 mt-3"
                name="name"
                required
                onChange={RegisterName}
              ></input>

              <input
                type="email"
                required
                placeholder="Enter Email"
                className="w-100 p-2 mt-3"
                name="email"
                onChange={RegisterEmail}
              ></input>

              <input
                type="text"
                required
                name="password"
                placeholder="Create Password"
                className="w-100 p-2 mt-3"
                onChange={RegisterPassword}
              ></input>

              <input
                type="submit"
                value="Register"
                className="w-65 p-2 mt-3 btn-primary btn "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
