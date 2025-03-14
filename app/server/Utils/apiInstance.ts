import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

const InstanceAPI =  async<T>(
    method : "GET" | "POST" | "PUT" | "DELETE",
    url : string,
    data? : any,
    config? : AxiosRequestConfig
): Promise<T> => {
	try {
        const res = await axiosInstance({method, url, data, ...config});
        return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default InstanceAPI