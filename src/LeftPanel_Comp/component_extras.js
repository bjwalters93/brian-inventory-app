// function called inside tab component. Defines component props.
export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//   Data object constructor
export class InventoryItem {
  constructor(name, code, quantity, buyPricePerItem) {
    this.itemName = name;
    this.itemCode = code;
    this.quantity = quantity;
    this.buyPricePerItem = buyPricePerItem;
  }
  itemInformation() {
    let info = `name: ${this.itemName}, code: ${this.itemCode}, quantity: ${this.quantity}, price: ${this.buyPricePerItem}`;
    console.log(info);
    return info;
  }
}
