import React, { useEffect, useState } from 'react'

export default function MyUser() {

   const [data,setData] = useState([])

   useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(y=>y.json())
    .then(y=> {
        setData(y)
    })

   },[])
  return (
    <table>{
        data.map((value)=> {

            return (<tr><td>{value.name}</td><td>{value.email}</td><td>{value.body}</td></tr>)
        })
        
        }</table>
  )
}
