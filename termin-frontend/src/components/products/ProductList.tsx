import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../models/Product';

interface ProductListProps {
  firmId: string;
}

const ProductList: React.FC<ProductListProps> = ({ firmId }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products?firmId=${firmId}`);
        console.log('Response:', response.data); // Log response data
        // Further processing...
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [firmId]);
  

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.image} alt={product.name} />
            </li>
          ))
        ) : (
          <li>No products found.</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
