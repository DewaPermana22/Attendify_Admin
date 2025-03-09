import axios from "axios";
import axiosInstance from "../Utils/axiosInstance";

export const FetchUser = async () => {
  try {
    const response = await axiosInstance.get("/users");
    if (response.data && response.data.json) {
      return response.data.json;
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch users");
    } else {
      throw new Error("Failed to fetch users");
    }
  }
};
