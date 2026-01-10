import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <h2 className="text-center mt-20 text-2xl font-semibold"> Your cart is empty </h2>
    );
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left"> Checkout </h2>

      {/* Order placed message */}
      {orderPlaced && (
        <p className="text-green-600 font-semibold mb-6 text-center sm:text-left">✅ Order placed successfully! </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User details */}
        <form onSubmit={handlePlaceOrder} className="border rounded-xl p-6 bg-white shadow-sm" >
          <h3 className="text-xl font-semibold mb-4"> User Details </h3>

          <input type="text" placeholder="Full Name" required
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400" />

          <input type="email" placeholder="Email" required
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>

          <input type="text" placeholder="Address" required
            className="w-full border rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button type="submit" className="w-full bg-cyan-500 text-white py-3 rounded-xl font-semibold
           hover:bg-cyan-600 transition"> Confirm Order </button>
        </form>

        {/* cart summary */}
        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-4"> Order Summary </h3>

          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-700" >
                <span className="line-clamp-1"> {item.title} × {item.quantity} </span>
                <span className="font-medium"> ₹ {item.price * item.quantity} </span>
              </div>
            ))}
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;


