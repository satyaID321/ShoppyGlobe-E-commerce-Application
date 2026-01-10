import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-xl p-4 mb-4 bg-white shadow-sm flex flex-col sm:flex-row sm:items-center
      sm:justify-between gap-4 ">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <img src={item.thumbnail} className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
        alt={item.title} loading="lazy"
        />
        <div>
          <h3 className="font-semibold text-lg line-clamp-1"> {item.title} </h3>
          <p className="text-gray-600 font-medium"> ₹ {item.price} </p>
        </div>
      </div>

      {/* decrease button */}
      <div className="flex items-center gap-3 justify-start sm:justify-center">
        <button className=" w-9 h-9 flex items-center justify-center bg-gray-200 rounded-lg font-bold hover:bg-gray-300"
        onClick={() => dispatch(decreaseQty(item.id))}> − </button>

        <span className="font-semibold text-lg min-w-[24px] text-center">{item.quantity} </span>
        {/* increase button */}
        <button className=" w-9 h-9 flex items-center justify-center bg-gray-200 rounded-lg font-bold hover:bg-gray-300 "
        onClick={() => dispatch(increaseQty(item.id))}> + </button>
      </div>

      {/* Remove button */}
      <div className="text-left sm:text-right">
        <button className=" text-red-600  font-semibold hover:underline "
          onClick={() => dispatch(removeFromCart(item.id))} > Remove </button>
      </div>
    </div>
  );
}

export default CartItem;
