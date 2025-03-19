import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NhnCreateUser from './components/NhnCreateUser';
import NhnListUser from './components/NhnListUser';
function NhnApp() {
  return (
    <BrowserRouter>
      <div className="container border my-3 p-3">
        <h1 className="alert alert-danger text-center">
          K23CNT1 - Nguyễn Hoài Nam - 2310900073 - Bài thực hành tổng hợp
        </h1>

        {/* Thanh điều hướng */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container">
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <Link className="nav-link text-white" to="/">TRANG CHỦ</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link text-white" to="/users">DANH SÁCH USERS</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link text-white" to="/add-user">THÊM MỚI USERS</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Điều hướng trang */}
        <Routes>
          <Route path="/" element={<h2 className="text-center mt-4">Chào mừng đến với trang quản lý Users</h2>} />
          <Route path="/add-user" element={<NhnCreateUser />} />
          <Route path="/users" element={<NhnListUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default NhnApp;
