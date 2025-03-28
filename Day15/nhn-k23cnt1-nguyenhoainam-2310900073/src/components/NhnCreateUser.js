import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NhnCreateUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      nhn_name: user.name,
      nhn_email: user.email,
      nhn_phone: user.phone,
      nhn_activite: false,
    };

    axios
      .post(
        "https://67da099235c87309f52abd1b.mockapi.io/k23cnt1-NguyenHoaiNam/Nhn_Users",
        newUser
      )
      .then(() => {
        setMessage("🎉 Thêm người dùng thành công!");
        setTimeout(() => {
          navigate("/list-users"); // 🔹 Chỉ điều hướng, không cần onUserAdded
        }, 1500);
      })
      .catch((error) => {
        setMessage("❌ Lỗi khi thêm người dùng!");
        console.error("Lỗi khi thêm user:", error);
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
<h2 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
  Thêm Người Dùng Mới
</h2>

      {message && (
        <div style={{ background: message.includes("Lỗi") ? "red" : "green", color: "white", padding: "10px", marginBottom: "10px", textAlign: "center" }}>
          {message}
        </div>
      )}

<form onSubmit={handleSubmit}>
  <div style={{ marginBottom: "10px" }}>
    <label style={{ color: "white" }}>Họ và Tên</label>
    <input type="text" name="name" value={user.name} onChange={handleChange} required 
      style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid blue" }} />
  </div>

  <div style={{ marginBottom: "10px" }}>
    <label style={{ color: "white" }}>Email</label>
    <input type="email" name="email" value={user.email} onChange={handleChange} required 
      style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid red" }} />
  </div>

  <div style={{ marginBottom: "10px" }}>
    <label style={{ color: "white" }}>Số Điện Thoại</label>
    <input type="text" name="phone" value={user.phone} onChange={handleChange} required 
      style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid purple" }} />
  </div>

  <button type="submit" 
    style={{ width: "100%", padding: "10px", background: "green", color: "black", border: "none", cursor: "pointer" }}>
    Thêm Người Dùng
  </button>
</form>

    </div>
  );
}

export default NhnCreateUser;
