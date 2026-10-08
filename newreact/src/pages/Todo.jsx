import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [newInput, setNewInput] = useState("");

  const createTodo = () => {
    setTasks([...tasks, task]);
    console.log(tasks);
    setTask("");
  };

  const deleteBtn = (index) => {
    console.log(index);
    tasks.splice(index, 1);
    console.log(tasks);
    setTasks([...tasks]);
  };

  const deleteWithFilter = (index) => {
    // console.log(index);

    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editBtn = (index) => {
    setIsEditing(true);
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const updateTasks = () => {
    console.log(editIndex);
    tasks.splice(editIndex, 1, task);
    console.log(tasks);
    setTasks([...tasks]);
    setTask("");
    setIsEditing(false);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setNewInput(e.target.value);
    console.log(newInput);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      {isEditing ? (
        <button onClick={updateTasks}>Update </button>
      ) : (
        <button onClick={createTodo}>Submit</button>
      )}
  

      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{task}</td>
              <td>
                <button onClick={() => deleteBtn(i)}>Delete</button>
                <button onClick={() => deleteWithFilter(i)}>
                  Detele with filter
                </button>
                <button onClick={() => editBtn(i)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


          <br />
      <br />
      <br />
      <input type="text" onChange={handleInput} />
    </div>
  );
};

export default Todo;
