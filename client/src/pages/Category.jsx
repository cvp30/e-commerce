import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../redux/actions";
import ProductCard from "../components/ProductCard";
import TripleSlider from "../components/TripleSlider";


const Category = () => {

  const { typeCategory } = useParams();

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);


  const categories = [
    'jewelery',
    'electronics',
    'men\'s clothing',
    'women\'s clothing',
  ]


  useEffect(() => {
    dispatch(getProducts(typeCategory));
  }, [typeCategory])


  return (
    <section className="w-full h-full flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/4 px-8 py-5 flex flex-col gap-5 text-dark">
        {/* <div className="border w-full">
          <h2 className="font-bold capitalize">filter by price</h2>

          <input type="number" name="" id="" />
        </div> */}

        <div className="flex flex-col gap-4">
          <h2 className="font-bold capitalize">categories</h2>
          <div className="flex flex-col gap-3">
            {
              categories.map((category, key) => {
                return (
                  <Link to={`/category/${category}`} key={key} className="capitalize w-fit hover:text-red transition-all duration-300">{category}</Link>
                )
              })
            }
          </div>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h2 className="font-bold capitalize">our best sellers</h2>
          <TripleSlider products={products} />

        </div>
      </div>

      <div className="w-full lg:w-3/4 h-fit md:px-6 py-5 flex flex-col gap-5">
        <h1 className="uppercase font-bold text-center md:text-start">{typeCategory}</h1>
        <p className="px-12 md:px-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aliquid veritatis ab autem ad, expedita blanditiis voluptates eligendi voluptatum, quo dolor alias excepturi magni. Aperiam doloremque laudantium quisquam quo et.</p>

        <div className="w-full h-fit flex justify-end">
          <select
            className='outline-0 border-b-2 border-dark w-full md:w-1/4 p-3 mx-2'
          >
            <option value="asc" selected={true}>lowest to highest price</option>
            <option value="desc">highest to lowest price</option>
            <option value="best">best evaluated</option>
          </select>
        </div>

        <div className="w-full flex flex-wrap gap-3 justify-center md:justify-start items-center">
          {
            products.map((product, key) => {
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

      </div>


    </section>
  )
}


export default Category;