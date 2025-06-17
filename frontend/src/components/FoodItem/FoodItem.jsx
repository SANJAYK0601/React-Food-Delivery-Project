import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ _id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>

      <div className="quantity-control">
        <button className="minus-btn" onClick={() => removeFromCart(_id)}>-</button>
        <span>{cartItems[_id] || 0}</span>
        <button className="plus-btn" onClick={() => addToCart(_id)}>+</button>
      </div>
    </div>
  );
};

export default FoodItem;


