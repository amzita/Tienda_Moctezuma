// Definimos un arreglo para almacenar los productos
const products = [];

// Función para agregar un nuevo producto al arreglo
function addProduct(name, imageUrl, price) {
  products.push({
    name: name,
    imageUrl: imageUrl,
    price: price
  });
}

// Agregar el producto de ejemplo al arreglo
addProduct("Carrusel con caballos, Made in Germany", "https://i.etsystatic.com/25302541/r/il/80bb5e/4350901612/il_794xN.4350901612_63l1.jpg", 95.00);

// Función para mostrar los productos en la página
function displayProducts() {
  const productListElement = document.getElementById("productList");

  products.forEach(product => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class="product-card">
        <figure class="card-banner">
          <img src="${product.imageUrl}" width="189" height="189" loading="lazy" alt="${product.name}">
          <div class="btn-wrapper">
            <button class="product-btn" aria-label="Add to Whishlist">
              <ion-icon name="heart-outline"></ion-icon>
              <div class="tooltip">Add to Whishlist</div>
            </button>
            <button class="product-btn" aria-label="Quick View">
              <ion-icon name="eye-outline"></ion-icon>
              <div class="tooltip">Quick View</div>
            </button>
          </div>
        </figure>
        <div class="rating-wrapper">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
        <h3 class="h4 card-title">
          <a href="./product-details.html">${product.name}</a>
        </h3>
        <div class="price-wrapper">
          <data class="price" value="${product.price}">$${product.price.toFixed(2)}</data>
        </div>
        
      </div>
    `;

    productListElement.appendChild(listItem);
  });
  /**aqui es el segundo */
  
}

// Llamamos a la función para mostrar los productos en la página
displayProducts();

  
  


  







  

