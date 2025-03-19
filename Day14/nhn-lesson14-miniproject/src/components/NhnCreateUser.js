import React, { useState } from 'react';

function NhnCreateUser() {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thêm User thành công!\nTên: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}`);
    setUser({ name: '', email: '', phone: '' });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Thêm Người Dùng Mới</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Họ và Tên</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Số Điện Thoại</label>
          <input type="text" name="phone" value={user.phone} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>Thêm Người Dùng</button>
      </form>
    </div>
  );
}

export default NhnCreateUser;
