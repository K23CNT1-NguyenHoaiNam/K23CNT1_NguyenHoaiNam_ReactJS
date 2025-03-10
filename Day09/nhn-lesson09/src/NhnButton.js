import React, { useState } from 'react';

function NhnButton() {
    const lists = ['arr1', 'arr2'];
    const [list, setList] = useState(lists);

    function handleList() {
        setList([
            ...list,
            parseInt(Math.random() * 1000)
        ]);
    }

    return (
        <div>
            <h2>Danh sách:</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={handleList}>Thêm số ngẫu nhiên</button>
        </div>
    );    
}
export default NhnButton;
