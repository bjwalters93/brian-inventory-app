import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { lightTheme } from "../themes.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteAlertDialog({
  deleteAlert,
  deleteAlertValue,
  deleteItems,
  selectedElements,
  resetSelectedElements,
  setSearchTruth,
  setSearchResults,
}) {
  const handleCloseNo = () => {
    resetSelectedElements([]);
    deleteAlert(false);
  };

  const handleCloseYes = () => {
    deleteItems(selectedElements);
    deleteAlert(false);
    resetSelectedElements([]);
  };

  return (
    <div>
      <Dialog
        open={deleteAlertValue}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleCloseNo}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{
            backgroundColor: lightTheme.palette.error.main,
            color: "white",
          }}
        >
          {"Warning!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ marginTop: "10px", color: "var(--compOneFontColor)" }}
            id="alert-dialog-slide-description"
          >
            Are you sure you want to delete these items?{" "}
            {selectedElements.length} item(s) will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleCloseNo}>
            No
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              handleCloseYes();
              setSearchTruth("false");
              setSearchResults({
                name: "ITEM NAME",
                code: "00000000",
                quantity: 10,
                cost: 1.99,
              });
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
