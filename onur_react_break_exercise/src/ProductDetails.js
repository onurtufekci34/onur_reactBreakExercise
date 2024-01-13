
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <img src={product.image} alt={product.name}/>
    </div>
  );
};

export default ProductDetails;
