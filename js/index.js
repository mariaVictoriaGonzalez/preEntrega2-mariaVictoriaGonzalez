function saludar() {
    alert("Bienvenid@ a Sakura Store!")
}

saludar()

const productos = [
    { nombre: "Figura Hitsune Miku:", codigo: "f0234", precio: 2990, categoria: "figuras" },
    { nombre: "Manga Jujutsu Kaisen:", codigo: "m1991", precio: 2000, categoria: "mangas" },
    { nombre: "Figura Naruto Shipuden:", codigo: "f5836", precio: 2750, categoria: "figuras" }
]

let productosElegidos = []
procesarCompra()
function procesarCompra() {
    do {
        llenarCarrito()
        respuestaCompra = confirm("Desea agregar otro producto al carrito?")
    } while (respuestaCompra);

    cerrarCompra()
}

function llenarCarrito() {
    let eleccion = prompt("Productos disponibles: Figura Hitsune Miku: codigo: f0234, precio: $2990 | Manga Jujutsu Kaisen: codigo: m1991, precio: 2000, Figura Naruto Shipuden: codigo: f5836, precio: 2750. Ingresa el codigo del producto.")
        let productoElegido = productos.find((producto) => producto.codigo === eleccion)
        if (productoElegido !== undefined) {
            productosElegidos.push(productoElegido)
        }else {
            alert("Codigo incorrecto! Intenta de nuevo.")
        }
}


function cerrarCompra() {
    const totalCompra = productosElegidos.reduce((acc, productoElegido) => acc + productoElegido.precio, 0)

    console.log("Los productos elegidos son: ")
    console.table(productosElegidos)
    console.log("El total de su compra es: $" + totalCompra)
    console.log("Gracias por tu compra!")
}

