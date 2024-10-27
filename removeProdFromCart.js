import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // Update the local Storage after removing the item
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    //  to remove the div onclick
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
        showToast("delete", id);
    }
    updateCartValue(cartProducts);
};   