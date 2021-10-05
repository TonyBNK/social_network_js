import axios from "axios";

const axiosInst = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c71ad832-d3a7-49e4-81f5-4b21198b07fd'
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return axiosInst
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser: (userId) => {
        return axiosInst
            .post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser: (userId) => {
        return axiosInst
            .delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getUsersProfile: (userId) => {
        return axiosInst
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    getUsersStatus: (userId) => {
        return axiosInst
            .get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus: (newStatus) => {
        return axiosInst
            .put(`profile/status`, {status: newStatus});
    },
}

export const authAPI = {
    me: () => {
        return axiosInst
            .get(`auth/me`)
            .then(response => response.data);
    },
    logUserIn: (formData) => {
        return axiosInst
            .post(`/auth/login`, {
                email: formData.login,
                password: formData.password,
                rememberMe: formData.rememberMe
            })
            .then(response => response.data);
    },
    logUserOut: () => {
        return axiosInst
            .delete(`/auth/login`)
            .then(response => response.data);
    }
}