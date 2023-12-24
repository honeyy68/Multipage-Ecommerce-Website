
// ///////////////////// counter


const endDate = "28 December 2023 06:50:33 PM";

document.getElementById("end-date").innerText=endDate;

const inputs = document.querySelectorAll(".input");

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff/ 3600 / 24);
    inputs[1].value = Math.floor(diff/ 3600 )% 24;
    inputs[2].value = Math.floor(diff/ 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock()

setInterval(
    () =>{
        clock();
    },
    1000
)




// ////////////////////////  scrolling +  animation ////////////


ScrollReveal().reveal(".container" , {

    origin:"bottom",
    distance:"20px",
    opacity:0,


});



ScrollReveal().reveal(".navbar" , {

    origin:"bottom",
    distance:"20px",
    opacity:0,
    delay:100,

});

ScrollReveal().reveal(".header-section" , {

    origin:"bottom",
    distance:"20px",
    opacity:0,
    delay:200,

});

ScrollReveal().reveal(".same" , {

    origin:"bottom",
    distance:"20px",
    opacity:0,
    duration:3000,
    delay:100,

});

ScrollReveal().reveal("footer" , {

    origin:"bottom",
    distance:"20px",
    opacity:0,
    duration:2000,
    delay:100,

});





//////////////////  stars  rating ////////////////////





var stars = document.querySelectorAll(".stars a");


stars.forEach((item , index1) =>{
    item.addEventListener("click" , () =>{

        stars.forEach((star , index2) => {
            index1 >= index2 ? star.classList.add('activ'): star.classList.remove('activ');

        })


    })
})





//////////////////////  ADD TO CART////////////////

const  AddToCart = document.querySelectorAll(".add-to-cart");

AddToCart.forEach((button) => {
    button.addEventListener("click" , () =>{

        const  id = button.getAttribute("data-id")
        const  title = button.getAttribute("data-title")
        const  image = button.getAttribute("data-image")
        const  price = button.getAttribute("data-price")


        const cartItem = {id , title , image , price};

        const cart = JSON.parse(localStorage.getItem("carttt")) || [];
        cart.push(cartItem);
        localStorage.setItem("carttt" , JSON.stringify(cart));

    })
})