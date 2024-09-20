import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASEURL || `https://${process.env.NXET_VERCEL_URL}/api`;

const apiClient = axios.create({
    // baseURL: "http://localhost:3001/api",
    baseURL: baseURL,
    // baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
    // baseURL: '/api',
    // baseURL: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    // baseURL: process.env.NODE_ENV === 'development'
    //     ? 'http://localhost:3001/api'
    //     : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});
export default apiClient;