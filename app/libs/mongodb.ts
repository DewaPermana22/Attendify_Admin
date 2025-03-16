import mongoose from "mongoose";

const uri = process.env.MONGO_DB_URI;
if (!uri) {
    throw new Error("MONGO_DB_URI is not defined");
}

interface MongooseCache {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
}

declare global {
    var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = globalThis.mongoose || { conn: null, promise: null };
globalThis.mongoose = cached;

export async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(`${uri}?tls=true&tlsAllowInvalidCertificates=true`, {
            socketTimeoutMS: 300000, // Timeout socket 5 menit
            connectTimeoutMS: 5000,  // Timeout koneksi dalam 5 detik
            tls: true,
            tlsAllowInvalidCertificates: true, // Jika ada error SSL // Timeout jika tidak bisa connect dalam 5 detik
        }).then((mongoose) => {
            console.log("✅ Connected to MongoDB");
            return mongoose.connection;
        }).catch((err) => {
            console.error("❌ MongoDB connection error:", err);
            process.exit(1); // Hentikan proses jika koneksi gagal
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
