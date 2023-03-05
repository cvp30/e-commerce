import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import StarRatings from "react-star-ratings";
const ProductCard = ({ title, price, image, rating }) => {

  const [ptje, setPtje] = useState(rating);

  const chageRating = nuevo => {
    setPtje(nuevo)
  }

  return (
    <div
      className="relative z-0 box-border mx-auto bg-white shadow  hover:shadow-principal dark:shadow-background  hover:shadow-xl w-72 h-96 pt-4 rounded-2xl"
    >
      <div className="absolute border right-2 top-6 ">
        <StarRatings
          rating={ptje}
          changeRating={chageRating}
          starDimension="1rem"
          starSpacing="0px"
          starRatedColor="#ffd105"
          numberOfStars={5}
        />
        {/* <div className="flex">
          <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
          <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
          <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
          <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
          <FontAwesomeIcon className=" text-star" size="sm" icon={faStar} />
        </div> */}
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
        className=" box-border relative py-4 px-2 w-full h-[44%] rounded-b-2xl bg-gradient-to-t from-card to-white"
      >
        <h3
          className="z-40 font-bold mt-2 h-20 truncate"
        >
          {title}
        </h3>

        <div className="box-border flex justify-between mt-1">
          <p
            className="box-border bg-principal text-white p-2 font-bold rounded-xl w-20 "
          >
            $ {price}
          </p>

          <div className="text-principal text-xl cursor-pointer flex pt-2 gap-2 hover:text-[black]">
            <FontAwesomeIcon className="" icon={faCartPlus} />
            <p className="font-bold">add to Cart</p>
          </div>

        </div>


      </div>




    </div>
  )
}

export default ProductCard;