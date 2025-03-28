import React from "react";
import "./NhnFooter.css";
import { FaArrowUp } from "react-icons/fa";

function NhnFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            TOKARIN mang đến cho bạn những thông tin mới nhất về thị trường
            Game. Cập nhật, chia sẻ, review những trò chơi HOT.
          </p>
        </div>
        <div className="footer-section">
          <h4>Chuyên mục</h4>
          <ul>
            <li>Game Bắn Súng</li>
            <li>Game Chiến Thuật</li>
            <li>Game Kinh Dị</li>
            <li>Game Mobile</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Thể Loại</h4>
          <ul>
            <li>Hành động</li>
            <li>Kinh dị</li>
            <li>Mô Phỏng</li>
            <li>Nhập vai</li>
          </ul>
        </div>
      </div>

      {/* ✅ Nút cuộn lên đầu trang */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default NhnFooter;
