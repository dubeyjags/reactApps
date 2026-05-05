import { api } from "./api";
import { tokenStore } from "./tokenStore";

export const register = async (username, email, password) => {
    try {
        const response = await api.post("/users/register", {username, email, password });
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await api.post("/users/login", { email, password });
        const data = response.data;
        tokenStore.set(data.data.accessToken, data.data.refreshToken, data.data.user);
        return data;
    } catch (error) {
        throw error;
    }
};

export const me = async () => {
    try {
        const response = await api.get("/users/current-user");
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await api.post("/users/logout");
        const data = response.data;
        tokenStore.clear();
        return data;
    } catch (error) {
        throw error;
    }
};