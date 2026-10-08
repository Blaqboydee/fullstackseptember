import React, { useState } from "react";

const New = () => {
  const [color, setColor] = useState("blue");
  const [students, setStudents] = useState([
    { name: "Deji", complexion: "Dark" },
    { name: "Moyomade", complexion: "Darker" },
    { name: "Taiwo", complexion: "Black" },
  ]);

  const [shoes, setShoes] = useState([
    "Nike", "Balenciaga", "Addidas"
  ])

  const changecolor = () => {
    //    if (color == "blue") {
    //     setColor("red")

    //    } else {
    //     setColor("blue")
    //    }

    setColor((prev) => (prev == "blue" ? "red" : "blue"));  //Ternary Operator condition ? true : false
  };

  return (
    <div>
      <h1>My favorite color is? {color}</h1>
      <button style={{ backgroundColor: color }} onClick={changecolor}>
        Change color
      </button>

      {shoes.map((shoe) => <h1 key={shoe}>{shoe}</h1>)}

      {students.map((student, i) => (
        <p key={student.name}>
          student {i + 1} is {student.name} and he is {student.complexion} in
          complexion
        </p>
      ))}
    </div>
  );
};

export default New;
