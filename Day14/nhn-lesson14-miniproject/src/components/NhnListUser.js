import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function NhnListUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Thêm state tìm kiếm
  const location = useLocation();
  const Url = "https://67da099235c87309f52abd1b.mockapi.io/k23cnt1-NguyenHoaiNam/Nhn_Users";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(Url)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  };

  useEffect(() => {
    if (location.state?.refresh) {
      fetchUsers();
      navigate("/list-users", { replace: true });
    }
  }, [location.state, navigate]);

  const handleDelete = (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      axios
        .delete(`${Url}/${userId}`)
        .then(() => {
          alert("✅ Xóa thành công!");
          fetchUsers();
        })
        .catch((error) => console.error("❌ Lỗi khi xóa người dùng:", error));
    }
  };

  // 🔍 Tìm kiếm users
  const filteredUsers = users.filter(user =>
    user.nhn_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>DANH SÁCH NGƯỜI DÙNG</h2>

      {/* 🔍 Ô tìm kiếm */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Tìm kiếm Users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.nhn_Id}>
                <td>{user.nhn_Id}</td>
                <td>{user.nhn_name}</td>
                <td>{user.nhn_email}</td>
                <td>{user.nhn_phone}</td>
                <td>
                  {user.nhn_activite ? (
                    <span className="badge bg-success">Hoạt động</span>
                  ) : (
                    <span className="badge bg-danger">Khoá</span>
                  )}
                </td>
                <td>
                  <button 
                    onClick={() => navigate(`/edit-user/${user.nhn_Id}`, { state: { refreshNeeded: true } })} 
                    className="btn btn-primary"
                  >
                    Chỉnh sửa
                  </button>
                  {" "}
                  <button 
                    onClick={() => handleDelete(user.nhn_Id)} 
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default NhnListUser;
