import { DELETE_PRODUCT as del} from "../../stock";
import { cart } from ".";
import { products } from ".";

//arrow function
const ADD_TO_CART = function(myIndex){
    cart.push(products[myIndex]);
    del(myIndex);
}

const REMOVE_FROM_CART = function(myIndex){
    products.push(cart[myIndex]);
    cart.splice(myIndex, 1);
}

const CLEAR_CART = function() {
    let cart = null;
}

//map
const CHECKOUT = function() {
    //оператор нулевого слияния
    let res = cart ?? "Your cart is empty. Please add items to the cart.";

    //строгое сравнение
    if (res === cart){
        console.log(cart.map((item) => `${item.itemType} in ${item.color} color and size ${item.size} for ${item.price} tenge.`));
        sum = 0;

        for (i = 0; i < cart.length; i ++){
            sum += cart[i].price;
        }

        console.log(`Total: ${sum}`);
    }
    else{
        console.log(res);
    }
    let cart = null;
}
    
export {ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT, CLEAR_CART};