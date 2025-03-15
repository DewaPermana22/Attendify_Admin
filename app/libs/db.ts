import Redis from "ioredis";

const redis = new Redis();

export const saveOTP = async (email : string, otp : string) => {
    await redis.set(`otp:${email}`,otp,"EX", 900);
};

export const verifiyOTP = async (email : string, otp : string) =>  {
    const storedOTP = await redis.get(`otp:${email}`)
    if (storedOTP !== otp) {
        throw new Error("Invalid OTP code");
    }

    await redis.del(`otp:${email}`);
    return true
}