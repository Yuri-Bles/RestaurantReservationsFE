import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const TABLES_URL = `${BASE_URL}/apiv1/tables`;

const TableRequest = {
    getTables: () =>
        axios
            .get(TABLES_URL)
            .then((response) => response.data),
};

export default TableRequest;
