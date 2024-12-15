import axios from "axios"

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": '772fe908-10fe-45a5-97e7-06d1186f95e4'}
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => 
        axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    postUser: (userId) => axiosInstance.post(`follow/${userId}`),
    deleteUser: (userId) => axiosInstance.delete(`follow/${userId}`),
    getUserProfile: (userId) => axiosInstance.get(`profile/${userId}`),
}

export const authAPI = {
    getAuthUserData: () => axiosInstance.get(`auth/me`),
}