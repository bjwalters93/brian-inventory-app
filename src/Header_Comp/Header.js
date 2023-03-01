import "./Header.css";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";

function Header(props) {
  return (
    <div className="header-flex">
      <Paper>
        <div className="right-align">
          <Switch color="secondary" onClick={props.displayFunction} />
        </div>
        <h1 className="title">Inventory Application</h1>
      </Paper>
    </div>
  );
}

export default Header;
