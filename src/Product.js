import React, { useEffect, useState } from 'react'
import Item from './Item';

export default function Product() {

  const [product,setproduct] =  useState([]);

  useEffect(()=> {

    fetch("https://pear-shy-caterpillar.cyclic.app/api/products")
    .then(y=>y.json())
    .then(y=> {
        setproduct(y);
    })

  },[])
  return (
    <div>{
        
        product.map((value,index)=> {

            return (<Item data={value} index={index} key={index}></Item>)

        })
        }
        </div>
  )
}
