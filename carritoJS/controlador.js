// importamos modulos

import {llenarProductosTablas} from "./productos.js";
import {llenarProductosTrucks } from "./productos.js";
import {ampliarInfoTablas } from "./ampliarInfo.js";
import {ampliarInfoTrucks } from "./ampliarInfo.js";
import {pintarCarrito } from "./pintarCarrito.js";

llenarProductosTablas();
llenarProductosTrucks();

 // VARIABLES GLOBALES...  
 let producto = {} // crear un objeto vacio
 let carrito=[]

// llamando el modulo de pintar
let contenedorTablas = document.getElementById("filaTablas")
contenedorTablas.addEventListener("click", function(event){
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('infoproductoTablas'))
    producto = ampliarInfoTablas(event)
    modalinfoproducto.show()
})

// crear un objeto vacio
// let producto1 = {}
// llamando el modulo de pintar
let contenedorTrucks = document.getElementById("filaTrucks")
contenedorTrucks.addEventListener("click", function(event){
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('infoproductoTrucks'))
    producto = ampliarInfoTrucks(event)
    modalinfoproducto.show()
})


// dectetar la accion de añadir al carrito
// carrito es un arreglo de productos(arreglo de objetos)

let boton = document.getElementById("anyadir")
boton.addEventListener('click',function(evento){   
    // 1. capturar la cantidad del producto
    let cantidad = document.getElementById("cantidadProducto").value
    // 2. agrego la cantidad al objeto producto
    producto.cantidad=cantidad
    //agregar el producto al carrito
    carrito.push(producto)
    // calcular la sumatoria de cantidad
    let suma=0   
    carrito.forEach(function(producto){
        suma = suma + Number(producto.cantidad) 
        pintarCarrito(suma)
    })
    infoproductoTablas.hide()
})

// boton limpiar carrito
let botonLimpiar = document.getElementById("limpiar")
botonLimpiar.addEventListener('click',function(event){
    let capsula = document.getElementById("capsula")
    capsula.classList.add("invisible")
    carrito=[]
})

// boton cancelar producto del carrito
let cancelarProducto = document.getElementById("cancelar")
cancelarProducto.addEventListener('click',function(event){
    let cantidad = 0
    producto.cantidad = cantidad
    carrito.push(producto)
})



//4. ver resumen de compra
let botonCarrito = document.getElementById("botoncarrito")
botonCarrito.addEventListener("click",function(evento){
    
    let contenedor = document.getElementById("contenedorventa")
    let modalVenta = new bootstrap.Modal(document.getElementById('resumencarrito'))

    // Borrar el contenido HTML de una seccion
    contenedor.innerHTML="" //esto es para que no me repita los productos y los duplique

    //recorrer el carrito para pintar los productos de factura
    carrito.forEach(function(producto){
        //TRAVERSING
        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12", "col-md-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-12", "col-md-8")

        let foto= document.createElement("img")
        foto.classList.add("img-fluit", "w-100")
        foto.src = producto.foto

        let nombre = document.createElement("h3")
        nombre.classList.add("text-start","fs-4","pb-5")
        nombre.textContent = producto.nombre

        let cantidad = document.createElement("h3")
        cantidad.classList.add("text-start","fs-4","pb-5")
        cantidad.textContent = producto.cantidad

        let precio = document.createElement("h3")
        precio.classList.add("text-start","fs-4","pb-5")
        precio.textContent = producto.precio

        // PADRES E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(cantidad)
        columna2.appendChild(precio)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)
    })

    modalVenta.show()

})





