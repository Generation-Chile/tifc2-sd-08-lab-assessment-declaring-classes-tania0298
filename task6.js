// tarea6.js
function ShoppingList(items) {
  this.items = items;
}

const numItems = parseInt(process.argv[2]);
const shoppingItems = [];
for (let i = 0; i < numItems; i++) {
  const item = process.argv[3 + i * 2];
  const qty = parseInt(process.argv[4 + i * 2]);
  shoppingItems.push({ item, quantity: qty });
}
const myShoppingList = new ShoppingList(shoppingItems);
console.log(myShoppingList.items);
