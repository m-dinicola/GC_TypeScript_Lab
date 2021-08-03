//Q1__________________________________________________________________
interface Mountain{
    name:string;
    height:number;
}

const mountains:Mountain[] = [
    {name:"Kilimanjaro", height:19341},
    {name:"Everest",height:29029},
    {name:"Denali",height:20310}
]

function findNameOfTallestMountain (_mountains:Mountain[]):string {
    if (_mountains.length === 0) return null;
    return _mountains.sort((a,b)=>b.height-a.height)[0].name;
}

const tallMountain = findNameOfTallestMountain(mountains);
console.log(tallMountain);

//Q2___________________________________________________________________

interface Product{
    name:string;
    price:number;
}

const products:Product[] = [
    { name: "Ray's Chips", price: 1 },
    { name: "Baja Blast", price: 2 },
    {name: "Gummi worms", price: 1.75},
    {name: "hotdog", price: 2},
    {name:"Snickers", price: 1.59},
    {name: "Take 5", price: 1.25},
    {name: "Snickers", price: 1},
    {name: "Pop-Tarts", price: 2},
    {name:"potatochips", price:2},
    {name: "Chips", price: 2},
    {name:"Coffee", price:.99}
]

function calcAverageProductPrice (products:Product[]):number {
    let total:number = 0;
    products.forEach(p => total+=p.price )
    return total/products.length;
}

const avg = calcAverageProductPrice(products);
console.log(avg);

//Q3____________________________________________________________________

interface InventoryItem {
    product:Product;
    quantity:number;
}

const inventory:InventoryItem[] = [
    {product:{name:"motor",price:10},quantity:10},
    {product:{name:"sensor",price:12.5},quantity:4},
    {product:{name:"LED",price:1},quantity:20}
]

function calcInventoryValue(inventory:InventoryItem[]):number{
    let total:number = 0;
    inventory.forEach(i=>total+=i.product.price*i.quantity);
    return total;
}

const invTotal = calcInventoryValue(inventory);
console.log(invTotal);
//should be 170