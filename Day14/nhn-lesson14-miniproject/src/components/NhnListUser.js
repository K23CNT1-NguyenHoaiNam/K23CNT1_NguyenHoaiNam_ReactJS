import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function NhnListUser() {
    const [users, setUsers] = useState([]);
    const apiUrl = "https://67da099235c87309f52abd1b.mockapi.io/k23cnt1-NguyenHoaiNam/Nhn_Users";

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => setUsers(response.data))
            .catch(error => console.error("Lỗi:", error));
    }, []);

    return (
        <div className="container">
            <h2>Danh sách người dùng</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.nhn_Id}>
                            <td>{user.nhn_Id}</td>
                            <td>{user.nhn_name}</td>
                            <td>{user.nhn_email}</td>
                            <td>{user.nhn_phone}</td>
                            <td>{user.nhn_active ? "Hoạt động" : "Khoá"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default NhnListUser;