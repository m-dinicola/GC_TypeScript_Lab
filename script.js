var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(_mountains) {
    if (_mountains.length === 0)
        return null;
    return _mountains.sort(function (a, b) { return b.height - a.height; })[0].name;
}
var tallMountain = findNameOfTallestMountain(mountains);
console.log(tallMountain);
var products = [
    { name: "Ray's Chips", price: 1 },
    { name: "Baja Blast", price: 2 },
    { name: "Gummi worms", price: 1.75 },
    { name: "hotdog", price: 2 },
    { name: "Snickers", price: 1.59 },
    { name: "Take 5", price: 1.25 },
    { name: "Snickers", price: 1 },
    { name: "Pop-Tarts", price: 2 },
    { name: "potatochips", price: 2 },
    { name: "Chips", price: 2 },
    { name: "Coffee", price: .99 }
];
function calcAverageProductPrice(products) {
    var total = 0;
    products.forEach(function (p) { return total += p.price; });
    return total / products.length;
}
var avg = calcAverageProductPrice(products);
console.log(avg);
var inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var total = 0;
    inventory.forEach(function (i) { return total += i.product.price * i.quantity; });
    return total;
}
var invTotal = calcInventoryValue(inventory);
console.log(invTotal);
//should be 170
