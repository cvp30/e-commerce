import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductCard = ({title, price, image, rating}) => {


  return (
    <div
      className="relative z-0 box-border mx-auto bg-white shadow-principal shadow hover:shadow-principal hover:shadow-xl w-108 h-128 pt-4 rounded-2xl"
    >
      <div className="absolute right-2 top-6 ">
        <div className="flex">
        <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
        <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
        <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
        <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
        <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
        </div>
        <p className="text-center">{rating}</p>
      </div>
      <div className=" h-[56%]">
        <img
          className=" w-[48%] h-[95%] mx-auto hover:w-[53%] hover:h-[100%] ease-in-out duration-200"
          src={image}
          alt=""
        />
      </div>

      <div
        className=" box-border relative p-4 w-full h-[44%] rounded-b-2xl bg-gradient-to-t from-card to-white"
      >
        <h3
          className="z-40 font-bold mt-4 h-20 truncate"
        >
          {title}
        </h3>

        <div className="box-border flex justify-between mt-4">
          <h3
            className="box-border bg-principal text-white px-2 font-bold rounded-xl w-24 p-2"
          >
            $ {price}
          </h3>

          <div className="text-principal text-xl cursor-pointer flex pt-2 gap-2 hover:text-[black]">
            <FontAwesomeIcon className=""  icon={faCartPlus} />
            <p className="font-bold">add to Cart</p>
          </div>

        </div>


      </div>




    </div>
  )
}

export default ProductCard;