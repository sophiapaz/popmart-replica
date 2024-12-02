// add to cart feature
const counterDisplayElem = document.getElementById('cart-counter');
let addToBagButton = document.getElementById('add-to-bag');
let count = 0;


addToBagButton.addEventListener("click",()=>{
    count++;
    counterDisplayElem.textContent = count; //displaying the number
});

// picture hover feature
const thumbnails = document.querySelectorAll(".thumbnail");
const bigPicture = document.getElementById("bigPicture");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        bigPicture.src = thumbnail.src; // Update the big picture
        
        thumbnails.forEach(thumb => {
            thumb.style.border = '2px solid transparent';
        });

        thumbnail.style.border = '2px solid red';
    });
});

// details buttons 
const toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const dropdown = document.querySelectorAll('.detailsDropdown')[index];
        dropdown.classList.toggle('active');
    });
});
