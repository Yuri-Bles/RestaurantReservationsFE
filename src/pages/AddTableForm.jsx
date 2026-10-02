import { useEffect, useState } from "react";
import TableList from "../components/TableList.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Textbox from "../components/Textbox.jsx";
import NumericUpDown from "../components/NumericUpDown.jsx";
import Dropdown from "../components/Dropdown.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import TableService from "../services/TableService.jsx";
import "../styles/page.css";

export default function AddTableForm() {
    const [tableNumber, setTableNumber] = useState("");
    const [tableNumberError, setTableNumberError] = useState("");
    const [tableCapacity, setTableCapacity] = useState(1);
    const [capacityError, setCapacityError] = useState("");
    const [tableStatus, setTableStatus] = useState("");
    const [statusError, setStatusError] = useState("");

    return (
    <>
        <div className="page">
            <h1 className="title">Add Table Form</h1>
            <div>
                <h4 className="subtitle">Table Number</h4>
            </div>
            <div>
                <Textbox 
                    value={tableNumber} 
                    onChange={(event) => setTableNumber(event.target.value)} 
                    placeholder="Table number" 
                />
            </div>
            <div>
                <ErrorMessage message={tableNumberError} />
            </div>
            <div>
                <h4 className="subtitle">Capacity</h4>
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
                <ErrorMessage message={capacityError} />
            </div>
            <div>
                <h4 className="subtitle">Status</h4>
            </div>
            <div>
                <Dropdown
                    value={tableStatus}
                    onChange={(event) => setTableStatus(event.target.value)}
                    placeholder="Select status"
                    options={[
                        { value: "Active", label: "Active" },
                        { value: "Inactive", label: "Inactive" }
                    ]}
                />
            </div>
            <div>
                <ErrorMessage message={statusError} />
            </div>
            <PrimaryButton onClick={() => setTableNumberError("Error")}>
                Submit
            </PrimaryButton>
        </div>
    </>
  )
}
