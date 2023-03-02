import "./UserInput.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";

function UserInput() {
  const [itemName, setItemName] = useState("ITEM NAME");
  const [itemCode, setItemCode] = useState("00000000");
  const [itemQuantity, setItemQuantity] = useState(10);
  const [itemPrice, setItemPrice] = useState(1.99);
  const [successAlert, setSuccessAlert] = useState("");

  function user_input() {
    setItemName(document.getElementById("item-name").value);
    setItemCode(document.getElementById("item-code").value);
    setItemQuantity(document.getElementById("item-quantity").value);
    setItemPrice(document.getElementById("item-price").value);
  }

  const inventoryItemList = [];

  class InventoryItem {
    constructor(name, code, quantity, buyPricePerItem) {
      this.itemName = name;
      this.itemCode = code;
      this.quantity = quantity;
      this.buyPricePerItem = buyPricePerItem;
    }
    itemInformation() {
      let info = `${this.itemName}: ${this.itemCode}`;
      console.log(info);
    }
  }

  function SubmitForm() {
    let nameEl = document.getElementById("item-name");
    let itemEl = document.getElementById("item-code");
    let quantityEl = document.getElementById("item-quantity");
    let priceEl = document.getElementById("item-price");
    if (
      nameEl.ariaInvalid === "false" &&
      itemEl.ariaInvalid === "false" &&
      quantityEl.ariaInvalid === "false" &&
      priceEl.ariaInvalid === "false" &&
      nameEl.value !== "ITEM NAME" &&
      itemEl.value !== "00000000"
    ) {
      inventoryItemList.push(
        new InventoryItem(
          nameEl.value,
          itemEl.value,
          quantityEl.value,
          Number(priceEl.value).toFixed(2)
        )
      );
      setSuccessAlert(itemName);
      setItemName("ITEM NAME");
      setItemCode("00000000");
      setItemQuantity(10);
      setItemPrice(1.99);
      document.getElementById("success-alert").style.display = "flex";
      document.getElementById("error-alert").style.display = "none";
    } else {
      document.getElementById("error-alert").style.display = "flex";
      document.getElementById("success-alert").style.display = "none";
    }
  }

  return (
    <div className="user-input-container">
      <div className="user-input-flex">
        <h2 className="user-input-title">Add Inventory Item</h2>
        <TextField
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
            user_input();
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
            user_input();
            setItemCode(event.target.value.toUpperCase().split(" ").join(""));
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
          required
          error={
            itemQuantity === "" || Number(itemQuantity) > 10000 ? true : false
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
          onChange={user_input}
          inputProps={{ min: 0, max: 10000, autoComplete: "off" }}
          value={itemQuantity}
          size="small"
        />
        <TextField
          required
          error={itemPrice === "" || Number(itemPrice) > 10000 ? true : false}
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
          onChange={user_input}
          inputProps={{ min: 0, max: 10000, autoComplete: "off" }}
          value={itemPrice}
          size="small"
        />
        <Alert
          id="error-alert"
          severity="error"
          onClose={() => {
            document.getElementById("error-alert").style.display = "none";
          }}
          variant="filled"
        >
          <AlertTitle>Error</AlertTitle>
          Invalid entry!
        </Alert>
        <Alert
          id="success-alert"
          severity="success"
          onClose={() => {
            document.getElementById("success-alert").style.display = "none";
            setSuccessAlert("");
          }}
          variant="filled"
        >
          <AlertTitle>Success</AlertTitle>
          {successAlert} has been added to your Inventory!
        </Alert>
        <Button
          color="secondary"
          className="button"
          onClick={SubmitForm}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default UserInput;
