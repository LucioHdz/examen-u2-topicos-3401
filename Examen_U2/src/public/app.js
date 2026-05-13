const contenedor = document.getElementById("productos");

fetch("http://localhost:3000/products/leer")

.then(res => res.json())

.then(data => {

    data.forEach(producto => {

        contenedor.innerHTML += `

        <div class="tarjeta">

            <h2>${producto.nombre}</h2>

            <p>$ ${producto.precio}</p>

        </div>

        `;

    });

})