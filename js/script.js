// ===== NAVBAR MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// hero
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let current = 0;
let autoSlide;

// Create Dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[current].classList.add("active");
}

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  updateDots();
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

function goToSlide(index) {
  current = index;
  showSlide(current);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

document.querySelector(".hero").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".hero").addEventListener("mouseleave", startAutoSlide);

showSlide(current);
startAutoSlide();
// -----------------------
// ===== CART =====
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const clearCartBtn = document.getElementById('clear-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
let cart = [];

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
});
closeCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});
clearCartBtn.addEventListener('click', () => {
  cart = [];
  updateCart();
});

const addCartBtns = document.querySelectorAll('.add-cart');
addCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const productCard = btn.parentElement;
    const name = productCard.querySelector('h3').innerText;
    const price = parseInt(productCard.querySelector('p').innerText.replace(/[^0-9]/g, ''));
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement('div');
    div.innerText = `${item.name} - ${item.price} EGP`;
    cartItemsContainer.appendChild(div);
  });
  cartCount.innerText = cart.length;
  cartTotal.innerText = `Total: ${total} EGP`;
}

// ===== PRODUCT FILTER =====
const filterBtns = document.querySelectorAll('.filter-buttons button');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    productCards.forEach(card => {
      card.style.display = (filter === 'all' || card.classList.contains(filter)) ? 'block' : 'none';
    });
  });
});

// ===== COUNTERS =====
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = target / 200;
    if(current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 15);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// ===== SCROLL TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});