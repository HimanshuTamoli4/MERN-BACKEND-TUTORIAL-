import React, { useState, useEffect } from 'react';
import Product from './Product.jsx';  
import axios from 'axios';
const Products = () => {
  const [products, setProducts] = useState([]);
const getProducts = async()=>{
  const res = await axios.get('http://localhost:8080/products');
 console.log(res.data);
 setProducts(res.data);
}

useEffect(()=>{
  getProducts()
},[])

 /* 2nd mehod of doing this
  Fetch products from the data.json file
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);*/ 

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Products;
