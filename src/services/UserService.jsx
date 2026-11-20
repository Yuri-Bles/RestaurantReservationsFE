import axios, { HttpStatusCode } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const USER_URL = `${BASE_URL}/users`;

const UserRequest = {
    // async getUsers() {
    //     const response = await axios.get(USER_URL);
    //     const responseData = response.data;
    //     return responseData;
    // },

    async createUser(user) {
        const response = await axios.post(USER_URL, user);
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
