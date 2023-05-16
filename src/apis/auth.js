import axiosInstance from "."

export const signup = async (username, password, mail, address, phoneNumber) => {
    await axiosInstance.post("signup", {username , address, phoneNumber, mail, password});
}


export const login = async(username , password) =>{
   return  await axiosInstance.post("login", {username , password})
}

export const verification= async(username) =>{
     await axiosInstance.post("verification" , {username})
}



