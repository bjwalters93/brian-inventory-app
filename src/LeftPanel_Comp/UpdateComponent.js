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
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PublishIcon from "@mui/icons-material/Publish";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

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

function UpdateComponent({
  searchByName,
  searchByCode,
  resetSearchTruth,
  searchNameResults,
  searchCodeResults,
  searchNameTruth,
  searchCodeTruth,
  success,
  error,
  resetErrorSuccess,
}) {
  console.log("Render: UpdateComponent");
  const [searchName, setSearchName] = useState("");
  const [searchCode, setSearchCode] = useState("");

  let editObject;
  let editFormTruth = true;

  if (searchNameTruth) {
    editObject = searchNameResults;
  } else if (searchCodeTruth) {
    editObject = searchCodeResults;
  } else {
    editObject = {
      name: "name",
      code: "code",
      quantity: "quantity",
      cost: "cost",
    };
  }

  if (searchNameTruth || searchCodeTruth) {
    editFormTruth = false;
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
              <IconButton
                edge="end"
                onClick={() => {
                  setSearchName("");
                }}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        size="small"
        onFocus={() => setSearchCode("")}
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
        onClick={() => {
          searchByName(searchName.replace(/\s+/g, " ").trim());
          setSearchCode("");
        }}
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{ margin: "0 0 10px 0" }}
      >
        Search
      </StyledButton>
      <h3 className="sub-titles">Search by Code</h3>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() => {
                  setSearchCode("");
                }}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        size="small"
        onFocus={() => setSearchName("")}
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
        onClick={() => {
          searchByCode(searchCode);
          setSearchName("");
        }}
        variant="contained"
        startIcon={<SearchIcon />}
      >
        Search
      </StyledButton>
      <Chip
        color="error"
        size="small"
        label="RESET"
        variant="filled"
        onClick={() => {
          setSearchCode("");
          setSearchName("");
          resetSearchTruth();
          resetErrorSuccess();
        }}
        sx={{
          fontWeight: "500",
          //   minWidth: "50%",
          margin: "10px 0 10px 0",
          borderRadius: "3px",
          boxShadow:
            "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        }}
      />
      {success !== "" && (
        <Alert
          sx={{ margin: "0 0 10px 0" }}
          id="error-alert"
          severity="success"
          onClose={() => {
            resetErrorSuccess();
          }}
          variant="filled"
        >
          <AlertTitle>Success</AlertTitle>
          {success}
        </Alert>
      )}
      {error !== "" && (
        <Alert
          sx={{ margin: "0 0 10px 0" }}
          id="error-alert"
          severity="error"
          onClose={() => {
            resetErrorSuccess();
          }}
          variant="filled"
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      <h3 className="sub-titles">Edit Inventory Item</h3>
      <TextField
        size="small"
        className="update-text-field"
        disabled
        id="outlined-disabled"
        label="Item Name"
        value={editObject.name}
      />
      <TextField
        size="small"
        className="update-text-field"
        disabled
        id="outlined-disabled"
        label="Item Code"
        value={editObject.code}
      />
      <RadioGroup
        row
        defaultValue="add"
        name="row-radio-buttons-group-quantity"
        onChange={(e) => console.log(e.target.value)}
        sx={{ margin: "-10px 0 0 0" }}
      >
        <FormControlLabel
          value="add"
          control={<Radio disabled={editFormTruth} color="secondary" />}
          label="Add"
        />
        <FormControlLabel
          value="subtract"
          control={<Radio disabled={editFormTruth} color="secondary" />}
          label="Subtract"
        />
      </RadioGroup>
      <TextField
        size="small"
        className="update-text-field"
        disabled={editFormTruth}
        id="outlined-disabled"
        label="Item Quantity"
        value={editObject.quantity}
      />
      <RadioGroup
        row
        defaultValue="add"
        name="row-radio-buttons-group-cost"
        onChange={(e) => console.log(e.target.value)}
        sx={{ margin: "-10px 0 0 0" }}
      >
        <FormControlLabel
          value="add"
          control={<Radio disabled={editFormTruth} color="secondary" />}
          label="Add"
        />
        <FormControlLabel
          value="subtract"
          control={<Radio disabled={editFormTruth} color="secondary" />}
          label="Subtract"
        />
      </RadioGroup>
      <TextField
        size="small"
        className="update-text-field"
        disabled={editFormTruth}
        id="outlined-disabled"
        label="Item Cost"
        value={editObject.cost}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          margin: "0 0 30px 0",
        }}
      >
        <Fab
          disabled={editFormTruth}
          size="small"
          color="secondary"
          variant="extended"
          aria-label="edit"
          sx={{ marginLeft: "10px" }}
        >
          <PublishIcon sx={{ margin: "0 5px 0 10px" }} />
          <Box sx={{ margin: "0 10px 0 0" }}>UPDATE</Box>
        </Fab>
      </Box>
    </div>
  );
}

export default UpdateComponent;
