import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <h2 className="text-center mt-10 text-2xl"> Cart is empty </h2>
    );
  }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3 className="text-2xl font-bold mt-6"> Total: ₹ {total} </h3>
      <Link to="/checkout" className="inline-block mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
        Place Order
      </Link>
    </div>
  );
}

export default Cart;
