import "./AddComponent.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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

function AddComponent({
  inputs,
  inputTracker,
  errorText,
  successText,
  submitForm,
  setErrorText,
  setSuccessText,
}) {
  return (
    <div className="addComponentBox">
      <div className="user-input-heading">
        <AddCircleOutlineIcon color="secondary" />
        <h2 className="user-input-title">Add Inventory Item</h2>
      </div>
      <TextField
        type="text"
        name="nameInput"
        variant="filled"
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
        className="text-field"
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
        variant="filled"
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
        className="text-field"
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
        variant="filled"
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
        className="text-field"
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
        variant="filled"
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
        className="text-field"
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
        color="secondary"
        onClick={submitForm}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
      >
        Submit
      </StyledButton>
    </div>
  );
}

export default AddComponent;
