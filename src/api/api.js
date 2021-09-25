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
    getUsersAuth: () => {
        return axiosInst
            .get(`auth/me`,)
            .then(response => response.data);
    },
    logUserIn: (email, password, rememberMe) => {
        const loginIsOk = email === 'borisenk-anton@yandex.ru'
            && password === 'Qwerty123';

        if (loginIsOk) {
            return axiosInst
                .post(`/auth/login`, {
                    email: email,
                    password: password,
                    rememberMe: rememberMe
                });
        }
    },
    logUserOut: () => {
        return axiosInst
            .delete(`/auth/login`);
    }
}