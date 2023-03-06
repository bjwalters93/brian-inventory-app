import "./LeftPanel.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
import TabPanel from "./TabPanel";
import { a11yProps } from "./component_extras";
import { useRef } from "react";

// READ ME !!!!!!!!!!!!
// the Add and Search components could theoretically be split into their own
// individual components. However, function components CANNOT be used inside of MUI transition.
// this is the reason for not defining them as their own function components. However, you can
// use components as children of the MUI TabPanel component. Meaning, if you remove the transition(slide) component
// and stick a function component inside it will work. Same applies to AppBar MUI component.
function LeftPanel(props) {
  //   ________________Add component starts here__________________
  // -------------------------------------------------------------
  // States for text field components.
  const [itemName, setItemName] = useState("ITEM NAME");
  const [itemCode, setItemCode] = useState("00000000");
  const [itemQuantity, setItemQuantity] = useState(10);
  const [itemPrice, setItemPrice] = useState(1.99);
  //   const [alertText, setAlertText] = useState("");
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");
  const errorAlertElement = useRef(null);

  // Submits form data, triggers error or success alert, resets form.
  function submitForm() {
    const nameEl = document.getElementById("item-name");
    const codeEl = document.getElementById("item-code");
    const quantityEl = document.getElementById("item-quantity");
    const priceEl = document.getElementById("item-price");
    if (
      nameEl.ariaInvalid === "false" &&
      codeEl.ariaInvalid === "false" &&
      quantityEl.ariaInvalid === "false" &&
      priceEl.ariaInvalid === "false" &&
      itemName !== "ITEM NAME" &&
      itemCode !== "00000000" &&
      !props.dataMapByName.has(itemName) &&
      !props.dataMapByCode.has(itemCode)
    ) {
      props.data(itemName, itemCode, itemQuantity, itemPrice);
      setErrorText("");
      setSuccessText(`${itemName} has been added to your Inventory!`);
      setItemName("ITEM NAME");
      setItemCode("00000000");
      setItemQuantity(10);
      setItemPrice(1.99);
    } else {
      setSuccessText("");
      props.dataMapByName.has(itemName)
        ? setErrorText("Name already exists")
        : props.dataMapByCode.has(itemCode)
        ? setErrorText("Code already exists")
        : setErrorText("Invalid Entry");
    }
  }
  //   __________________Add component ends here________________________
  // -------------------------------------------------------------------
  //   ----Tabs Component Code ----- switches tabs, activates transitions
  const [value, setValue] = useState(0);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const handleChange = (event, newValue) => {
    setChecked1((prev) => !prev);
    setChecked2((prev) => !prev);
    setValue(newValue);
  };
  //   ----Tabs Component Code ----- switches tabs, activates transitions
  //   --------------------------------------------------------------------

  return (
    // left panel container ---- contains navigation tabs, app component and search
    <div className="left-panel-container">
      {/* left panel navigation tabs */}
      {/* -------------------------- */}
      <div className="left-panel-navigation-tabs">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
        >
          <Tab label="Add" {...a11yProps(0)} />
          <Tab label="Search" {...a11yProps(1)} />
        </Tabs>
      </div>
      {/* left panel navigation tabs */}
      {/* -------------------------- */}
      {/* Add component starts here */}
      {/* --------------------------------------------- */}
      {/* TabPanel component is imported */}
      <TabPanel value={value} index={0}>
        <Slide direction="right" in={checked1} mountOnEnter unmountOnExit>
          <div className="user-input-flex">
            <div className="user-input-heading">
              <AddCircleOutlineIcon color="secondary" />
              <h2 className="user-input-title">Add Inventory Item</h2>
            </div>
            <TextField
              variant="filled"
              required
              error={itemName === "" ? true : false}
              helperText={
                itemName === ""
                  ? "Please choose a name no longer than 20 characters"
                  : ""
              }
              id="item-name"
              label="Item Name"
              placeholder="Item Name"
              className="text-field"
              color="secondary"
              onChange={(event) => {
                setItemName(event.target.value.toUpperCase());
              }}
              inputProps={{ maxLength: 20, autoComplete: "off" }}
              value={itemName}
              onKeyDown={(event) => {
                if (!event.key.match(/[a-zA-Z0-9\s]/)) {
                  event.preventDefault();
                }
              }}
              size="small"
            />
            <TextField
              variant="filled"
              required
              error={itemCode === "" || itemCode.length < 8 ? true : false}
              helperText={
                itemCode === "" || itemCode.length < 8
                  ? "Please choose a code equal to 8 characters"
                  : ""
              }
              id="item-code"
              label="Item Code"
              placeholder="Item Code"
              className="text-field"
              color="secondary"
              onChange={(event) => {
                setItemCode(
                  event.target.value.toUpperCase().split(" ").join("")
                );
              }}
              inputProps={{ maxLength: 8, autoComplete: "off" }}
              value={itemCode}
              onKeyDown={(event) => {
                if (!event.key.match(/[a-zA-Z0-9]/)) {
                  event.preventDefault();
                }
              }}
              size="small"
            />
            <TextField
              variant="filled"
              required
              error={
                itemQuantity === "" || Number(itemQuantity) > 10000
                  ? true
                  : false
              }
              helperText={
                itemQuantity === "" || Number(itemQuantity) > 10000
                  ? "Please choose a number between 1 and 10000"
                  : ""
              }
              id="item-quantity"
              label="Quantity"
              type="number"
              placeholder="Quantity"
              className="text-field"
              color="secondary"
              onChange={(event) => {
                setItemCode(event.target.value);
              }}
              inputProps={{ min: 0, max: 10000, autoComplete: "off" }}
              value={itemQuantity}
              size="small"
            />
            <TextField
              variant="filled"
              required
              error={
                itemPrice === "" || Number(itemPrice) > 10000 ? true : false
              }
              helperText={
                itemPrice === "" || Number(itemPrice) > 10000
                  ? "Please choose a number between 1 and 10000"
                  : ""
              }
              id="item-price"
              label="Item Price"
              type="number"
              placeholder="Item Price"
              className="text-field"
              color="secondary"
              onChange={(event) => {
                setItemCode(event.target.value);
              }}
              inputProps={{ min: 0, max: 10000, autoComplete: "off" }}
              value={itemPrice}
              size="small"
            />
            {errorText !== "" && (
              <Alert
                ref={errorAlertElement}
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
            <Button
              color="secondary"
              className="button"
              onClick={submitForm}
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
            >
              Submit
            </Button>
          </div>
        </Slide>
      </TabPanel>
      {/* App component ends here */}
      {/* ------------------------------------------ */}
      {/* Search component starts here */}
      {/* -------------------------------------------------- */}
      {/* TabPanel component is imported */}
      <TabPanel value={value} index={1}>
        <Slide direction="right" in={checked2} mountOnEnter unmountOnExit>
          <p>Bye</p>
        </Slide>
      </TabPanel>
      {/* Search component ends here */}
      {/* --------------------------------------------------- */}
    </div>
  );
}

export default LeftPanel;
