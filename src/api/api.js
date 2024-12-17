import axios from "axios"

const Instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": '772fe908-10fe-45a5-97e7-06d1186f95e4'}
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => 
        Instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    postUser: (userId) => Instance.post(`follow/${userId}`).then(response => response.data),
    deleteUser: (userId) => Instance.delete(`follow/${userId}`).then(response => response.data),
    getUserProfile: (userId) => {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const authAPI = {
    getAuthUserData: () => Instance.get(`auth/me`).then(response => response.data),
}

export const profileAPI = {
    getProfile: (userId) => Instance.get(`profile/${userId}`),
    getStatus: (userId) => Instance.get(`profile/status/${userId}`),
    updateStatus: (status) => Instance.put(`profile/status`, {status: status})
}