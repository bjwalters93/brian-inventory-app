import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import UserInput from "./UserInput_Comp/UserInput";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" {...a11yProps(0)} onClick={handleClick} />
          <Tab label="Item Two" {...a11yProps(1)} onClick={handleClick} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Fade in={checked}>
          <p>Hello</p>
        </Fade>
      </TabPanel>
      <Fade in={checked}>
        <TabPanel value={value} index={1}>
          <UserInput />
        </TabPanel>
      </Fade>
    </div>
  );
}
