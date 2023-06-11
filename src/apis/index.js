import axios from 'axios';

const axiosInstance = axios.create({
   baseURL:"https://nails-backend.onrender.com"
    //   baseURL:"http://localhost:3001/",

});

export default axiosInstance;