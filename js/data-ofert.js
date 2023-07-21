let productos_precio_normal = [
    {
        img: "https://i.etsystatic.com/25302541/r/il/80bb5e/4350901612/il_794xN.4350901612_63l1.jpg",
        Precio: "Q95.00",
        nombre: "Carrusel con caballos, Made in Germany",
    },
    {
        img: "https://i.etsystatic.com/15363173/r/il/b88ebb/5079695610/il_794xN.5079695610_844q.jpg",
        Precio: "$105.00",
        nombre: "Lavado ANTIGUO",
    },
    {
        img: "https://i.etsystatic.com/25900084/r/il/2b01e9/3028036610/il_794xN.3028036610_nvgt.jpg",
        Precio: "$200.00",
        nombre: "ZOOTROPO. El origen del Gif animado",
    },
    {
        img: "https://i.etsystatic.com/5242358/r/il/5001e5/3928052631/il_794xN.3928052631_1ya1.jpg",
        Precio: "Q95.00",
        nombre: "Maleta de viaje para niños vintage",
    },
    {
        img: "https://i.etsystatic.com/8797736/r/il/a434fa/3507971156/il_794xN.3507971156_bf2m.jpg",
        Precio: "Q95.00",
        nombre: "RARE Vintage 1948-50 ZONA DE EE.UU",
    },
    {
        img: "https://i.etsystatic.com/6136564/r/il/d25b12/4568811738/il_794xN.4568811738_ff16.jpg",
        Precio: "Q75.00",
        nombre: "Juego de Té",
    },
    {
        img: "https://i.etsystatic.com/21262066/r/il/d1bed6/3835513991/il_794xN.3835513991_spnk.jpg",
        Precio: "Q55.00",
        nombre: "Tres trompos",
    },
    {
        img: "https://i.etsystatic.com/31945761/r/il/1af6a0/4321705201/il_794xN.4321705201_ojcf.jpg",
        Precio: "Q105.00",
        nombre: "Planet Robot Tin Toy Robby the Robot Forbiddeny",
    },

];

function displayProducts() {
    const koyaDiv = document.getElementById("koya");

    productos_precio_normal.forEach((producto) => {
        const productDiv = document.createElement("div");

        // Create elements to display product information
        const nameElement = document.createElement("h2");
        nameElement.textContent = producto.nombre;
        productDiv.appendChild(nameElement);

        const priceElement = document.createElement("p");
        priceElement.textContent = "Precio: " + producto.Precio;
        productDiv.appendChild(priceElement);

        const imgElement = document.createElement("img");
        imgElement.src = producto.img;
        productDiv.appendChild(imgElement);

        // Create a button for each product
        const button = document.createElement("button");
        button.textContent = "Ver detalles";
        button.addEventListener("click", () => {
            // You can add a function here to perform some action when the button is clicked
            console.log("Button clicked for: ", producto.nombre);
        });
        productDiv.appendChild(button);

        // Add the product div to the koyaDiv
        koyaDiv.appendChild(productDiv);
    });
}


