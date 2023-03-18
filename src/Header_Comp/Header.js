import "./Header.css";
import Switch from "@mui/material/Switch";

function Header(props) {
  // console.log("Render: Header");
  return (
    <div className="header-container-flex">
      <div className="right-align">
        Display Mode
        <Switch color="default" onClick={props.displayFunction} />
      </div>
      <h1 className="title">Inventory Application</h1>
    </div>
  );
}

export default Header;
