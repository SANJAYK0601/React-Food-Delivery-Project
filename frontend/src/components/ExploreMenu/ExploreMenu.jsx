import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const handleCategoryClick = (menuName) => {
    setCategory((prev) => (prev === menuName ? "All" : menuName));
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => (
          <div
            key={item.menu_name}
            className="explore-menu-list-item"
            onClick={() => handleCategoryClick(item.menu_name)}
            onKeyDown={(e) => e.key === 'Enter' && handleCategoryClick(item.menu_name)}
            role="button"
            tabIndex={0}
          >
            <img
              className={`menu-image ${category === item.menu_name ? 'active' : ''}`}
              src={item.menu_image}
              alt={`Category: ${item.menu_name}`}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
