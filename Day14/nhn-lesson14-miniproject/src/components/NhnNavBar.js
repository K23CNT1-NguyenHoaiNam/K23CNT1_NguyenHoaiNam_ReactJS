import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaYoutube, FaSearch, FaGithub } from "react-icons/fa";
import { useState } from "react";

function NhnNavBar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  // ✅ Điều hướng đến trang users với từ khóa tìm kiếm
  const handleSearch = () => {
    navigate("/users", { state: { search: searchInput } });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo2.jpg" alt="Logo2" width="100" height="100" />
        </Link>

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

        <div className="d-flex align-items-center">
          {/* 🔵 Facebook - Xanh dương */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" 
   className="icon-hover" style={{ margin: "0 10px" }}>
  <FaFacebook size={30} color="#1877F2" />
</a>

<a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
   className="icon-hover" style={{ margin: "0 10px" }}>
  <FaGithub size={30} color="black" />
</a>

<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" 
   className="icon-hover" style={{ margin: "0 10px" }}>
  <FaYoutube size={30} color="red" />
</a>


          {/* 🔍 Ô nhập tìm kiếm */}
          <input 
            type="text" 
            className="form-control mx-2" 
            placeholder="Tìm Users..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          {/* 🟡 Icon tìm kiếm - Vàng */}
          <button onClick={handleSearch} className="btn mx-2">
            <FaSearch size={28} color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NhnNavBar;
