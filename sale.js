import { products } from ".";

const SALE_PRICES = function(salePortion, minimumPrice){
    let i = 0;
    while ((products[i] * (100 - salePortion) / 100) > minimumPrice) {
        products[i] = products[i] * (100 - salePortion) / 100;
    }
}

export {SALE_PRICES};