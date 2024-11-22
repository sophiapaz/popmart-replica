//Plan:
//1. Make the counter of the bag go up when a button is clicked
//2. make a carousel for the products
const counterDisplayElem = document.getElementById('cart-counter');
let addToBag = document.getElementById('add-to-bag');
let count = 0;

/*
addToBag.addEventListener("click",()=>{
    count++;
    counterDisplayElem.textContent = count; //displaying the number
});
*/

// trying to do a carousel
let element1 = document.getElementById('product-team-one');
let element2 = document.getElementById('product-team-two');

let nextSlide = document.getElementById('right-btn');
let prevSlide =document.getElementById('left-btn');

nextSlide.addEventListener("click",()=>{
    console.log("button clicked!");
    element1.style.display='none';
    element2.style.display='flex';
});

prevSlide.addEventListener("click",()=>{
    console.log("button clicked!");
    element2.style.display='none';
    element1.style.display='flex';
});