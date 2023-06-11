import axiosInstance from ".";

export const newProduct = async(name, price, quantity, image,category) => {
    return await axiosInstance.post("/product", {name, quantity , price, image , category},
    { headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
    }
   })}  

export const getProducts = async() => {
    return await axiosInstance.get("/products" ,{
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
       })
    } 


