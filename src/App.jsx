import React, { useState } from "react";

function App() {
  const person = [
    { id: 1, name: "abiel", age: 20 },
    { id: 2, name: "hani", age: 21 },
    { id: 3, name: "simon", age: 22 },
  ];

  const [users, setUsers] = useState(person);

  const handleEdit = (id, updatedData) => {
    setUsers(users.map(user => (user.id === id ? { ...user, ...updatedData } : user)));
  };

  const editButton = user => {
    const newName = window.prompt("Enter name", user.name);
    const newAge = window.prompt("Enter age", user.age);

    if (newName && newAge) {
      handleEdit(user.id, { name: newName, age: parseInt(newAge, 10) });
    }
  };

  return (
    <>
      <h1>User Info</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>
              Name: {user.name}, Age: {user.age}
            </p>
            <button onClick={() => editButton(user)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
