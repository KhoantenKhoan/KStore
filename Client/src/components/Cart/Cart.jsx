import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import "./Cart.scss";
const Cart = ({setshowCart}) => {
    return <div className="cart-panel">
        <div className="cart-layer"></div>
        <div className="cart-content">
            <div className="cart-heading">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setshowCart(false)}>
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>
            {/* <div className="empty-cart">
                <BsCartX/>
                <span>No product in the cart</span>
                <button className="return-cta">RERUTN TO SHOP</button>
            </div> */}
            <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal</span>
                        <span className="text total">&#8377;1234</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
            </>
        </div>
    </div>;
};

export default Cart;