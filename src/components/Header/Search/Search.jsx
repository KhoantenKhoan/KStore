import "./Search.scss";
import {MdClose} from "react-icons/md"
import  prod from "../../../assets/products/earbuds-prod-1.webp"
const Search = ({setsearch}) => {
    return <div className="search-modal">
        <div className="form-field">
            <input type="text" autoFocus placeholder="Search for products" />
            <span className="close-btn"><MdClose onClick={() =>{setsearch(false)}}/></span>
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">Name</span>
                        <span className="desc">Description</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
