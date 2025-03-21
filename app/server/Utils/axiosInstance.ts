import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 10000, // 10 seconds
    headers: {
        "Content-Type": "application/json",
    },
});


export default axiosInstance;