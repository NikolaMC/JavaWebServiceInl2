import React from "react";

const Favorite = ({ favorite }) => {
    return (
        <div>
            <h3>{favorite.name}</h3>
            <p>{favorite.description}</p>
            <p>{favorite.price}</p>
        </div>
    )
}

export default Favorite;