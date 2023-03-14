import "./LeftPanel.css";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
import TabPanel from "./TabPanel";
import { a11yProps } from "./component_extras";
import AddComponent from "./AddComponent";

function LeftPanel(props) {
  console.log("Render: LeftPanel");
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
  return (
    // left panel container ---- contains navigation tabs, app component and search
    <div className="left-panel-container">
      {/* left panel navigation tabs */}
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
      {/* TabPanel component is imported */}
      <TabPanel value={tabTracker} index={0}>
        <Slide
          direction="right"
          in={tabOneTransition}
          mountOnEnter
          unmountOnExit
        >
          <div className="user-input-flex">
            <AddComponent
              inputs={inputs}
              inputTracker={inputTracker}
              errorText={errorText}
              setErrorText={setErrorText}
              successText={successText}
              setSuccessText={setSuccessText}
              submitForm={submitForm}
            />
          </div>
        </Slide>
      </TabPanel>
      <TabPanel value={tabTracker} index={1}>
        <Slide
          direction="right"
          in={tabTwoTransition}
          mountOnEnter
          unmountOnExit
        >
          <div className="user-input-flex">
            <InsideTransition />
          </div>
        </Slide>
      </TabPanel>
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
