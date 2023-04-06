import { useNavigate } from "react-router-dom";
import "./Category.scss";
import React from 'react';

export default function Category({categories}) {
  const navigate = useNavigate();
  return (
    
    <div className="shop-by-category">
      <div className="categories">
        {
          categories?.data?.map((item) => {
            return (
              <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.map((img)=>{return img.attributes?.url})} alt=""/>
              </div> 
            )
          })
        }
      </div>
    </div>
  )
}


