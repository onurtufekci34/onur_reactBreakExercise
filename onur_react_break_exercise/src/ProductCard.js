import React from 'react';
import ProductDetails from './ProductDetails';

const ProductCard = ({ product, onToggleFavorite }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => onToggleFavorite(product.id)}>
        {product.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {product.isFavorite && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductCard;
