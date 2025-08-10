import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      const price = parseFloat(item.cost.substring(1));
      total += price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h1>Total Cart Amount: ${calculateTotalAmount()}</h1>
      <div>
        {cart.map(item => (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <div>${item.cost.substring(1)}</div>
            <div className="cart-item-quantity">
              <button onClick={() => handleDecrement(item)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>
                +
              </button>
            </div>
            <div><strong>Total:</strong> ${calculateTotalCost(item)}</div>
            <button onClick={() => handleRemove(item)}>
              Delete
            </button>
            <hr />
          </div>
        ))}
      </div>
      <div className="continue_shopping_btn">
        <button onClick={(e) => handleContinueShopping(e)}>
          Continue Shopping
        </button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;