import React, { useState } from "react";

const Signup2 = ({adamasingbaname}) => {
  const [userObj, setUserObj] = useState({
    username: "",
    email: "",
    password: "",
  });

  const collectDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setUserObj({ ...userObj, [name]: value });

    console.log(userObj);
  };

  return (
    <div>
        <h1>Welcome,{adamasingbaname} </h1>
      <input
        name="username"
        onChange={collectDetails}
        type="text"
        placeholder="enter username"
      />
      <input
        name="email"
        onChange={collectDetails}
        type="text"
        placeholder="enter email"
      />
      <input
        name="password"
        onChange={collectDetails}
        type="text"
        placeholder="enter password"
      />
    </div>
  );
};

export default Signup2;
