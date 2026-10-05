import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
    const [tableStatus, setTableStatus] = useState("Active");
    const [statusError, setStatusError] = useState("");
    const [submitError, setSubmitError] = useState("");

    const addTable = async () => {
        setTableNumberError("");
        setCapacityError("");
        setStatusError("");
        setSubmitError("");

        let hasError = false;

        if (!tableNumber.trim()) {
            setTableNumberError("Table number is required.");
            hasError = true;
        }

        if (!tableCapacity || tableCapacity < 1 || tableCapacity > 20) {
            setCapacityError("Capacity must be between 1 and 20.");
            hasError = true;
        }

        if (!tableStatus) {
            setStatusError("Please select a status.");
            hasError = true;
        }

        if (hasError) {
            return;
        }

        const table = {
            tableNumber: tableNumber.trim(),
            capacity: Number(tableCapacity),
            status: tableStatus
        };

        let response = null;

        try {
            response = await TableService.createTable(table);

            if (response === null) { 
                setSubmitError(`Something went wrong internally, try again later`);
                return;
            }
            else if (response.status != 201) {
                setSubmitError(`Something went wrong internally, try again later. ${response.status}: ${response.data.message}`);
                return;
            }
            navigate("/TableOverview");
        }
        catch (error) {
            console.log("FULL ERROR:", error);
            console.log("ERROR RESPONSE:", error.response);
            console.log("ERROR RESPONSE DATA:", error.response?.data);
            console.log("ERROR RESPONSE DATA TYPE:", typeof error.response?.data);


            if (error.response?.status === 400) {
                setSubmitError(`Incorrect values. ${error.response.status}: ${error.response.data.message}`);
                return;
            }
            else if (error.response != null)
            {
                setSubmitError(`Something went wrong. ${error.response.status}: ${error.response.data.message}`);
                return;
            }
            setSubmitError(`Something went wrong.`);

            console.error("Failed to add table:", error);
        }
    };

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
            <div>
                <ErrorMessage message={submitError} />
            </div>
            <PrimaryButton onClick={() => addTable()}>
                Add Table
            </PrimaryButton>
        </div>
    </>
  )
}
