import axiosInstance from "."

export const getPurchases = () => {
    return axiosInstance.get("/purchases");
}

export const newPurchase = (quantity, productId) => {
    return axiosInstance.post("/purchase", {quantity, productId});;
}