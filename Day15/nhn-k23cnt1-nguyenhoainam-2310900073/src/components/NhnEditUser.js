import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";

function NhnEditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const Url = `https://67da099235c87309f52abd1b.mockapi.io/k23cnt1-NguyenHoaiNam/Nhn_Users/${id}`;

  const [user, setUser] = useState({
    nhn_name: "",
    nhn_email: "",
    nhn_phone: "",
    nhn_activite: false,
  });

  useEffect(() => {
    axios
      .get(Url)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, [Url]); // ✅ Đã thêm Url vào dependencies để tránh cảnh báo ESLint

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(Url, user)
      .then(() => {
        alert("Cập nhật người dùng thành công!");
        navigate("/list-users", { state: { refresh: true } }); // ✅ Gửi state để cập nhật danh sách
      })
      .catch((error) => console.error("Lỗi khi cập nhật:", error));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Chỉnh Sửa Người Dùng</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Họ và Tên</label>
          <input type="text" name="nhn_name" value={user.nhn_name} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input type="email" name="nhn_email" value={user.nhn_email} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Số Điện Thoại</label>
          <input type="text" name="nhn_phone" value={user.nhn_phone} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <input type="checkbox" name="nhn_activite" checked={user.nhn_activite} onChange={handleChange} />
          <label style={{ marginLeft: "10px" }}>Trạng thái hoạt động</label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={() => navigate("/list-users")} style={{ padding: "10px", background: "gray", color: "white", border: "none", cursor: "pointer", flex: 1, marginRight: "5px" }}>
            Quay lại
          </button>
          <button type="submit" style={{ padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer", flex: 1 }}>
            Cập Nhật
          </button>
        </div>
      </form>
    </div>
  );
}

export default NhnEditUser;
