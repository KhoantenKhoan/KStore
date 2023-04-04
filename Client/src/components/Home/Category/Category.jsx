
import "./Category.scss";
import React from 'react';
import cart1 from "../../../assets/category/cat-1.jpg"
import cart2 from "../../../assets/category/cat-2.jpg"
import cart3 from "../../../assets/category/cat-3.jpg"
import cart4 from "../../../assets/category/cat-4.jpg"

export default function Category() {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
            <img src={cart1} alt="" />
        </div>
        <div className="category">
            <img src={cart2} alt="" />
        </div>
        <div className="category">
            <img src={cart3} alt="" />
        </div>
        <div className="category">
            <img src={cart4} alt="" />
        </div>
      </div>
    </div>
  )
}


