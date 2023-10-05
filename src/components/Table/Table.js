import "./Table.css"
import TableRow from "../TableRow/TableRow";

const Table = (props) => {
    return(
        <table>
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price ($)</th>
                <th style={{width: "5rem"}}></th>
            </tr>
            <TableRow rowValue={["0", "PC", "Lenovo X234", "3", "20000.00"]} />
            <TableRow rowValue={["0", "PC", "Lenovo X234", "3", "20000.00"]} />
        </table>
    )
}

export default Table;