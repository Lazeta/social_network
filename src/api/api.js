import axios from "axios";

const Instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": '23f2013b-9abb-44e0-a221-fe7f1ce6461f'}
})

export const usersAPI = {
    getUsers: async (currentPage = 1, pageSize = 10) => {
        try {
            const response = await Instance.get(`users?page=${currentPage}&count=${pageSize}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error; // Позволяет обработать ошибку в месте вызова
        }
    },
    postUser: (userId) => Instance.post(`follow/${userId}`),
    deleteUser: (userId) => Instance.delete(`follow/${userId}`),
}

export const authAPI = {
    me: () => Instance.get(`auth/me`),
    login:(email, password, rememberMe = false) => Instance.post(`auth/login`, { email, password, rememberMe }),
    logout:() => Instance.delete(`auth/login`),
}

export const profileAPI = {
    getProfile: async (userId) => {
        try {
            const response = await Instance.get(`profile/${userId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching profile:", error);
            throw error;
        }
    },
    getStatus: async (userId) => {
        try {
            const response = await Instance.get(`profile/status/${userId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching status:", error);
            throw error;
        }
    },
    updateStatus: async (status) => {
        try {
            const response = await Instance.put(`profile/status`, {status})
            return response.data
        } catch (error) {
            console.error("Error updating status:", error)
        }
    },
}