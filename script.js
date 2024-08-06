// script.js

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'product3.jpg' },
    // Add more products as needed
];

// Shopping cart
let cart = [];

// Wishlist
let wishlist = [];

// Function to display products
function displayProducts() {
    const productList = document.querySelector('#product-list .row');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                        <button onclick="addToWishlist(${product.id})" class="btn btn-secondary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
    }
}

// Function to add product to wishlist
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !wishlist.find(p => p.id === productId)) {
        wishlist.push(product);
        updateWishlistUI();
    }
}

// Function to update cart UI
function updateCartUI() {
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = cart.length;
}

// Function to update wishlist UI
function updateWishlistUI() {
    const wishlistCount = document.querySelector('#wishlist-count');
    wishlistCount.textContent = wishlist.length;
}

// Function to handle search
function handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayFilteredProducts(filteredProducts);
}

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
    const productList = document.querySelector('#product-list .row');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        // Use the same product card structure as in displayProducts()
        // ...
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    document.querySelector('form').addEventListener('submit', handleSearch);
});

// Simulated personalization
function personalizeUser() {
    const username = localStorage.getItem('username');
    if (username) {
        document.querySelector('#user-greeting').textContent = `Welcome back, ${username}!`;
    }
}

// Call to Action button functionality
document.querySelector('.cta-button').addEventListener('click', () => {
    // Implement CTA action (e.g., scroll to products, open signup form)
});

// Simple form validation example
function validateForm(event) {
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
}

// Attach form validation to all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', validateForm);
});

// Initialize personalization
personalizeUser();