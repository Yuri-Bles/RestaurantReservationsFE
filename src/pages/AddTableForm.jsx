import { useEffect, useState } from "react";
import TableList from "../components/TableList.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TableService from "../services/TableService.jsx";
import "../styles/page.css";
import Textbox from "../components/Textbox.jsx";

export default function AddTableForm() {
    const [tables, setTables] = useState([]);
    const [tableNumber, setTableNumber] = useState("");

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
            <h1 className="title">Add Table Form</h1>
            <Textbox 
                value={tableNumber} 
                onChange={(event) => setTableNumber(event.target.value)} 
                placeholder="Table number" 
            />
        </div>
    </>
  )
}
