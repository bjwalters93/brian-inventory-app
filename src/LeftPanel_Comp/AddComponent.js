import "./AddComponent.css";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

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

function AddComponent({ data, dataMapByName, dataMapByCode }) {
  console.log("Render: AddComponent");
  const [inputs, setInputs] = useState({
    nameInput: ["ITEM NAME", false],
    codeInput: ["00000000", false],
    quantityInput: [10, true],
    costInput: [1.99, true],
  });
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");

  function inputTracker(event) {
    const name = event.target.name;
    const value =
      name === "nameInput"
        ? event.target.value.toUpperCase()
        : name === "codeInput"
        ? event.target.value.toUpperCase()
        : event.target.value;
    let valid;
    if (name === "nameInput" && value !== "" && value !== "ITEM NAME") {
      valid = true;
    } else if (
      name === "codeInput" &&
      value !== "" &&
      value.length === 8 &&
      value !== "00000000"
    ) {
      valid = true;
    } else if (
      name === "quantityInput" &&
      value >= 0 &&
      value <= 10000 &&
      value !== ""
    ) {
      valid = true;
    } else if (
      name === "costInput" &&
      value >= 0 &&
      value <= 10000 &&
      value !== ""
    ) {
      valid = true;
    } else valid = false;
    setInputs((values) => ({ ...values, [name]: [value, valid] }));
  }

  function submitForm() {
    if (
      inputs.nameInput[1] &&
      inputs.codeInput[1] &&
      inputs.quantityInput[1] &&
      inputs.costInput[1] &&
      dataMapByName.has(inputs.nameInput[0].replace(/\s+/g, " ").trim()) ===
        false &&
      dataMapByCode.has(inputs.codeInput[0]) === false
    ) {
      data(
        inputs.nameInput[0].replace(/\s+/g, " ").trim(),
        inputs.codeInput[0],
        inputs.quantityInput[0],
        inputs.costInput[0]
      );
      setErrorText("");
      setSuccessText(
        `${inputs.nameInput[0]} has been added to your Inventory!`
      );
      resetInputs();
    } else {
      setSuccessText("");
      dataMapByName.has(inputs.nameInput[0].replace(/\s+/g, " ").trim()) &&
      dataMapByCode.has(inputs.codeInput[0])
        ? setErrorText("Name and code already exist")
        : dataMapByName.has(inputs.nameInput[0].replace(/\s+/g, " ").trim())
        ? setErrorText("Name already exists")
        : dataMapByCode.has(inputs.codeInput[0])
        ? setErrorText("Code already exists")
        : setErrorText("Invalid Entry");
    }
  }

  function resetInputs() {
    setInputs({
      nameInput: ["ITEM NAME", false],
      codeInput: ["00000000", false],
      quantityInput: [10, true],
      costInput: [1.99, true],
    });
  }

  return (
    <div className="addComponentBox">
      <div className="add-input-heading">
        <AddCircleOutlineIcon color="secondary" />
        <h2 className="add-input-title">Add Inventory Item</h2>
      </div>
      <TextField
        type="text"
        name="nameInput"
        variant="outlined"
        required
        error={inputs.nameInput[0].length === 0 ? true : false}
        helperText={
          inputs.nameInput[0].length === 0
            ? "Please choose a name no longer than 20 characters"
            : ""
        }
        id="item-name"
        label="Item Name"
        placeholder="Item Name"
        className="add-text-field"
        color="secondary"
        onChange={(event) => {
          inputTracker(event);
        }}
        inputProps={{ maxLength: 20, autoComplete: "off" }}
        value={inputs.nameInput[0]}
        onKeyDown={(event) => {
          if (!event.key.match(/[a-zA-Z0-9\s]/)) {
            event.preventDefault();
          }
        }}
        size="small"
      />
      <TextField
        type="text"
        name="codeInput"
        variant="outlined"
        required
        error={inputs.codeInput[0].length === 8 ? false : true}
        helperText={
          inputs.codeInput[0].length === 8
            ? ""
            : "Please choose a code equal to 8 characters"
        }
        id="item-code"
        label="Item Code"
        placeholder="Item Code"
        className="add-text-field"
        color="secondary"
        onChange={(event) => {
          inputTracker(event);
        }}
        inputProps={{ maxLength: 8, autoComplete: "off" }}
        value={inputs.codeInput[0]}
        onKeyDown={(event) => {
          if (!event.key.match(/[a-zA-Z0-9]/)) {
            event.preventDefault();
          }
        }}
        size="small"
      />
      <TextField
        name="quantityInput"
        variant="outlined"
        required
        error={inputs.quantityInput[1] ? false : true}
        helperText={
          inputs.quantityInput[1]
            ? ""
            : "Please choose a number between 0 and 10000"
        }
        id="item-quantity"
        label="Quantity"
        type="number"
        placeholder="Quantity"
        className="add-text-field"
        color="secondary"
        onChange={(event) => {
          inputTracker(event);
        }}
        inputProps={{ max: 10000, autoComplete: "off" }}
        value={inputs.quantityInput[0]}
        size="small"
      />
      <TextField
        name="costInput"
        variant="outlined"
        required
        error={inputs.costInput[1] ? false : true}
        helperText={
          inputs.costInput[1]
            ? ""
            : "Please choose a number between 0 and 10000"
        }
        id="Cost"
        label="Cost"
        type="number"
        placeholder="Cost"
        className="add-text-field last-text-field"
        color="secondary"
        onChange={(event) => {
          inputTracker(event);
        }}
        inputProps={{ max: 10000, autoComplete: "off" }}
        value={inputs.costInput[0]}
        size="small"
      />
      {errorText !== "" && (
        <Alert
          id="error-alert"
          severity="error"
          onClose={() => {
            setErrorText("");
          }}
          variant="filled"
        >
          <AlertTitle>Error</AlertTitle>
          {errorText}
        </Alert>
      )}
      {successText !== "" && (
        <Alert
          id="success-alert"
          severity="success"
          onClose={() => {
            setSuccessText("");
          }}
          variant="filled"
        >
          <AlertTitle>Success</AlertTitle>
          {successText}
        </Alert>
      )}
      <StyledButton
        size="small"
        color="secondary"
        onClick={submitForm}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
      >
        Submit
      </StyledButton>
      <Chip
        color="error"
        size="small"
        label="RESET"
        variant="filled"
        onClick={() => {
          resetInputs();
          setErrorText("");
          setSuccessText("");
        }}
        sx={{
          fontWeight: "500",
          //   minWidth: "50%",
          margin: "10px 0 0 0",
          borderRadius: "3px",
          boxShadow:
            "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        }}
      />
    </div>
  );
}

export default AddComponent;
