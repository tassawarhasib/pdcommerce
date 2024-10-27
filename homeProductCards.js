import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productsContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector('#productTemplate');


export const showProductsContainer = (products) => {

    if (!products) return false;

    products.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } = curProd;

        // ! Cloning template
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute("id", `card${id}`);

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${Math.round((price * 2.4) * 100) / 100}`;

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock);
        })

        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        });

        productsContainer.append(productClone);

    });

};