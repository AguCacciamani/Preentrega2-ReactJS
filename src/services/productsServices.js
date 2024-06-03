import axios from "axios";

export const getAllProducts = () => {
    return axios.get('https://dummyjson.com/products/category/sports-accessories');
};

export const deleteProductById = (id) => {
    return axios.delete(`https://dummyjson.com/products/${id}`);
};