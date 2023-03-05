import { getAllProducts } from '../services';
import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider/Slider';


const ProductsSlider = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    }
    loadData();
  }, [])

  return (
    <div className='pt-8 flex flex-col gap-4 items-center bg-background dark:bg-principal'>
      <h1 className='text-6xl font-bold text-principal dark:text-white'>
        Our Products
      </h1>

      <Slider products={products}/>

    </div>
  )
}

export default ProductsSlider;