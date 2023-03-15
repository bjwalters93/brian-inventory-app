import "./UpdateComponent.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const StyledButton = styled(Button)`
  ${({ theme }) => `
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.shortest,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.05);
  }
  `}
`;

function UpdateComponent({ dataMapByName, dataMapByCode }) {
  console.log("Render: UpdateComponent");
  const [searchName, setSearchName] = useState("");
  const [searchCode, setSearchCode] = useState("");

  function searchByName(key) {
    if (dataMapByName.has(key)) {
      return dataMapByName.get(key);
    } else return "Item name does not exist.";
  }

  function searchByCode(key) {
    if (dataMapByCode.has(key)) {
      return dataMapByCode.get(key);
    } else return "Item code does not exist.";
  }

  return (
    <div className="updateComponentBox">
      <div className="update-input-heading">
        <TravelExploreIcon color="secondary" sx={{ fontSize: 40 }} />
        <h2 className="update-input-title">Update Inventory Item</h2>
      </div>
      <h3 className="sub-titles">Search by Name</h3>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setSearchName("")}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        type="text"
        name="nameInput"
        variant="outlined"
        required
        id="item-name"
        label="Item Name"
        placeholder="Item Name"
        className="update-text-field"
        color="secondary"
        onChange={(event) => {
          setSearchName(event.target.value.toUpperCase());
        }}
        inputProps={{ maxLength: 20, autoComplete: "off" }}
        value={searchName}
        onKeyDown={(event) => {
          if (!event.key.match(/[a-zA-Z0-9\s]/)) {
            event.preventDefault();
          }
        }}
      />
      <StyledButton
        size="small"
        color="secondary"
        onClick={() =>
          console.log(searchByName(searchName.replace(/\s+/g, " ").trim()))
        }
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{ margin: "0 0 30px 0" }}
      >
        Search
      </StyledButton>
      <h3 className="sub-titles">Search by Code</h3>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setSearchCode("")}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        type="text"
        name="codeInput"
        variant="outlined"
        required
        id="item-code"
        label="Item Code"
        placeholder="Item Code"
        className="update-text-field"
        color="secondary"
        onChange={(event) => {
          setSearchCode(event.target.value.toUpperCase());
        }}
        inputProps={{ maxLength: 8, autoComplete: "off" }}
        value={searchCode}
        onKeyDown={(event) => {
          if (!event.key.match(/[a-zA-Z0-9]/)) {
            event.preventDefault();
          }
        }}
      />
      <StyledButton
        size="small"
        color="secondary"
        onClick={() => console.log(searchByCode(searchCode))}
        variant="contained"
        startIcon={<SearchIcon />}
      >
        Search
      </StyledButton>
    </div>
  );
}

export default UpdateComponent;
