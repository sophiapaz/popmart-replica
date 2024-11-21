//Plan:
//1. Make the counter of the bag go up when a button is clicked
//2. make a carousel for the products
const counterDisplayElem = document.getElementById('cart-counter');
let addToBag = document.getElementById('add-to-bag');
let count = 0;

addToBag.addEventListener("click",()=>{
    count++;
    counterDisplayElem.textContent = count; //displaying the number
});



// trying to do a carousel
