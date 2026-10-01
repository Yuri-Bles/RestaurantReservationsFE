import { useState } from "react";
import "../styles/TableOverview/TableList.css";

export default function TableList({ tables }) {
    const [selectedTable, setSelectedTable] = useState(null);
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Table Number</th>
                    <th>Capacity</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {tables.map((table) => (
                    <tr
                        key={table.tableNumber}
                        onClick={() => setSelectedTable(table)}
                        className={
                            selectedTable?.tableNumber === table.tableNumber
                                ? "selected"
                                : ""
                        }
                    >
                        <td>{table.tableNumber}</td>
                        <td>{table.capacity}</td>
                        <td>{table.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
