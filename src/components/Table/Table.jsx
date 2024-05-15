import React from "react";

function Table({headers, rows}) {

    return (
        <div className="container-table">
            <table>
                <thead>
                {headers.map((header) => {
                    return (
                        <tr>
                            <th>{header}</th>
                        </tr>
                    );
                })}
                </thead>
                <tbody>
                {rows.map((row) => {
                    return (
                        <tr key={row.id}>
                            <td>{row}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;