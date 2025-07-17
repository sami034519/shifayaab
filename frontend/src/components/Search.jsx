import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from './products/Products';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/Cartslice';

const SearchResults = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const isProd = process.env.NODE_ENV === 'production'; // ✅ CRA-compatible

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('q') || '';
    setQuery(searchQuery);

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    setResults(filtered);
  }, [location.search]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for: <span className="text-herbal">"{query}"</span>
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(product => {
            const imageUrl = isProd ? product.image : product.imageVercel;

            return (
              <div
                key={product.id}
                className="border rounded shadow hover:shadow-md transition bg-white overflow-hidden"
              >
                <img
                  src={imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-contain p-4"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold truncate">{product.title}</h3>
                  <p className="text-gray-600 mb-2">
                    Rs. {product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-4 py-2 bg-herbal text-white rounded hover:bg-green-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">No products matched your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
