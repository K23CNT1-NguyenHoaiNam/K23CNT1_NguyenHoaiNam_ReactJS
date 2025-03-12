import "./App.css";
import React, { useState } from "react";
import NhnAccountList from "./components/NhnAccountList";
import NhnAccountAdd from "./components/NhnAccountAdd";

function NhnApp() { 
  const [users, setUsers] = useState([
    { id: "SV01", name: "Nguyen Van A", email: "A@gmail.com", age: 20, gender: "Nam" },
    { id: "SV02", name: "Tran Thi B", email: "B@gmail.com", age: 34, gender: "Nữ" },
    { id: "SV03", name: "Le Van C", email: "C@gmail.com", age: 23, gender: "Nam" },
    { id: "SV04", name: "Bui Le Minh D", email: "D@gmail.com", age: 54, gender: "Nam" },
    { id: "SV05", name: "Nguyen Hoai Nam", email: "Nam1412@gmail.com", age: 23, gender: "Nam" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "", age: "", gender: "" });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.age && newUser.gender) {
      setUsers([...users, { id: `SV00${users.length + 1}`, ...newUser }]);
      setNewUser({ name: "", email: "", age: "", gender: "" });
    }
  };

  return (
    <div className="container">
      <h1 className="title">Quản lý tài khoản</h1>
      <div className="content">
        {/* Component Thêm tài khoản */}
        <NhnAccountAdd newUser={newUser} handleChange={handleChange} handleAddUser={handleAddUser} />

        {/* Component Danh sách tài khoản */}
        <NhnAccountList users={users} />
      </div>
    </div>
  );
}

export default NhnApp;
