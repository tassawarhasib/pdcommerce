import { getCartProductFromLS } from "./getCartProduct"

export const fetchQuantityFromCartLS = (id, price) => {
    let cartProcts = getCartProductFromLS();

    let existingProduct = cartProcts.find((curProd) => curProd.id === id);

    let quantity = 1;

    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return { quantity, price };
};