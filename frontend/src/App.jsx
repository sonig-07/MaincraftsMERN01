import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>MERN Internship Task</h1>

      {users.length === 0 && <p>No users found</p>}

      {users.map((u) => (
        <p key={u._id}>{u.name}</p>
      ))}
    </div>
  );
}

export default App;
