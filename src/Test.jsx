import React, { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ]);

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");

  const handleEdit = (id, name, age) => {
    setEditId(id);
    setEditName(name);
    setEditAge(age);
  };

  const saveEdit = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editId
          ? { ...user, name: editName, age: parseInt(editAge, 10) }
          : user
      )
    );
    setEditId(null);
    setEditName("");
    setEditAge("");
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "1rem" }}>
          {editId === user.id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <input
                type="number"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
            </>
          ) : (
            <>
              <p>
                {user.name}, Age: {user.age}
              </p>
              <button onClick={() => handleEdit(user.id, user.name, user.age)}>
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;
