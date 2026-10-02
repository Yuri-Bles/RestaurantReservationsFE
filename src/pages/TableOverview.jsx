import { useEffect, useState } from "react";
import TableList from "../components/TableList.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TableService from "../services/TableService.jsx";
import "../styles/page.css";

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
        <div className="page">
            <h1 className="title">Table Overview Page</h1>
            <PrimaryButton onClick={() => console.log("Hit")}>
                Add
            </PrimaryButton>
            <div>
                <TableList tables={tables} />
            </div>
        </div>
    </>
  )
}
