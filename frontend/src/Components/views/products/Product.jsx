import React from "react";

const Product = ({ product, addFavorite }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addFavorite(product)}>Add favorite</button>
        </div>
    )
}

export default Product;