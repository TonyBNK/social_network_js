import axios from "axios";

const axiosInst = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c71ad832-d3a7-49e4-81f5-4b21198b07fd'
    }
});

export const usersAPI = {
    getUsers: async (currentPage = 1, pageSize = 10) => {
        try {
            const response = await axiosInst.get(`users?page=${currentPage}&count=${pageSize}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
};

export const followAPI = {
    followUser: async (userId) => {
        try {
            const response = await axiosInst.post(`follow/${userId}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    unfollowUser: async (userId) => {
        try {
            const response = await axiosInst.delete(`follow/${userId}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
};

export const profileAPI = {
    getUserProfile: async (userId) => {
        try {
            const response = await axiosInst.get(`profile/${userId}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    getUserStatus: async (userId) => {
        try {
            const response = await axiosInst.get(`profile/status/${userId}`)
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    updateMyStatus: async (newStatus) => {
        try {
            return await axiosInst.put(`profile/status`, {status: newStatus});
        } catch (e) {
            console.log(e);
        }
    },
    updateMyPhoto: async (file) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            return await axiosInst.put(`profile/photo`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });
        } catch (e) {
            console.log(e);
        }
    },
}

export const authAPI = {
    me: async () => {
        try {
            const response = await axiosInst.get(`auth/me`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    logIn: async (formData) => {
        try {
            const response = await axiosInst.post(`/auth/login`, {
                email: formData.login,
                password: formData.password,
                rememberMe: formData.rememberMe
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    logOut: async () => {
        try {
            const response = await axiosInst.delete(`/auth/login`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}