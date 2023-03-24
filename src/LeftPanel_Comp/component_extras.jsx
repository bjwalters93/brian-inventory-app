// function called inside tab component. Defines component props.
export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//   Data object constructor
export class InventoryItem {
  constructor(name, code, quantity, cost) {
    this.name = name;
    this.code = code;
    this.quantity = quantity;
    this.cost = cost;
  }
  itemInformation() {
    let info = `name: ${this.name}, code: ${this.code}, quantity: ${this.quantity}, price: ${this.price}`;
    // console.log(info);
    return info;
  }
}
