import React, { useState } from 'react'

export default function UserForm() {

  const [data,setData] = useState({
        name : "",
        email : "",
        password: ""
    })

    const MyHanlder = (e)=> {

        setData({...data,[e.target.name]: e.target.value})

    }

    const onMySubmit =(e)=> {
      e.preventDefault();

       fetch("https://pear-shy-caterpillar.cyclic.app/api/users/signup",{
        method : "post",
        body :  JSON.stringify(data),
        headers : {
          "Content-Type": "application/json"
        }
       })

        console.log(data);

    }

  return (
    <div>
        <form onSubmit={onMySubmit}>

            <input type='text'  name='name' onChange={MyHanlder}/>
            <input type='text'  name='email' onChange={MyHanlder}/>
            <input type='text'  name='password' onChange={MyHanlder}/>

            <input type='submit' value="save" />

        </form>

    </div>
  )
}
