import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const FavoritesCard = ({phone}) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};

    return (
        <div>
                  <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4  bg-white bg-clip-border border-2 border-sky-400 rounded-lg text-gray-700">
          <img src={image} className="h-80 py-4 w-full object-fill " />
          <p className="block text-center bg-sky-400 font-sans text-base font-medium leading-relaxed text-white antialiased">
              {brand_name}
            </p>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
         {rating}
          </p>
        </div>
        <div className="p-6 pt-0">
        <Link to={`/phoneDetails/${id}`}>
        <button
            className="block w-full text-white select-none rounded-lg bg-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Buy Now
          </button>
        </Link>
        
        </div>
      </div>
        </div>
    );
};

FavoritesCard.propTypes = {
    phone:PropTypes.object.isRequired
}
export default FavoritesCard;