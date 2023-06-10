import axiosInstance from ".";

export const newProduct = async(name, price, quantity, image,category) => {
    return await axiosInstance.post("/product", {name, quantity , price, image , category} )
} 

export const getProducts = async() => {
    return await axiosInstance.get("/products" )
} 

