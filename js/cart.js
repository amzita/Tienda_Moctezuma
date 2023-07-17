// Obtener referencias a los elementos necesarios
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
const cartIcon = document.querySelector('.header-action-btn ion-icon');

// Agregar evento click a cada botón "Add to Cart"
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

// Función para agregar un producto al carrito
function addToCart(event) {
  // Obtener el título y el precio del producto
  const productCard = event.target.closest('.product-card');
  const title = productCard.querySelector('.card-title a').textContent;
  const price = productCard.querySelector('.price').getAttribute('value');

  // Crear el objeto del producto
  const product = {
    title: title,
    price: price
  };

  // Obtener los productos del carrito del almacenamiento local
  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  // Agregar el producto al carrito
  cartItems.push(product);

  // Guardar los productos actualizados en el almacenamiento local
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Actualizar el ícono del carrito para reflejar la cantidad de productos en el carrito
  updateCartIcon(cartItems.length);
}

// Función para actualizar el ícono del carrito
function updateCartIcon(quantity) {
  cartIcon.setAttribute('data-badge', quantity);
}
