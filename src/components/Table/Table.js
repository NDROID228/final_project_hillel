import "./Table.css";
import TableRow from "../TableRow/TableRow";

const Table = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price ($)</th>
          <th style={{ width: "5rem" }}></th>
        </tr>
      </thead>
      <tbody>{() => { 
        products.map((data) => {
          return <TableRow rowValue={data} />;
        });
      }}</tbody>
    </table>
  );
};

export default Table;
