import "./DataTable.css";
// import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

function DataTable(props) {
  let myTestArray = [];
  props.dataMapByName.forEach(function (value, key) {
    myTestArray.push({ ...value, key: key });
  });

  return (
    <div className="table-container-main">
      <div className="table-title-container">
        <InventoryOutlinedIcon color="secondary" fontSize="large" />
        <h2 className="table-title">Inventory List</h2>
      </div>

      <TableContainer className="table-container">
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Item Code</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myTestArray.map((element) => (
              <TableRow key={element.key}>
                <TableCell>{element.name}</TableCell>
                <TableCell align="right">{element.code}</TableCell>
                <TableCell align="right">{element.quantity}</TableCell>
                <TableCell align="right">{element.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;

// const fruits = new Map([
//   ["001", { firstName: "Brian", lastName: "Walters" }],
//   ["002", { firstName: "Kyle", lastName: "Walters" }],
//   ["003", { firstName: "Ted", lastName: "Walters" }],
// ]);

// let text = [];
// fruits.forEach(function (value, key) {
//   text += `key = ${value.firstName} ${value.lastName} <br>`;
// });
