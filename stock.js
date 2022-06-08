import {products} from ".";
//function declaration + destructuring
function CLEAR_STOCK(){
    let products = null;
}

function ADD_PRODUCT({ myitemType: t, myColor: c, mySize: s, myPrice: p }) {
    products.push({
        itemType: t,
        color: c,
        size: s,
        price: p
    });
}

//function expressions
const DELETE_PRODUCT = function(myIndex){
    products.splice(myIndex, 1);
}

const DELETE_LAST_PRODUCT = function(){
    products.pop();
}

function ADD_FIRST_PRODUCT({ myitemType: t, myColor: c, mySize: s, myPrice: p }) {
    products.unshift({
        itemType: t,
        color: c,
        size: s,
        price: p
    });
}

const DELETE_FIRST_PRODUCT = function(){
    products.shift();
}

const EDIT_PRODUCT = function(myIndex, myParameter, myValue){
    products[myIndex].myParameter = myValue;
}

//export
export {CLEAR_STOCK, ADD_PRODUCT, DELETE_PRODUCT, DELETE_LAST_PRODUCT, EDIT_PRODUCT, ADD_FIRST_PRODUCT, DELETE_FIRST_PRODUCT};