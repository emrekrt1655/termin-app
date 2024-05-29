import React, { useState } from 'react';

const Filter: React.FC = () => {
  const [priceRange, setPriceRange] = useState('');
  const [rating, setRating] = useState('');
  const [distance, setDistance] = useState('');

  const handleFilter = async (e: React.FormEvent) => {
    e.preventDefault();
    // Filtreleme işlemi API çağrısı
    console.log('Filter:', { priceRange, rating, distance });
  };

  return (
    <div>
      <form onSubmit={handleFilter}>
        <div>
          <label>Price Range</label>
          <input type="text" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
        </div>
        <div>
          <label>Rating</label>
          <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div>
          <label>Distance</label>
          <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} />
        </div>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filter;