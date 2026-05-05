import axios from "axios";
import { tokenStore } from "./tokenStore";


const baseUrl = import.meta.env.VITE_API_URL || "https://api.freeapi.app/api/v1";

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = tokenStore.getAccess();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

