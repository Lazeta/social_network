import axios from "axios"

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": '772fe908-10fe-45a5-97e7-06d1186f95e4'}
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    postUser: (id = null) => {
        return axiosInstance.post(`follow/` + id)
        .then(response => response.data)
    },
    deleteUser: (id = null) => {
        return axiosInstance.delete(`follow/` + id)
        .then(response => response.data)
    },
    getProfile: (userId = null) => {
        return axiosInstance.get(`profile/` + userId)
        .then(response => response.data)
    },
    getAuthUserData: () => {
        return axiosInstance.get(`auth/me`)
        .then(response => response.data)
    },
}