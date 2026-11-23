import axios, { HttpStatusCode } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const CSRF_URL = `${BASE_URL}/csrf`;
const USER_URL = `${BASE_URL}/users`;
const CURRENT_USER_URL = `${USER_URL}/me`;
const LOGIN_URL = `${USER_URL}/login`;

const UserRequest = {

    async getCsrfToken() {
        await axios.get(CSRF_URL, {withCredentials: true});

        const csrfCookie = document.cookie
            .split("; ")
            .find(cookie => cookie.startsWith("XSRF-TOKEN="));

        if (!csrfCookie) {
            throw new Error("CSRF token cookie was not found.");
        }

        return decodeURIComponent(csrfCookie.split("=")[1]);
    },

    async getCurrentUser() {
        return await axios.get(CURRENT_USER_URL, {withCredentials: true});
    },

    // async getUsers() {
    //     const response = await axios.get(USER_URL);
    //     const responseData = response.data;
    //     return responseData;
    // },

    async createUser(user) {
        const response = await axios.post(USER_URL, user);
        return response;
    },

    async login(user) {
        const csrfToken = await this.getCsrfToken();
        const response = await axios.post(LOGIN_URL, user, {
            withCredentials: true,
            headers: {
                "X-XSRF-TOKEN": csrfToken
            }
        });
        return response;
    }//,

    // async updateUser(user) {
    //     const response = await axios.put(USER_URL, user);
    //     return response;
    // },

    // async deleteUser(user) {
    //     const response = await axios.delete(USER_URL, user);
    //     return response;
    // }
};

export default UserRequest;
