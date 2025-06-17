import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredList =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display" id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list' id='food-display-list'>
      {filteredList.map((item) => (
       (category === "All" || category === item.category) && (
       <FoodItem key={item._id} {...item} />
     )
    ))}

      </div>
    </div>
  );
};

export default FoodDisplay;




