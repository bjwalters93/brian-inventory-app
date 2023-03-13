import "./LeftPanel.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
import TabPanel from "./TabPanel";
import { a11yProps } from "./component_extras";
import { styled } from "@mui/material/styles";
// READ ME !!!!!!!!!!!!
// the Add and Search components could theoretically be split into their own
// individual components. However, function components CANNOT be used inside of MUI transition.
// this is the reason for not defining them as their own function components. However, you can
// use components as children of the MUI TabPanel component. Meaning, if you remove the transition(slide) component
// and stick a function component inside it will work. Same applies to AppBar MUI component.
function LeftPanel(props) {
  console.log("Render: LeftPanel");
  //   Theme for button transition
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

  // __________________________________________________________________
  //   ________________Add component starts here__________________
  // -------------------------------------------------------------
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
  console.log("quantity:", typeof inputs.quantityInput[0]);
  console.log("cost:", typeof inputs.costInput[0]);

  function submitForm() {
    if (
      inputs.nameInput[1] &&
      inputs.codeInput[1] &&
      inputs.quantityInput[1] &&
      inputs.costInput[1] &&
      props.dataMapByName.has(
        inputs.nameInput[0].replace(/\s+/g, " ").trim()
      ) === false &&
      props.dataMapByCode.has(inputs.codeInput[0]) === false
    ) {
      props.data(
        inputs.nameInput[0].replace(/\s+/g, " ").trim(),
        inputs.codeInput[0],
        inputs.quantityInput[0],
        inputs.costInput[0]
      );
      setErrorText("");
      setSuccessText(
        `${inputs.nameInput[0]} has been added to your Inventory!`
      );
      setInputs({
        nameInput: ["ITEM NAME", false],
        codeInput: ["00000000", false],
        quantityInput: [10, true],
        costInput: [1.99, true],
      });
    } else {
      setSuccessText("");
      props.dataMapByName.has(
        inputs.nameInput[0].replace(/\s+/g, " ").trim()
      ) && props.dataMapByCode.has(inputs.codeInput[0])
        ? setErrorText("Name and code already exist")
        : props.dataMapByName.has(
            inputs.nameInput[0].replace(/\s+/g, " ").trim()
          )
        ? setErrorText("Name already exists")
        : props.dataMapByCode.has(inputs.codeInput[0])
        ? setErrorText("Code already exists")
        : setErrorText("Invalid Entry");
    }
  }
  //   __________________Add component ends here________________________
  // -------------------------------------------------------------------
  //   ----Tabs Component Code ----- switches tabs, activates transitions
  const [tabTracker, setTabTracker] = useState(0);
  const [tabOneTransition, setTabOneTransition] = useState(true);
  const [tabTwoTransition, setTabTwoTransition] = useState(false);
  const handleChange = (event, newValue) => {
    setTabOneTransition((prev) => !prev);
    setTabTwoTransition((prev) => !prev);
    setTabTracker(newValue);
  };
  //   ----Tabs Component Code ----- switches tabs, activates transitions
  //   --------------------------------------------------------------------
  //   console.log(inputs.quantityInput[0].length);
  return (
    // left panel container ---- contains navigation tabs, app component and search
    <div className="left-panel-container">
      {/* left panel navigation tabs */}
      {/* -------------------------- */}
      <div className="left-panel-navigation-tabs">
        <Tabs
          value={tabTracker}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
        >
          <Tab sx={{ color: "white" }} label="Add" {...a11yProps(0)} />
          <Tab sx={{ color: "white" }} label="Update" {...a11yProps(1)} />
        </Tabs>
      </div>
      {/* left panel navigation tabs */}
      {/* -------------------------- */}
      {/* Add component starts here */}
      {/* --------------------------------------------- */}
      {/* TabPanel component is imported */}
      <TabPanel value={tabTracker} index={0}>
        <Slide
          direction="right"
          in={tabOneTransition}
          mountOnEnter
          unmountOnExit
        >
          <div className="user-input-flex">
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
              className="button"
              onClick={submitForm}
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
            >
              Submit
            </StyledButton>
          </div>
        </Slide>
      </TabPanel>
      {/* App component ends here */}
      {/* ------------------------------------------ */}
      {/* Search component starts here */}
      {/* -------------------------------------------------- */}
      {/* TabPanel component is imported */}
      <TabPanel value={tabTracker} index={1}>
        <Slide
          direction="right"
          in={tabTwoTransition}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <InsideTransition />
          </div>
        </Slide>
      </TabPanel>
      {/* Search component ends here */}
      {/* --------------------------------------------------- */}
    </div>
  );
}

export default LeftPanel;

function InsideTransition() {
  const [message, setMessage] = useState("I am inside of a transition!");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Brian is using React correctly!");
    }, 1500);
  });

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}
