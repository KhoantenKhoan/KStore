import {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import {context} from "../../utils/context";

import "./Header.scss";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setshowCart] = useState(false);
    const [search, setsearch] = useState(false);
    const {cartCount} = useContext(context)
    const handleScroll = ( ) =>{
        const offset = window.scrollY
        if(offset > 200){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll",handleScroll)
    },[])

    return (
    <>
        <header className={`main-header ${scrolled ? `sticky-header`:``}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">KSTORE.</div>
                <div className="right">
                    <TbSearch onClick={() => setsearch(true)}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={() => setshowCart(true)}>
                        
                        <CgShoppingCart/>
                            <span>{cartCount}</span>
                    </span>
                </div>
            </div>
        </header>
        {showCart &&< Cart setshowCart={setshowCart}/>}
        {search &&< Search setsearch={setsearch}/>}
    </>
    )
};

export default Header;
