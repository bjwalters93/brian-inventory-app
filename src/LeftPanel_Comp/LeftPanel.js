import "./LeftPanel.css";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
import TabPanel from "./TabPanel";
import { a11yProps } from "./component_extras";
import AddComponent from "./AddComponent";
import UpdateComponent from "./UpdateComponent";

function LeftPanel({ data, dataMapByName, dataMapByCode }) {
  console.log("Render: LeftPanel");
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
              data={data}
              dataMapByName={dataMapByName}
              dataMapByCode={dataMapByCode}
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
            <UpdateComponent
              dataMapByName={dataMapByName}
              dataMapByCode={dataMapByCode}
            />
          </div>
        </Slide>
      </TabPanel>
    </div>
  );
}

export default LeftPanel;
