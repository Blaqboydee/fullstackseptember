import React, { useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()

  const [userdetails, setUserdetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handledetails = (e) => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value });
    //  console.log(userdetails);
  };

  const register = () => {
    if (Object.values(userdetails).includes("")) {
      alert("please fill all fields");
    } else {
      setUsers([...users, userdetails]);
      console.log(users);
      navigate('/dashboard')
    }
  };




  return (
    <div>
      <h1>Sign up!</h1>
      <Input
        onchange={handledetails}
        placeholder="username"
        type="text"
        name="username"
      />
      <Input
        onchange={handledetails}
        placeholder="email"
        type="email"
        name="email"
      />
      <Input
        onchange={handledetails}
        placeholder="password"
        type="password"
        name="password"
      />
      <button onClick={register}>Sign up</button>
    </div>
  );
};

export default Signup;
