// ===== MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== FILTER PRODUCTS =====
const filterButtons = document.querySelectorAll('.filter-buttons button');
const products = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    products.forEach(product => {
      if(filter === 'all' || product.classList.contains(filter)){
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});