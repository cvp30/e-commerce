import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProducts } from '../services'


export default function Products() {
  
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    
    const loadData = async() => {
      const data = await getAllProducts(); 
      setProducts(data);
    }
    loadData();
  }, [])

  console.log(products)
  return (
    // <ProductCard />
    <div className='mt-8 flex flex-col gap-4 items-center'>
      <h1 className='font-bold text-principal'>Our Products</h1>
    
      <div className='flex flex-wrap gap-8 justify-center'>
        {
          products.map(product => {
            return (
              <Link to="" key={product.id}>
                <ProductCard 
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating.rate}
                />
              </Link>
            )
          })
        }
      </div>
    
    </div>
  )
}
