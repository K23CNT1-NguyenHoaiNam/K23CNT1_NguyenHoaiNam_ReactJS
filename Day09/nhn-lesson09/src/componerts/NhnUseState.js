import React, { useState} from "react"

export default function NhnUseState() {
    const [count,setCount] = useState(0);

    const NhnHandleTang =()=>{
        setCount(count+1);
    }

    const lists = [100,120,150,200];

    const [list, setList] = useState(danh_sach);

    NhnHandleAddNewRandom = ()=>{
        setList(prev =>{
            [...prev,
                parseInt(Math.random()*1000)
            ]
        })
    }

 return (
    <div className="alert alert-info">
        <h2>su dung usestate</h2>
        <div>
            <b>count: {count} </b>
            <button onClick={NhnHandleTang}>Tang</button>
            <button onClick={()=>setCount(count-1)}>giam</button>
            <button onClick={()=>setCount(0)}>dat lai</button>
        </div>
        <div>
            <h3>List: {list.toSring()} </h3>
            <button onClick={NhnHandleAddNewRandom}>Add new (random)</button>
        </div>
    </div>
 )
}