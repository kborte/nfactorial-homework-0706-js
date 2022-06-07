//accessing object properties with []
import { products } from "./Shop";

//filter + not strict comparison + map
const FILTER_PRODUCTS = function(parameter, value){
    let filtered = products.filter(product => product[parameter] == value);
    console.log(filtered.map((item) => `${item.itemType} in ${item.color} color and size ${item.size} for ${item.price} tenge.`));
}

const ADD_FILTER = () => {
    let filtered2 = filtered.filter(product => product[parameter] === value);
    console.log(filtered2.map((item) => `${item.itemType} in ${item.color} color and size ${item.size} for ${item.price} tenge.`));
    //spread
    let filtered = [...filtered2];
}
export {FILTER_PRODUCTS, ADD_FILTER};