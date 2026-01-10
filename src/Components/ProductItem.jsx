import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
      <Link to={`/product/${product.id}`} className="flex-1">
        <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden place-items-center">
          {/* images */}
          <img src={product.thumbnail} alt={product.title} loading="lazy" className="w-50 h-60 object-cover"/>
        </div>

        {/* title */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{product.title} </h3>
          <p className="text-sm text-gray-600 mb-2"> {product.description} </p>
          <p className="font-bold text-gray-800"> Price: ${product.price}</p>
        </div>
      </Link>

      {/* add to Cart button */}
      <div className="p-4 pt-0">
        <button onClick={() => dispatch(addToCart(product))} className="w-full bg-cyan-400 text-white py-2
            rounded-xl font-medium hover:bg-cyan-500 transition"> Add to Cart </button>
      </div>
    </div>
  );
}

export default ProductItem;
