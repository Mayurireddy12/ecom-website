import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product, viewMode }) => { 
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex items-center p-4 transition-transform transform hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-md flex-shrink-0"
        />
        <div className="ml-4 flex-grow">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <div className="flex items-center my-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
          </div>
          <div className="flex items-end justify-between mt-2">
            <div>
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            </div>
            <span className="text-sm font-bold text-green-500">
              {product.discount}% Off
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 relative">
      {product.hot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          HOT
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm">
          {product.description}
        </p>
        <div className="flex items-center my-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < product.rating
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="ml-2 text-sm text-gray-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          </div>
          <span className="text-sm font-bold text-green-500">
            {product.discount}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;