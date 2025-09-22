import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { FaTh, FaList } from 'react-icons/fa';
import shoe from '../assets/Banner-shoe.png';
import nike from '../assets/shoe1.png'
import bag from '../assets/bag.png'
import pinkbag from '../assets/pinkbag.png'
import sideshoe from '../assets/sideshoe.png'
import singleshoe from '../assets/singleshoe.png'
import doubleshoe from '../assets/doubleshoe.png'


const sampleProducts = [
 { id: 1, name: 'Nike Air Max 270 React', brand: 'Nike', price: 295.43, hot: true, color: 'blue', description: 'Men’s Running Sneakers', image:nike, oldPrice: 534.33, discount: 34, rating: 4, reviews: 21 },
 { id: 2, name: 'Nike Airmax', brand: 'Nike', price: 150.00, hot: true, color: 'blue', description: 'A timeless Airmax shoe', image:bag, oldPrice: 180.00, discount: 16, rating: 5, reviews: 48 },
 { id: 3, name: 'Nike Airmax', brand: 'Nike', price: 150.00, hot: true, color: 'blue', description: 'A timeless Airmax shoe', image:pinkbag, oldPrice: 180.00, discount: 16, rating: 5, reviews: 48 },
 { id: 4, name: 'Adidas Grand Court', brand: 'Adidas', price: 65.00, hot: true, color: 'blue', description: 'Casual court shoes', image: sideshoe, oldPrice: 80.00, discount: 18, rating: 4, reviews: 25 },
 { id: 5, name: 'Nike Airmax', brand: 'Nike', price: 150.00, hot: true, color: 'blue', description: 'A timeless Airmax shoe', image: singleshoe, oldPrice: 180.00, discount: 16, rating: 5, reviews: 48 },
 { id: 6, name: 'Nike Airmax', brand: 'Nike', price: 150.00, hot: true, color: 'blue', description: 'A timeless Airmax shoe', image:doubleshoe , oldPrice: 180.00, discount: 16, rating: 5, reviews: 48 },
];

const HomePage = () => {
  const [filters, setFilters] = useState({
    priceRange: 350,
    color: null,
    brand: null,
  });

  const [sortBy, setSortBy] = useState('name-asc');
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); 
  };

  const hotDealProducts = sampleProducts.filter(p => p.hot);
  const brandCounts = hotDealProducts.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, {});

  const filteredProducts = sampleProducts.filter((product) => {
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.priceRange !== 350 && product.price > filters.priceRange) return false;
    if (filters.color && product.color !== filters.color) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <div className="container mx-auto p-4 lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <Sidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            brandCounts={brandCounts}
          />
        </div>
        <main className="lg:col-span-3">
          
          <div className="relative bg-blue-500 rounded-lg p-6 mb-6 text-white overflow-hidden">
            <h1 className="text-3xl font-bold">Adidas Men Running Sneakers</h1>
            <p className="mt-2 text-sm">Authentic design. Taken right to the edge.</p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-500 font-bold rounded-md hover:bg-gray-100">SHOP NOW</button>
            <img src={shoe} alt="Sneaker banner" className="absolute right-0 bottom-0  md:block h-40" />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 text-sm text-gray-600 space-y-4 sm:space-y-0">
            <span className="flex-shrink-0">{filteredProducts.length} Items</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span>Show:</span>
                <select
                  value={productsPerPage}
                  onChange={(e) => {
                    setProductsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                  <option value={filteredProducts.length}>All</option>
                </select>
              </div>
              <div className="flex items-center space-x-1 border border-gray-300 rounded-md p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 rounded-md ${
                    viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaTh className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 rounded-md ${
                    viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaList className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'} gap-6`}>
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              {[...Array(totalPages).keys()].map(number => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                    currentPage === number + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {number + 1}
                </button>
              ))}
            </nav>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;