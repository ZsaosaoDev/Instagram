import axiosClient from "./axiosClient";
import {toast} from 'react-hot-toast'
const authApi = {
    login: (data) => axiosClient.post("/auth/login", data),
    register: (formData) => axiosClient.post("/participant", formData, {
        headers: {
            "Content-Type": "multipart/form-data",  // Important upload file
        }
    }),
    logout: () => {
        axiosClient.post("/auth/logout")
        toast.success("Logger out successfully !")
    },
};

export default authApi;