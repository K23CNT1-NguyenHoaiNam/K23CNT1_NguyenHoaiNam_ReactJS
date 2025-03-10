import './App.css';
import React, { useState, useEffect } from 'react';
import NhnButton from './NhnButton';

function NhnApp() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("storeName") || "Tam";
  });
  useEffect(() => {
    console.log("Component NhnApp đã render lại!");
  });
  const toggleName = () => {
    setName(prevName => (prevName === "Tam" ? "beo100kg" : "Tam"));
  };
  return (
    <div className='container border mt-3'>
        <h1>Nguyen Hoai Nam - k23cnt1 {name}</h1>
        <button onClick={toggleName}>Đổi tên</button> 
        <NhnButton />
    </div>
  );
}

export default NhnApp;
