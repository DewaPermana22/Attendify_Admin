import axiosInstance from "../Utils/axiosInstance"


interface emailType {
    email: string,
    companyName : string
    type?: string
}
export const sendOTP = async ({email, companyName} : emailType) => {
    try {
        const response = await axiosInstance.post("/otp",{email, companyName, type : "send"});
        return response.data
    } catch (error : any) {
        throw error.response?.data || error.message
    }
}


export const verifyOTP = async (email : string, otp : string) =>  {
    try {
        const response = await axiosInstance.post("/otp",{email, otp, type : "verify"})
        return response.data
    } catch (error : any) {
        throw error.response?.data || error.message
    }
}