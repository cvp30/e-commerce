
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { getAllProducts } from "../redux/actions";
import Slider from "./Slider";
const ProductCards = () => {

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    if (!allProducts.length) dispatch(getAllProducts());
  }, [])

  console.log(allProducts)

  return (
    <section className="w-full">
      <Slider products={allProducts} />

    </section>

  )
}

export default ProductCards;