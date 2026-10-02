import { useEffect, useState } from "react";
import TableList from "../components/TableList.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Textbox from "../components/Textbox.jsx";
import NumericUpDown from "../components/NumericUpDown.jsx";
import TableService from "../services/TableService.jsx";
import "../styles/page.css";

export default function AddTableForm() {
    const [tableNumber, setTableNumber] = useState("");
    const [tableCapacity, setTableCapacity] = useState(1);
    const [tableStatus, setTableStatus] = useState("");

    return (
    <>
        <div className="page">
            <h1 className="title">Add Table Form</h1>
            <div>
                <Textbox 
                    value={tableNumber} 
                    onChange={(event) => setTableNumber(event.target.value)} 
                    placeholder="Table number" 
                />
            </div>
            <div>
                <NumericUpDown 
                    value={tableCapacity} 
                    onChange={(event) => {
                        const value = event.target.value;

                        if (value === "" || Number.isInteger(Number(value))) {
                            setTableCapacity(value);
                        }
                    }}
                    placeholder="capacity"
                    min={1} 
                    max={20} />
            </div>
            <div>
                <Textbox 
                    value={tableStatus} 
                    onChange={(event) => setTableStatus(event.target.value)} 
                    placeholder="Table number" 
                />
            </div>
        </div>
    </>
  )
}
