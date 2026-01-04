
// script.js - Enhanced Version

let cart = 0;

// --- 3.i Improved Form Validation -------------------------------
function validateForm() {
  const email = document.getElementById('email')?.value.trim();
  const msg = document.getElementById('formStatus');

  if (!email) {
    msg.innerHTML = 'Please enter an email address';
    msg.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    msg.innerHTML = 'Message Sent Successfully!';
    msg.style.color = 'green';
    document.getElementById('contactForm').reset();
  } else {
    msg.innerHTML = 'Please enter a valid email address';
    msg.style.color = 'red';
  }
}

// --- 3.ii Simple Cart Count -----------------------------
function addToCart() {
  cart++;
  updateCartDisplay();
  localStorage.setItem('cart', cart);
}

// --- Bonus: Clear Cart ------------------------------------
function clearCart() {
  cart = 0;
  updateCartDisplay();
  localStorage.setItem('cart', 0);
}

// Helper to update all cart counters on the page
function updateCartDisplay() {
  const counters = document.querySelectorAll('#cartCount, #cartCountPage');
  counters.forEach(el => el && (el.innerText = cart));
}

// --- Load cart & theme on page load -----------------------
window.onload = function () {
  // Load cart
  cart = parseInt(localStorage.getItem('cart')) || 0;
  updateCartDisplay();

  // 3.iii Greeting + Date
  const hour = new Date().getHours();
  let greet = 'Good Evening';
  if (hour < 12) greet = 'Good Morning';
  else if (hour < 18) greet = 'Good Afternoon';

  const greetingEl = document.getElementById('greeting');
  const dateEl = document.getElementById('date');
  if (greetingEl) greetingEl.innerText = greet;
  if (dateEl) dateEl.innerText = new Date().toDateString();

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
};

// --- 3.iv Theme Toggle with Persistence ------------------
function toggleTheme() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
