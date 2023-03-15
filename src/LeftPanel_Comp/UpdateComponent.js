import "./UpdateComponent.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

function UpdateComponent() {
  return (
    <div className="updateComponentBox">
      <div className="update-input-heading">
        <AddCircleOutlineIcon color="secondary" />
        <h2 className="update-input-title">Update Inventory Item</h2>
      </div>
      <TextField
        type="text"
        name="nameInput"
        variant="filled"
        required
        // error={inputs.nameInput[0].length === 0 ? true : false}
        // helperText={
        //   inputs.nameInput[0].length === 0
        //     ? "Please choose a name no longer than 20 characters"
        //     : ""
        // }
        id="item-name"
        label="Item Name"
        placeholder="Item Name"
        className="add-text-field"
        color="secondary"
        // onChange={(event) => {
        //   inputTracker(event);
        // }}
        inputProps={{ maxLength: 20, autoComplete: "off" }}
        // value={inputs.nameInput[0]}
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
        // error={inputs.codeInput[0].length === 8 ? false : true}
        // helperText={
        //   inputs.codeInput[0].length === 8
        //     ? ""
        //     : "Please choose a code equal to 8 characters"
        // }
        id="item-code"
        label="Item Code"
        placeholder="Item Code"
        className="add-text-field"
        color="secondary"
        // onChange={(event) => {
        //   inputTracker(event);
        // }}
        inputProps={{ maxLength: 8, autoComplete: "off" }}
        // value={inputs.codeInput[0]}
        onKeyDown={(event) => {
          if (!event.key.match(/[a-zA-Z0-9]/)) {
            event.preventDefault();
          }
        }}
        size="small"
      />
      <StyledButton
        color="secondary"
        // onClick={submitForm}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
      >
        Search
      </StyledButton>
    </div>
  );
}

export default UpdateComponent;
