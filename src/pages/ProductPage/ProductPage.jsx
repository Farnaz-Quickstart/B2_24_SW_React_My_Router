import React, { useState } from 'react'
import ProductList from '../../component/ProductList/ProductList'
import ProductForm2 from '../../component/ProductForm2/ProductForm2'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function ProductPage() {
  const Intialproducts = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      inStock: true,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 599.99,
      inStock: true,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 199.99,
      inStock: false,
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 149.99,
      inStock: true,
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 49.99,
      inStock: true,
    },
  ];
  const [products, setProducts] = useState (Intialproducts)
  
  return (
    <>
      <ProductForm2 products={products} setProducts={setProducts}  />
      <ProductList products={products} setProducts={setProducts} />
    </>
  )
}
