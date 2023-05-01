import React, { useState } from 'react'

export default function Registration() {

  const [data,setData] = useState({
    name : "",
    email: "",
     password:""
  })

  const mychange = (e)=> {

    setData({...data,[e.target.name] : e.target.value});

  }

  const saveData = (e)=> {

    e.preventDefault();

    fetch("https://pear-shy-caterpillar.cyclic.app/api/users/signup",{

    method: "post",
    headers : {
        'Content-Type' : "Application/json"
    },
    body : JSON.stringify(data)

    })
    .then(y=>y.json())
    .then(y=> {

        console.log(y);

    })

  }
  return (
    <form onSubmit={saveData}>

        <input type='text'  name='name' onChange={mychange}/>
        <input type='text'  name='email'  onChange={mychange}/>


        <input type='text' name='password' onChange={mychange}  />

        <input type='submit' value="save" />




    </form>
  )
}
