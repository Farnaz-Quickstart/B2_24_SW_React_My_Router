import React, {useState} from 'react'

export default function ProductForm2({products, setProducts}) {

  const [newform,setNewform] = useState ({})


  let handleChange = (e) => {
    e.preventDefault()

    setNewform({...newform,[e.target.name]:e.target.value })
    console.log (newform)

  }

  const handleAdd = () => {
    setProducts ([...products, newform ])
  }

  return (
    <>
      <h1>Product Form</h1>
      <label htmlFor="productName">Product Name</label>
      <input type="text" name="name" onChange={(e)=>handleChange(e)}  /><br/>

      <label htmlFor="productPrice">Product Price</label>
      <input type="text" name="price" onChange={(e)=>handleChange(e)}   /><br />

      <label htmlFor="productPrice">Product Instock</label>
      <input type="checkbox" name="inStock" onChange={(e)=>handleChange(e)} /> <br/>

      <button type="button" onClick={handleAdd} >ADD PRODUCT</button>
    </>
  )
}
