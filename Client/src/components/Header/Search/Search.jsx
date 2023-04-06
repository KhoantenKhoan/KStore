import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {MdClose} from "react-icons/md"
import  prod from "../../../assets/products/earbuds-prod-1.webp"
import useFectch from "../../../hooks/useFectch"
const Search = ({setsearch}) => {
    const [ query, setQuery] = useState("")
    const navigate = useNavigate()
    const onChange = (e) => {
        setQuery(e.target.value);
    }
    let {data} = useFectch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    if (!query.length) {
        data = null;
    }
    
    return <div className="search-modal">
        <div className="form-field">
            <input type="text" autoFocus placeholder="Search for products" value={query} onChange={onChange} />
            <span className="close-btn"><MdClose onClick={() =>{setsearch(false)}}/></span>
        </div>
        <div className="search-result-content">
            <div className="search-results">
                {data?.data?.map(item =>(
                    <div className="search-result-item" key={item.id}
                    onClick={() => {
                        navigate("/product/" + item.id);
                        setsearch(false)
                    }}
                   >
                        <div className="img-container">
                            <img src={process.env
                                            .REACT_APP_DEV_URL +
                                        item.attributes.img.data[0].attributes
                                            .url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <span className="desc">{item.attributes.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>;
};

export default Search;
