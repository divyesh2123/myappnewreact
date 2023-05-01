import React, { useState } from 'react'

export default function Home() {

   const [data,setdata] =useState(0)

   let counter = 0;

   const myCounter = ()=> {

    counter = counter +1;

    console.log(counter);

   }
  return (
    <div>{counter}
        <button onClick={myCounter}>Click Me</button>
    </div>
  )
}
