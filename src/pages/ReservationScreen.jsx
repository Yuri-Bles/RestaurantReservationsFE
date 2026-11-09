import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import TableList from "../components/ShortTableList.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TableService from "../services/TableService.jsx";
import "../styles/page.css";

export default function ReservationScreen() {
    const [tables, setTables] = useState();
    const [selectedTable, setSelectedTable] = useState(null);

    useEffect(() => 
    {
        TableService.getActiveTables()
            .then((data) => 
            {
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
            <h1 className="title">Reservation Screen</h1>
            <div>
                <TableList tables={tables}
                    selectedTable={selectedTable}
                    onSelect={setSelectedTable} 
                />
            </div>
        </div>
    </>
  )
}
