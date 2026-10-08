import React from "react";
import { useState } from "react";

const Name = () => {
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState();
  const [hobbies, setHobbies] = useState([
    "Coding",
    "Eating",
    "Gaming",
    "Sleeping",
  ]);

  const changeName = () => {
    setSurname("Oluwanishola");
  };

  let firstName = "Adeoluwa";

  return (
    <div>
      <h1>
        My name is {firstName} {surname}
      </h1>
      <h2>I am {age} years old</h2>
      <button onClick={changeName}>Change Name</button>

      <h3>My Hobbies include:</h3>
      {hobbies.map((hobby) => (
        <h4>{hobby}</h4>
      ))}
    </div>
  );
};

export default Name;
