import React, {Component} from 'react';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log("Constructor")
    }

    render() {
        console.log("Render")
        return (
            <>
                <div className="container-table">
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>STATUS</th>
                            <th>TOTAL PAGE</th>
                            <th>ORDER DATE</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Unequal - %</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Unequal - Amt</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Unequal - %</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Unequal - %</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Food</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        <tr>
                            <td>Volodymry Holovetskyi</td>
                            <td>Transport</td>
                            <td>Descripiton 1</td>
                            <td>$ 12.00</td>
                            <td>2024-03-15</td>
                            <td>Equal</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default OrderDetails;