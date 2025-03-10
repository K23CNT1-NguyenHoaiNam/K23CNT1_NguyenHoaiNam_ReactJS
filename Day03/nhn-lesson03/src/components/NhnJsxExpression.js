import React from 'react'

export default function NhnJsxExpression() {
    const name="Nguyễn Hoài Nam"

    const user = {
        firstName:"Nam",
        lastNamee:"Hoài"
    }
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastNamee ;
    }

    const element =(
        <div>
            <h2>{fullName(user)} </h2>
            <hr/>
            <h3> Welcome to, {name}</h3> 
        </div>
    );
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Fit-NTU - K23CNT1</h3>
        }
    } 
  return (
    <div>
        <h1>TVC - JSX Expression</h1>
        {/*sử dụng biến element */}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Nguyễn Quang Tam")}
    </div>
  )
}
