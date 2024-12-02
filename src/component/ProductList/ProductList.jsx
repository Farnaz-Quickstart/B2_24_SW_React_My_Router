import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import './ProductList.css'

export default function ProductList({products,setProducts}) {

  let handleChange = () => {
    console.log ("zxczx")
  }

  let handleDelete = (index) => {
    console.log (index)
    let productList2 = products.filter ((product, idx)=>idx!=index)
    setProducts (productList2)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>InStock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map ((product,idx)=>(
          <tr key={idx}>
            <td>{idx+1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><input type="checkbox" name="" id="" checked={product.inStock ? "checked" : ""} onChange={handleChange} /> </td>
            <td><button type="button" onClick={()=>handleDelete(idx)}>Delete</button></td>

          </tr>
        ))}
        
      </tbody>
    </Table>
  )
}
