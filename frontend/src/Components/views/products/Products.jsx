import React, { useEffect, useState, useContext } from "react";
import { ApplicationContext } from "../../providers/AuthProvider";
import CreateProductForm from "./CreateProductForm";
import Favorite from "./Favorite";
import Product from "./Product";

const Products = () => {

    const { globalUserToken, setGlobalUserToken, setAuthenticated } = useContext(ApplicationContext);

    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");
    const [favorites, setFavorites] = useState([]);

    const [createProductData, setCreateProductData] = useState({
        name: "",
        description: "",
        price: 0
    });

    const handleChangeInput = (e) => {
        setCreateProductData({ ...createProductData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        getProducts();
        getFavorites();
    }, []);

    const getProducts = async () => {
        const res = await fetch("/product/all", {
            method: "GET",
            headers: {
                token: globalUserToken
            }
        });
        const data = await res.json();
        setProducts(data);
    }

    const createProduct = async (e) => {
        e.preventDefault();
        const res = await fetch("/product/create", {
            method: "PUT",
            body: JSON.stringify(createProductData),
            headers: {
                "Content-Type": "application/json",
                token: globalUserToken
            }
        });
        const data = await res.text();
        setMessage(data);
        getProducts();
    }

    const getFavorites = async () => {
        const res = await fetch("/product/favorites", {
            method: "GET",
            headers: {
                token: globalUserToken
            }
        });
        const data = await res.json();
        setFavorites(data);
    }

    const addFavorite = async (product) => {
        const name = product.name;
        await fetch("/product/add-favorite", {
            method: "PUT",
            body: name,
            headers: {
                token: globalUserToken
            }
        });
        getFavorites();
    }

    const logoutUser = async () => {
        await fetch("/user/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": globalUserToken
            }
        });
        setGlobalUserToken("");
        setAuthenticated(false);
        console.log("Logged out");
    }

    return (
        <div>
            <button onClick={logoutUser}>Logout</button>
            <p>{message}</p>
            <h2>Products</h2>
            <CreateProductForm createProduct={createProduct} handleChangeInput={handleChangeInput} />
            <div>
                {
                    products.map((product, i) => (
                        <Product key={i} product={product} addFavorite={addFavorite} />
                    ))
                }
            </div>
            <hr/>
            <h2>Favorites</h2>
            <div>
                {
                    favorites.map((favorite, i) => (
                        <Favorite key={i} favorite={favorite} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;