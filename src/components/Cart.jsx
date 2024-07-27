import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/reduxToolkit/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mt-4">
      <h3 className="font-bold text-2xl uppercase">Cart</h3>
      <div className="w-6/12 m-auto">
        <button className="bg-red-700 font-semibold p-2 m-2 rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <p>Cart is empty. Add items to your cart!</p>}
        <ItemList categoryItems={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
