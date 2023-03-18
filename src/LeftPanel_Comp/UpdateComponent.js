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
import CheckIcon from "@mui/icons-material/Check";
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
  dataMapByName,
  dataMapByCode,
  searchResults,
  setSearchResults,
  searchTruth,
  setSearchTruth,
}) {
  // console.log("Render: UpdateComponent");
  //   key for function
  const [searchName, setSearchName] = useState("");
  const [searchCode, setSearchCode] = useState("");

  const [radioQuantity, setRadioQuantity] = useState("add");
  const [radioCost, setRadioCost] = useState("add");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //   let editFormTruth = true;

  let defaultValues = {
    name: "ITEM NAME",
    code: "00000000",
    quantity: 10,
    cost: 1.99,
  };

  //   function searchInventory(name, key) {
  //     console.log("triggered");
  //     if (name === "searchNameBtn" && dataMapByName.has(key)) {
  //       setSearchTruth("nameTrue");
  //       let dataObject = dataMapByName.get(key);
  //       setSearchResults(dataObject);
  //       setSuccess(`You can update ${dataObject.name} below!`);
  //       setError("");
  //     } else if (name === "searchCodeBtn" && dataMapByCode.has(key)) {
  //       setSearchTruth("codeTrue");
  //       let dataObject = dataMapByCode.get(key);
  //       setSearchResults(dataObject);
  //       setSuccess(`You can update ${dataObject.name} below!`);
  //       setError("");
  //     } else if (name === "searchNameBtn" && !dataMapByName.has(key)) {
  //       setSearchTruth("nameFalse");
  //       setSearchResults(defaultValues);
  //       setError("Item name doesn't exist!");
  //       setSuccess("");
  //       console.log("should update name error");
  //     } else if (name === "searchCodeBtn" && !dataMapByCode.has(key)) {
  //       setSearchTruth("codeFalse");
  //       setSearchResults(defaultValues);
  //       setError("Item code doesn't exist!");
  //       setSuccess("");
  //     }
  //   }

  function searchInventory(name, key) {
    console.log(`triggered name=<${name}> key=<${key}>`);
    if (name === "searchNameBtn" && dataMapByName.has(key)) {
      console.log("triggered A");
      setSearchTruth("nameTrue");
      let dataObject = dataMapByName.get(key);
      setSearchResults(dataObject);
      setSuccess(`You can update ${dataObject.name} below!`);
      setError("");
    } else if (name === "searchCodeBtn" && dataMapByCode.has(key)) {
      console.log("triggered B");
      setSearchTruth("codeTrue");
      let dataObject = dataMapByCode.get(key);
      setSearchResults(dataObject);
      setSuccess(`You can update ${dataObject.name} below!`);
      setError("");
    } else if (name === "searchNameBtn" && !dataMapByName.has(key)) {
      console.log("triggered C");
      setSearchTruth("nameFalse");
      setSearchResults(defaultValues);
      setError("Item name doesn't exist!");
      setSuccess("");
      console.log("should update name error");
    } else if (name === "searchCodeBtn" && !dataMapByCode.has(key)) {
      console.log("triggered D");
      setSearchTruth("codeFalse");
      setSearchResults(defaultValues);
      setError("Item code doesn't exist!");
      setSuccess("");
    } else {
      console.log("triggered but INVALID");
    }
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
        name="searchNameInput"
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
          searchInventory(
            "searchNameBtn",
            searchName.replace(/\s+/g, " ").trim()
          );
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
        name="searchCodeInput"
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
          searchInventory("searchCodeBtn", searchCode);
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
          setSearchTruth("false");
          setSearchCode("");
          setSearchName("");
          setSearchResults(defaultValues);
          setSuccess("");
          setError("");
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
            setSuccess("");
            setError("");
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
            setSuccess("");
            setError("");
          }}
          variant="filled"
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      <h3 className="sub-titles">Update Inventory Item</h3>
      <TextField
        name="nameInput"
        size="small"
        className="update-text-field"
        disabled
        id="outlined-disabled"
        label="Item Name"
        value={searchResults.name}
      />
      <TextField
        name="codeInput"
        size="small"
        className="update-text-field"
        disabled
        id="outlined-disabled"
        label="Item Code"
        value={searchResults.code}
      />
      <RadioGroup
        row
        defaultValue="add"
        name="row-radio-buttons-group-quantity"
        onChange={(e) => setRadioQuantity(e.target.value)}
        sx={{ margin: "-10px 0 0 0" }}
      >
        <FormControlLabel
          sx={{
            color: "var(--compOneFontColor)",
            ".MuiFormControlLabel-label": {
              fontSize: "14px",
            },
          }}
          value="add"
          control={
            <Radio
              disabled={
                searchTruth === "nameTrue" || searchTruth === "codeTrue"
                  ? false
                  : true
              }
              color="secondary"
            />
          }
          label="Add"
        />
        <FormControlLabel
          sx={{
            color: "var(--compOneFontColor)",
            ".MuiFormControlLabel-label": {
              fontSize: "14px",
            },
          }}
          value="subtract"
          control={
            <Radio
              disabled={
                searchTruth === "nameTrue" || searchTruth === "codeTrue"
                  ? false
                  : true
              }
              color="secondary"
            />
          }
          label="Subtract"
        />
      </RadioGroup>
      <TextField
        disabled={
          searchTruth === "nameTrue" || searchTruth === "codeTrue"
            ? false
            : true
        }
        name="quantityInput"
        placeholder="Quantity"
        color="secondary"
        size="small"
        className="update-text-field"
        id="outlined-disabled"
        label="Update Quantity"
        // value={searchResults.quantity}
        // onChange={(e) =>
        //   setSearchResults((prev) => ({
        //     ...prev,
        //     [e.target.name]: e.target.value,
        //   }))
        // }
        type="number"
        inputProps={{ max: 10000, autoComplete: "off" }}
        // error={
        //   searchResults.Input > 0 && searchResults.Input <= 10000 ? false : true
        // }
        // helperText={
        //   searchResults.Input > 0 && searchResults.Input <= 10000
        //     ? ""
        //     : "Please choose a number between 0 and 10000"
        // }
      />
      <RadioGroup
        row
        defaultValue="add"
        name="row-radio-buttons-group-cost"
        onChange={(e) => setRadioCost(e.target.value)}
        sx={{ margin: "-10px 0 0 0" }}
      >
        <FormControlLabel
          sx={{
            color: "var(--compOneFontColor)",
            ".MuiFormControlLabel-label": {
              fontSize: "14px",
            },
          }}
          value="add"
          control={
            <Radio
              disabled={
                searchTruth === "nameTrue" || searchTruth === "codeTrue"
                  ? false
                  : true
              }
              color="secondary"
            />
          }
          label="Add"
        />
        <FormControlLabel
          sx={{
            color: "var(--compOneFontColor)",
            ".MuiFormControlLabel-label": {
              fontSize: "14px",
            },
          }}
          value="subtract"
          control={
            <Radio
              disabled={
                searchTruth === "nameTrue" || searchTruth === "codeTrue"
                  ? false
                  : true
              }
              color="secondary"
            />
          }
          label="Subtract"
        />
      </RadioGroup>
      <TextField
        disabled={
          searchTruth === "nameTrue" || searchTruth === "codeTrue"
            ? false
            : true
        }
        name="costInput"
        placeholder="Cost"
        color="secondary"
        size="small"
        className="update-text-field"
        id="outlined-disabled"
        label="Update Cost"
        // value={searchResults.cost}
        // onChange={(e) =>
        //   setSearchResults((prev) => ({
        //     ...prev,
        //     [e.target.name]: e.target.value,
        //   }))
        // }
        type="number"
        inputProps={{ max: 10000, autoComplete: "off" }}
        // error={
        //   searchResults.cost > 0 && searchResults.cost <= 10000 ? false : true
        // }
        // helperText={
        //   searchResults.cost > 0 && searchResults.cost <= 10000
        //     ? ""
        //     : "Please choose a number between 0 and 10000"
        // }
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
          disabled={
            searchTruth === "nameTrue" || searchTruth === "codeTrue"
              ? false
              : true
          }
          size="small"
          color="secondary"
          variant="extended"
          aria-label="edit"
          sx={{ marginLeft: "10px" }}
        >
          <CheckIcon sx={{ margin: "0 5px 0 5px" }} />
          <Box sx={{ margin: "0 10px 0 0" }}>UPDATE</Box>
        </Fab>
      </Box>
    </div>
  );
}

export default UpdateComponent;
