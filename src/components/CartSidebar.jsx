import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  incrementQuantity, 
  decrementQuantity, 
  removeFromCart,
  toggleCart  // ✅ Make sure this is exported from your slice!
} from '../store/slice/cartSlice';

const CartSidebar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate subtotal safely
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;     // ✅ Safe parsing
    const quantity = Number(item.quantity) || 0;
    return sum + (price * quantity);
  }, 0);

  return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-4 overflow-y-auto z-[1000]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button className="text-xl" onClick={() => dispatch(toggleCart())}>✕</button>
      </div>

      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
          <div className="flex-1 ml-4">
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-sm text-gray-500">
              ${parseFloat(item.price).toFixed(2)} each
            </p>
            <div className="flex items-center mt-2">
              <button 
                onClick={() => dispatch(decrementQuantity(item.id))} 
                className="px-2 border rounded-l hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-2 border-t border-b">{item.quantity}</span>
              <button 
                onClick={() => dispatch(incrementQuantity(item.id))} 
                className="px-2 border rounded-r hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">
              ${(parseFloat(item.price) * Number(item.quantity)).toFixed(2)}
            </p>
            <button 
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 hover:text-red-700 text-sm mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="space-y-2">
          <button className="w-full border border-black py-2 hover:bg-gray-50">
            VIEW CART
          </button>
          <button className="w-full bg-black text-white py-2 hover:bg-gray-800">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
