import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const SimpleCard = ({ image, title, price, rating }) => {
  return (
    <div className="flex w-full h-24 ">
      <figure className="h-full w-1/4 flex justify-center items-center">
        <img className="h-full" src={image} alt="" />
      </figure>

      <div className="w-3/4 pl-3 flex flex-col justify-center items-start">
        <Link className="w-full hover:text-red truncate">{title}</Link>
        <div className="flex items-center gap-2">
          <p className="before:content-['$_']">
            {Number.parseFloat(price).toFixed(2)}
          </p>
          <p className="text-[#8D99AE] text-sm before:content-['$_'] line-through">999</p>
        </div>
        <StarRatings
          rating={rating}
          starDimension="1rem"
          starSpacing="0px"
          starRatedColor="#D10024"
          numberOfStars={5}
        />
      </div>
    </div>
  )
}

export default SimpleCard;