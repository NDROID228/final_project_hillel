import "./Table.css";
import React, { useState, useEffect } from "react";
import TableRow from "../TableRow/TableRow";

const Table = ({ products }) => {
  const [productsArr, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(() => products);
  }, [products])

  console.log(productsArr);

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
      <tbody>
        {
          productsArr.map((data) => {
            return <TableRow rowValue={data} />;
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
