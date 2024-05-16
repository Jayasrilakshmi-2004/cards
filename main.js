

const countdownDate = new Date("2024-06-01T00:00:00").getTime();

const countdownTimer = setInterval(() => {

  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("countdown").innerHTML = `SALES ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;


  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000); 

const itemList = [
    {id:0, image:"choker.jpeg" ,name:"DESIGNED CHOKER", price:4000,rating:3.7},
    {id:1, image:"download.jpeg" ,name:"BANGLE", price:200,rating:2.5},
    {id:2, image:"image" ,name:" EARRINGS", price:700,rating:3.8},
    {id:3, image:"images.jpeg",name:"SIMPLE NECKLACE", price:200,rating:3},
    {id:4, image:"neckchain.jpeg",name:"NECK CHAIN ", price:500,rating:2},
    {id:5, image:"neckchoker.jpeg" ,name:"CHOKER", price:5000,rating:4.5},
    {id:6, image:"bracelett.jpeg" ,name:"BRACELETT",price:5500,rating:3.9},
    {id:7, image:"bangles.jpeg" ,name:"METAL BANGLES", price:5500,rating:4.1},
    {id:8, image:"jhumkas.jpeg" ,name:"METAL JHUMKAS", price:5500,rating:4.5},
    {id:9, image:"earringss.jpeg" ,name:"METAL EARRINGS", price:5500,rating:3.5},
    {id:10, image:"simplechain.jpeg" ,name:"SIMPLE CHAIN FOR NECK", price:5500,rating:4.5},
];
let listItems = "";
itemList.map((item) => {
    listItems += `
    <div class="col-lg-4">
        <div class="cards-items">
            <img src=${item.image} alt=${item.name}>
            <div class="cards-content py-3 text-center">
                <h6><span>Name:-</span> ${item.name} </h6>
                <p><span>Price:-</span> ${item.price}</p>
                <p><span>Rating:-</span> ${item.rating}</p>
                <button onClick = "addToCartButton(${item.id})">Add to cart</button>
                <i class="fa-regular fa-heart icon" onClick = "wishList(${item.id})"></i>
            </div>
        </div>
    </div>
    `
    document.querySelector(".cards-list").innerHTML = listItems;
});

// Cart list
const cartShow = document.querySelector(".cart");

// Increment quantity function
function incrementQuantity(id) {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
        cartItems[index].quantity++;
        // Update total price
        totalPrice += cartItems[index].price;
        updateCartDisplay();
    }
}

// Decrement quantity function
function decrementQuantity(id) {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--;
            // Update total price
            totalPrice -= cartItems[index].price;
            updateCartDisplay();
        }
    }
}

function cartIcon() {
    cartShow.classList.toggle("cart-active");
    if (cartItems.length === 0) {
        document.querySelector(".list-empty").innerHTML = "Please add some items here......";
    } else {
        let data = ''
        cartItems.map((item) => {
            data += `
            <div class="cart-list" data-id="${item.id}">
                <img src=${item.image} alt=${item.name}>
                <div>
                    <button onclick="decrementQuantity(${item.id})">-</button>
                    <p>${item.quantity}</p>
                    <button onclick="incrementQuantity(${item.id})">+</button>
                </div>
                <div class="cards-content py-3 ">
                    <h6><span>Name:-</span> ${item.name} </h6>
                    <p><span>Price:-</span> ${item.price}</p>
                </div>
                <i class="fa-solid fa-xmark" onclick="buttonDelete(${item.id})"></i>
            </div>
            `
        });
        document.querySelector(".list-empty").innerHTML = data;
    };
};

// Initialize total price variable and cartItems array
let totalPrice = 0;
let cartItems = [];

// Add to cart button
function addToCartButton(id) {
    const selectedItems = itemList.find((items) => items.id === id);
    if (selectedItems) {
        const findIndex = cartItems.findIndex((items) => items.id === id);
        if (findIndex !== -1) { 
            document.querySelector(".toast-notification").classList.add("toast-notification-active");
            setTimeout(() => {
                document.querySelector(".toast-notification").classList.remove("toast-notification-active");
            }, 2000);
        } else {
            // Initialize quantity to 1 when adding item to cart
            selectedItems.quantity = 1;
            cartItems.push(selectedItems);
            // Add item price to total price
            totalPrice += selectedItems.price;
        };
    };
    document.querySelector('.quantity').innerText = cartItems.length;
    // Update cart quantity and total price display
    updateCartDisplay();
};

// Remove item from the cart
function buttonDelete(id) {
    const card = document.querySelector(`[data-id="${id}"]`);
    card.style.display = "none";
    // Find item index in cart
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
        // Subtract item price multiplied by quantity from total price
        totalPrice -= cartItems[index].price * cartItems[index].quantity;
        // Remove item from cart
        cartItems.splice(index, 1);
    }
    // Update cart quantity and total price display
    updateCartDisplay();
};

// Update cart quantity and total price display
function updateCartDisplay() {
    document.querySelector(".quantity").innerText = cartItems.length;
    document.querySelector(".total-price").innerText = "Total :- " + totalPrice;
}



localStorage.setItem("myCat", "tom");

document.querySelector(".head").innerHTML = localStorage.getItem("myCat");













// function validateForm() {
//   // Get form inputs
//   const username = document.getElementById("username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Reset previous error messages
//   document.getElementById("usernameError").innerHTML = "";
//   document.getElementById("emailError").innerHTML = "";
//   document.getElementById("passwordError").innerHTML = "";

//   let isValid = true;

//   // Validate username
//   if (username === "") {
//     document.getElementById("usernameError").innerHTML = "Username is required";
//     isValid = false;
//   }

//   // Validate email
//   if (email === "") {
//     document.getElementById("emailError").innerHTML = "Email is required";
//     isValid = false;
//   } else if (!isValidEmail(email)) {
//     document.getElementById("emailError").innerHTML = "Invalid email format";
//     isValid = false;
//   }

//   // Validate password
//   if (password === "") {
//     document.getElementById("passwordError").innerHTML = "Password is required";
//     isValid = false;
//   } else if (password.length < 4) {
//     document.getElementById("passwordError").innerHTML = "password is very weak";
//     isValid = false;

//   }else if (password.length < 7) {
//     document.getElementById("passwordError").innerHTML = "password is filled with atleast 7 characters";
//     isValid = false;
// } else if (!isStrongPassword(password)) {
//     document.getElementById("passwordError").innerHTML = "Password must be strong";
//     isValid = false;
//   }

//   return isValid;
// }

// // Helper function to validate email format
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   // Helper function to check if password is strong
//   function isStrongPassword(password) {
//     // Check if password contains at least one uppercase letter, one lowercase letter, one number, and one special character
//     const uppercaseRegex = /[A-Z]/;
//     const lowercaseRegex = /[a-z]/;
//     const numberRegex = /[0-9]/;
//     const specialCharRegex = /[^A-Za-z0-9]/;
    
//     return uppercaseRegex.test(password) &&
//            lowercaseRegex.test(password) &&
//            numberRegex.test(password) &&
//            specialCharRegex.test(password);
//   }



  
