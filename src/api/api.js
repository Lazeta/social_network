import axios from "axios";

const Instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": '772fe908-10fe-45a5-97e7-06d1186f95e4'}
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => Instance.get(`users?page=${currentPage}&count=${pageSize}`),
    postUser: (userId) => Instance.post(`follow/${userId}`),
    deleteUser: (userId) => Instance.delete(`follow/${userId}`),
    getUserProfile: (userId) => Instance.get(`profile/${userId}`),
}

export const authAPI = {
    me: () => Instance.get(`auth/me`),
    login:(email, password, rememberMe = false) => Instance.post(`auth/login`, { email, password, rememberMe }),
    logout:() => Instance.delete(`auth/login`),
}

export const profileAPI = {
    getProfile: (userId) => Instance.get(`profile/${userId}`),
    getStatus: (userId) => Instance.get(`profile/status/${userId}`),
    updateStatus: (status) => Instance.put(`profile/status`, {status: status})
}