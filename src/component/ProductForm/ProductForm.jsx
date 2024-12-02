import React, {useState} from 'react'

export default function ProductForm({products, setProducts}) {
 
  const [productName, setProductName] = useState("shampoo")
  const [productPrice, setProductPrice] = useState(10)
  const [productInstock, setProductInstock] = useState("false")


  const handleAdd = () => {
    const newProduct = {
      name: productName, 
      price: productPrice,
      inStock: productInstock ? true : false
    }
    console.log (newProduct)
    console.log (products)
    setProducts ([...products, newProduct])
  }


  return (
    <>
      <h1>Product Form</h1>
      <label htmlFor="productName">Product Name</label>
      <input type="text" name="productName" id="" value={productName} onChange={(e)=>setProductName(e.target.value)} /><br/>

      <label htmlFor="productPrice">Product Price</label>
      <input type="text" name="productPrice" id="" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}  /><br />

      <label htmlFor="productPrice">Product Instock</label>
      <input type="checkbox" name="productInstrock" onChange={(e)=>setProductInstock(e.target.value)}  id="" /> <br/>

      <button type="button" onClick={handleAdd}>ADD PRODUCT</button>
    </>
  )
}
