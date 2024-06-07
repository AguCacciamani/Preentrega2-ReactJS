import axios from "axios";

export const getMensShirts = () => {
    return axios.get('https://dummyjson.com/products/category/mens-shirts');
};

export const getMensShoes = () => {
    return axios.get('https://dummyjson.com/products/category/mens-shoes');
};

export const getSportAccessories = () => {
    return axios.get('https://dummyjson.com/products/category/sports-accessories');
};

export const getWomensDresses = () => {
    return axios.get('https://dummyjson.com/products/category/womens-dresses');
};

export const getWomensShoes = () => {
    return axios.get('https://dummyjson.com/products/category/womens-shoes');
};

export const getProductById = (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`);
};

export async function getProductsByCategory (category) {
    return axios.get(`https://dummyjson.com/products/category/${category}`)
}

