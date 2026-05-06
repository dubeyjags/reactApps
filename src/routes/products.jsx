import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

export const Route = createFileRoute('/products')({
  component: RouteComponent,
})

function RouteComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomproducts"
        );
        const data = await response.json();

        const productsData = data.data.data;

        console.log("Correct data:", productsData);

        setProducts(productsData);
        console.log("Fetched products:", products);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (<div>
    {loading && <div className="loading"></div>}
    <h1>Products</h1>
<div className='products'> {products.map((product) => (
         <ProductCard key={product.id} product={product} />
        ))}</div>
  </div>);  
}
