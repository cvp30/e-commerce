import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../redux/actions";
import Slider from "./Slider";
const ProductCards = () => {

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    if (!allProducts.length) dispatch(getAllProducts());
  }, [])

  return (
    <section className="w-full">
      <Slider products={allProducts} />

    </section>

  )
}

export default ProductCards;