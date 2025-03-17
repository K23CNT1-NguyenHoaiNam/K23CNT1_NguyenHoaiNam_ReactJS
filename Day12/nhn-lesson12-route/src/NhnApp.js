import React from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import NhnAbout from './components/NhnAbout'
import NhnHome from './components/NhnHome'
import NhnContact from './components/NhnContact'
import NhnGioiThieu from './components/NhnGioiThieu'
import NhnLienHe from './components/NhnLienHe'
import NhnSanPham from './components/NhnSanPham'
import NhnTinTuc from './components/NhnTinTuc'

export default function NhnApp() {
  return (
    <Router> {/* Chỉ cần 1 Router bao toàn bộ ứng dụng */}
      <div className='container border my-3'>
        <h1>React Router Demo</h1>
        <hr />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gioithieu">Gioi Thieu</Link></li>
            <li><Link to="/lienhe">Lien He</Link></li>
            <li><Link to="/sanpham">San Pham</Link></li>
            <li><Link to="/tintuc">Tin Tuc</Link></li>
          </ul>
        </nav>
        <div className='alert alert-danger'>
          <Routes> {/* Routes phải bao toàn bộ Route */}
            <Route path="/" element={<NhnHome />} />
            <Route path="/about" element={<NhnAbout />} />
            <Route path="/contact" element={<NhnContact />} />
            <Route path="/gioithieu" element={<NhnGioiThieu />} />
            <Route path="/lienhe" element={<NhnLienHe />} />
            <Route path="/sanpham" element={<NhnSanPham />} />
            <Route path="/tintuc" element={<NhnTinTuc />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
