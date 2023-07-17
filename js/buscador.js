function addToCart(button) {
    // Obtener el contenedor del producto
    var productCard = button.closest('.product-card');

    // Obtener los detalles del producto
    var title = productCard.querySelector('.card-title a').innerText;
    var price = productCard.querySelector('.price').getAttribute('value');

    // Crear el objeto del producto
    var product = {
      title: title,
      price: price
    };

    // Agregar el producto a la canasta (puedes implementar tu lógica aquí)
    console.log('Producto agregado:', product);
  }
  
  