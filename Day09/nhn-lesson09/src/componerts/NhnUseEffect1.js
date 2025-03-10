import React, { useEffect, useState } from "react";

export default function NhnUseEffect1() {
    const [count, setCount] = useState(0);
    useEffect(()=>(
        console.log('useEffect (callback)')
    ))
}