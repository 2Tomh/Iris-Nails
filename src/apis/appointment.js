import axiosInstance from "."

export const appointment = async (date, hour, treatments) => {
   return await axiosInstance.post("appointment", { date, hour, treatments }, {
    headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
    }
   })
}

export const getAvailableHour = async (date) => {
    return await axiosInstance.get("appointment", { params: { date }, headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
    } })
}

export const getAppointments = async () =>{
    return await axiosInstance.get("appointments", {
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
}