import axiosInstance from "."



export const newPurchase = async (quantity, productId) => {
    return  await axiosInstance.post("purchase", {quantity, productId }, {
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
       });;
}
export const getPurchases =  async() => {
    return await axiosInstance.get("purchases", {
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
       });
}