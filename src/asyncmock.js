const productos = [
    { id: "1", nombre: "Manzana", precio: 1000, img: "../img/manzana.jpg", idCat: "2" },
    { id: "2", nombre: "Naranja", precio: 800, img: "../img/naranja.png", idCat: "2" },
    { id: "3", nombre: "Cebolla", precio: 500, img: "../img/cebolla.jpg", idCat: "3" },
    { id: "4", nombre: "Papa", precio: 600, img: "../img/papa.jpg", idCat: "3" }
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}