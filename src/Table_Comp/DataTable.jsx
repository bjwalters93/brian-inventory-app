import "./DataTable.css";
// import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
// import { dummyDataByName } from "./dummyData";
// import { useState } from "react";

function DataTable(props) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-head": {
      fontSize: "16px",
      backgroundColor: "var(--headerBackground)",
      color: "var(--headerFontColor)",
    },
    "&.MuiTableCell-body": {
      //   backgroundColor: "var(--compTwoBackground)",
      color: "var(--compTwoFontColor)",
      fontSize: "12px",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "var(--compOneBackground)",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "var(--compTwoBackground)",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const byNameArray = [];
  const byCodeArray = [];

  props.dataMapByName.forEach(function (value, key) {
    byNameArray.push({ ...value, key: key });
  });

  props.dataMapByCode.forEach(function (value, key) {
    byCodeArray.push({ ...value, key: key });
  });

  return (
    <div className="table-container-main">
      <div className="table-title-container">
        <InventoryOutlinedIcon color="secondary" fontSize="large" />
        <h2 className="table-title">Inventory List</h2>
      </div>

      <TableContainer className="table-container">
        <Table size="medium" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Item Code</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Cost</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {byNameArray.map((element) => (
              <StyledTableRow key={element.key}>
                <StyledTableCell>{element.name}</StyledTableCell>
                <StyledTableCell align="right">{element.code}</StyledTableCell>
                <StyledTableCell align="right">
                  {element.quantity}
                </StyledTableCell>
                <StyledTableCell align="right">{element.cost}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
