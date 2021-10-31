import React from "react";

const createProductForm = ({createProduct, handleChangeInput}) => {
    return (
        <form onSubmit={createProduct}>
            <input type="text" name="name" placeholder="Product name" onChange={handleChangeInput} />
            <input type="text" name="description" placeholder="Product description" onChange={handleChangeInput} />
            <input type="number" name="price" placeholder="Price" onChange={handleChangeInput} />
            <button type="submit">Create product</button>
        </form>
    )
}

export default createProductForm;