import axios, { HttpStatusCode } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const GET_EXISTING_TABLES_URL = `${BASE_URL}/tables/existing`;
const POST_TABLE_URL = `${BASE_URL}/tables`;
const PUT_TABLE_URL = `${BASE_URL}/tables`;
const DELETE_TABLE_URL = `${BASE_URL}/tables`;

const TableRequest = {
    getTables: () =>
        axios
            .get(GET_EXISTING_TABLES_URL)
            .then((response) => response.data),

    async createTable(table) {
        const response = await axios.post(POST_TABLE_URL, table);
        return response;
    },

    async updateTable(table) {
        const response = await axios.put(PUT_TABLE_URL, table);
        return response;
    },

    async deleteTable(table) {
        const response = await axios.delete(DELETE_TABLE_URL, {
            data: table
        });

        return response;
    }
};

export default TableRequest;
