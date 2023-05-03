import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllJewelery } from "../redux/actions";
import ProductCard from "../components/ProductCard";


const Category = () => {

  const { typeCategory } = useParams();

  const dispatch = useDispatch();
  const allCategory = useSelector(state => state.allJewelery);


  const categories = [
    'jewelery',
    'electronics',
    'men\'s clothing',
    'women\'s clothing',
  ]


  useEffect(() => {
    if (!allCategory.length) dispatch(getAllJewelery());
  }, [])

  return (
    <section className="w-full h-full flex ">
      <div className="w-1/4  p-5 bg-target flex flex-col text-dark">
        <div className="border w-full">
          <h2 className="font-bold capitalize">filter by price</h2>

          <input type="number" name="" id="" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Categories</h2>
          <div className="flex flex-col gap-3">
            {
              categories.map((category, key) => {
                return (
                  <Link to={`category`} key={key} className="capitalize w-fit hover:text-red transition-all duration-300">{category}</Link>
                )
              })
            }
          </div>

        </div>
      </div>

      <div className="w-3/4 h-fit px-12 py-5 flex flex-wrap gap-12 justify-start items-center">
        {
          allCategory.map((product, key) => {
            return (
              <ProductCard
                key={key}
                image={product.image}
                category={product.category}
                title={product.title}
                price={product.price}
                rating={product.rating.rate}
              />

            )
          })
        }

      </div>

    </section>
  )
}


export default Category;