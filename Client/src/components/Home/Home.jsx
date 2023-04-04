import { useContext, useEffect} from "react";


import "./Home.scss";

import { fetchDataFromAPI } from "../../utils/api";
import { context } from "../../utils/context";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";


const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext(context);
    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const getCategories = () =>{
        fetchDataFromAPI("/api/categories?populate=*")
        .then(res =>{
            console.log(res);
            setCategories(res);
        });
    }
    const getProducts = () =>{
        fetchDataFromAPI("/api/products?populate=*")
        .then(res =>{
            console.log(res);
            setProducts(res);
        });
    }
    return <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} headingText="Related Products" />
            </div>
        </div>
    </div>;
};

export default Home;
