import axios, { HttpStatusCode } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const TABLE_URL = `${BASE_URL}/tables`;

const TableRequest = {
    async getTables() {
        const response = await axios.get(TABLE_URL);
        const responseData = response.data;
        return responseData;
    },

    async createTable(table) {
        const response = await axios.post(TABLE_URL, table);
        return response;
    },

    async updateTable(table) {
        const response = await axios.put(TABLE_URL, table);
        return response;
    },

    async deleteTable(table) {
        const response = await axios.delete(TABLE_URL, {
            data: table
        });

        return response;
    }
};

export default TableRequest;
