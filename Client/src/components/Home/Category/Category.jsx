import "./Category.scss";
import React from 'react';
import cart1 from "../../../assets/category/cat-1.jpg"

export default function Category({categories}) {

  return (
    
    <div className="shop-by-category">
      <div className="categories">
        {
          
          categories?.data?.map((item) => {
            return (
              <div key={item.id} className="category">
                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.map((img)=>{return img.attributes?.url})} alt=""/>
              </div> 
            )
          })
        }
      </div>
    </div>
  )
}


