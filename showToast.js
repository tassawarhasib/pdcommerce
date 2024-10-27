export function showToast(operation, id) {
    const toast = document.createElement('div');
    toast.classList.add("toast");

    // Set the text content of the toast based on the operation
    if (operation === "add") {
        toast.textContent = `Product with ID ${id} has been added.`;
    }
    else if (operation === "warning") {
        toast.textContent = "Product already in the cart.";
    }
    else {
        toast.textContent = `Product with ID ${id} has been deleted.`;
    }

    document.body.appendChild(toast);

    // Automatically remove the toast after 2 sec
    setTimeout(() => {
        toast.remove();
    }, 2000);


}