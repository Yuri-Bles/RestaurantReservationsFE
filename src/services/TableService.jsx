import axios, { HttpStatusCode } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const GET_EXISTING_TABLES_URL = `${BASE_URL}/apiv1/tables/existing`;
const POST_TABLE_URL = `${BASE_URL}/apiv1/tables`;

const TableRequest = {
    getTables: () =>
        axios
            .get(GET_EXISTING_TABLES_URL)
            .then((response) => response.data),

    async createTable(table) {
        const response = await axios.post(POST_TABLE_URL, table);
        return response;
    }
};

export default TableRequest;
