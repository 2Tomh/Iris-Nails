import axiosInstance from "."

export const appointment = async (date, hour, treatments) => {
    await axiosInstance.post("appointment", { date, hour, treatments })
}

export const getAvailableHour = async (date) => {
    return await axiosInstance.get("appointment", { params: { date } })
}

export const appointments = async () =>{
    return await axiosInstance.get("appointments")
}