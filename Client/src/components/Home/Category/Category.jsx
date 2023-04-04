import "./Category.scss";
import React from 'react';
import cart from '../../../assets/category/cat-1.jpg'

export default function Category({categories}) {
  
  return (
    <div className="shop-by-category">
      <div className="categories">
        <img src={`../../../assets/category/cat-1.jpg`} alt="Test" />
        {categories && Array.isArray(categories) && categories.map((category) => (
          <div key={category.id} className="category">

            <img src={`../../../assets/category/${category.attributes.img.data.attributes.formats.thumbnail.hash}.jpg`} alt={category.attributes.title} />
          </div> 
        ))}
      </div>
    </div>
  )
}
