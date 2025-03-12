import React, { useState } from "react";

const NhnAccountAdd = ({ addUser }) => {
  const [newUser, setNewUser] = useState({ name: "", email: "", age: "", gender: "" });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email && newUser.age && newUser.gender) {
      addUser(newUser);
      setNewUser({ name: "", email: "", age: "", gender: "" });
    }
  };

  return (
    <div className="form-container">
      <h2>Thêm tài khoản</h2>
      <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Tên" />
      <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
      <input type="number" name="age" value={newUser.age} onChange={handleChange} placeholder="Tuổi" />
      <select name="gender" value={newUser.gender} onChange={handleChange}>
        <option value="">Chọn giới tính</option>
        <option value="Nam">Nam</option>
        <option value="Nu">Nữ</option>
      </select>
      <button onClick={handleSubmit}>Thêm</button>
    </div>
  );
};

export default NhnAccountAdd;
