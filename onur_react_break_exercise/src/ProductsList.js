
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const ProductsList = () => {
  const [products, setProducts] = useState([]);  
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleFavorite = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product
      )
    );

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(productId)) {
      favorites.push(productId);
    } else {
      const index = favorites.indexOf(productId);
      if (index !== -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const filterFavorites = () => {
    setFavoritesOnly(!favoritesOnly);
  };

  const getLocalStorageProducts = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteProducts = products.filter((product) => favorites.includes(product.id));
    return favoriteProducts;
  };


  
 

  return (
    <div>
      <button onClick={filterFavorites}>
        {favoritesOnly ? 'Show All Products' : 'Show Favorites Only'}
      </button>
      <div>
        {favoritesOnly
          ? getLocalStorageProducts().map((product) => (
              <ProductCard key={product.id} product={product} onToggleFavorite={toggleFavorite} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} onToggleFavorite={toggleFavorite} />
            ))}
      </div>
      
    </div>
  );
};

export default ProductsList;
