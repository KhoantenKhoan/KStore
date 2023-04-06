import "./Products.scss";
import Product from "./Product/Product"

const Products = ({products, innerPage, headingText}) => {
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            {products?.data?.map(product =>{
                return(
                    <Product key={product.id} id={product.id} data={product.attributes} />
                )
            })}
            
        </div>

    </div>;
};

export default Products;
