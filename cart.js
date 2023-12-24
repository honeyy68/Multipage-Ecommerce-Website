const cartItems = document.querySelector(".cart-item");


function  displayCartItem(){
    const items = JSON.parse(localStorage.getItem("carttt"));
    items.forEach((item) => {
        
        const cartItem = document.createElement("div");
        cartItem.className="cart-item";
        cartItem.innerHTML= `
                          <p class="prod-id"> ${item.id}</p>
                            <span class="cart-item-title">${item.title}</span>
                            <img src="${item.image}" alt="" class="cart-img">
                            <div class="cart-item-price">${item.price}</div>
   
                        <button>Delete</button>

        `;
        cartItems.appendChild(cartItem);


    });

}

displayCartItem();