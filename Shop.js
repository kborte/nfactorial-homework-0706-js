let cart = [];

let shopInfo = {
    shopName: "Balenciaga", 
    openingHour: 9, 
    closingHour: 20
}

//rest operator
let {firstName, age, ...otherInfo} = {
    firstName: "Dalida",
    age: 29,
    profession: "cashier"
}

let products = [{
    itemType: "T-shirt",
    color: "white",
    size: 1,
    price: 3000
}, {
    itemType: "Dress",
    color: "green",
    size: 2,
    price: 15000
}, {
    itemType: "T-shirt",
    color: "green",
    size: 2,
    price: 3500
}, {
    itemType: "Cap",
    color: "red",
    size: 1,
    price: 4000
}, {
    itemType: "T-shirt",
    color: "white",
    size: 1,
    price: 3000
}, {
    itemType: "Dress",
    color: "green",
    size: 2,
    price: 15000
}
]

console.log(products);

const sortedProducts = products.sort((a, b) => {
    if (a.price > b.price) {
        return -1;
    } else {
        return 1;
    }
});

console.log(products);

export {products, cart, shopInfo, firstName, age, otherInfo};

import { ADD_TO_CART, CHECKOUT } from "./cart.js";
import { moreInfo } from "./more info.js";
import { FILTER_PRODUCTS, ADD_FILTER } from "./filter.js";
import { rateShop } from "./rating.js";
import { greeting as greet } from "./greeting.js";
import { FILTER_PRODUCTS as filter } from "./filter.js";
import { SALE_PRICES } from "./sale.js";
import { ADD_PRODUCT as add, ADD_FIRST_PRODUCT as addFirst, DELETE_PRODUCT as del, DELETE_FIRST_PRODUCT as delFirst, DELETE_LAST_PRODUCT as delLast, EDIT_PRODUCT as edit} from "./stock.js";