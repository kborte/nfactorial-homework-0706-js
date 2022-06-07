import { DELETE_PRODUCT as del} from "../../stock";
import { cart } from ".";
import { products } from ".";

//arrow function
const ADD_TO_CART = (myIndex) =>
    cart.push(products[myIndex]);
    del(myIndex);

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
}
    
export {ADD_TO_CART, CHECKOUT};