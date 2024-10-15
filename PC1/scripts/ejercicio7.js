let carrito = [];
let totalCompra = 0;

function agregarCarrito(nombreProducto, precio) {
    carrito.push({ nombre: nombreProducto, precio: precio });
    totalCompra += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoUl = document.getElementById('carrito');
    carritoUl.innerHTML = '';
    
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${producto.nombre} - S/${producto.precio}`;
        carritoUl.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: S/${totalCompra.toFixed(2)}`;
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
    } else {
        alert('Compra realizada con éxito');
        carrito = [];
        totalCompra = 0;
        actualizarCarrito();
    }
}
