import { useEffect, useState } from "react";
import TableList from "../components/TableList.jsx";
import TableService from "../services/TableService.jsx";

export default function TableOverview() {
    const [tables, setTables] = useState([]);

    useEffect(() => 
    {
        TableService.getTables()
            .then((data) => 
            {
                console.log(data);
                setTables(data.body);
            })
            .catch((error) => 
            {
                console.error("Failed to get tables:", error);
            });
    }, []);

    return (
    <>
    <h1>Table Overview Page</h1>
    <div>
        <TableList tables={tables} />
    </div>
    </>
  )
}
