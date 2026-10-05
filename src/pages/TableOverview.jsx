import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import TableList from "../components/TableList.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TableService from "../services/TableService.jsx";
import "../styles/page.css";

export default function TableOverview() {
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);

    useEffect(() => 
    {
        TableService.getTables()
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
            <h1 className="title">Table Overview Page</h1>
            <Link to={"/TableOverview/Add"}>
                <PrimaryButton>
                    Add
                </PrimaryButton>
            </Link>
            {selectedTable ? (
                <Link to={`/TableOverview/Update/${selectedTable.tableNumber}`}
                    state={{ table: selectedTable }}
                >
                    <PrimaryButton>
                        Update
                    </PrimaryButton>
                </Link>
            ) : (
                <PrimaryButton disabled>
                    Update
                </PrimaryButton>
            )}
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
