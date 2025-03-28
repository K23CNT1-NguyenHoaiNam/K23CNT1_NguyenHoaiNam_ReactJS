import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NhnHome from "./components/NhnHome";
import NhnNavBar from "./components/NhnNavBar";
import NhnCreateUser from "./components/NhnCreateUser";
import NhnListUser from "./components/NhnListUser";
import NhnEditUser from "./components/NhnEditUser";
import NhnGallery from "./components/NhnGallery";
import NhnFooter from "./components/NhnFooter"; // ✅ Import Footer
import background from "./assets/background.gif";

function NhnApp() {
  const [users, setUsers] = useState([]);
  const apiUrl =
    "https://67da099235c87309f52abd1b.mockapi.io/k23cnt1-NguyenHoaiNam/Nhn_Users";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  return (
    <BrowserRouter>
      <NhnNavBar />
      <div
        className="background-section"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<NhnGallery />} />
          <Route path="/" element={<NhnHome />} />
          <Route
            path="/"
            element={
              <h1 className="text-center text-white">
                !Chào mừng bạn đến với trang chủ quản lý Users!
              </h1>
            }
          />
          <Route path="/users" element={<NhnListUser users={users} />} />
          <Route path="/add-user" element={<NhnCreateUser setUsers={setUsers} />} />
          <Route path="/edit-user/:id" element={<NhnEditUser />} />
        </Routes>
      </div>

      {/* ✅ Thêm Footer vào cuối trang */}
      <NhnFooter />
    </BrowserRouter>
  );
}

export default NhnApp;
