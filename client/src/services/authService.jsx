
import axiosClient from "../utils/AxiosClient";

const authService = {
    login: (data) => axiosClient.post("public/login", data),
    signup: (data) => axiosClient.post("public/signup", data),
};

export default authService;
