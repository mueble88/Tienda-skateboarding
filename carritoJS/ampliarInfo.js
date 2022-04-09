export function ampliarInfoTablas(event){
    let producto= {}

    if(event.target.classList.contains("btn")){
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            texto:event.target.parentElement.querySelector("p").textContent,
            precio:event.target.parentElement.querySelector("h3").textContent,
        }

        let foto = document.getElementById("fotoinfo")
        foto.src = producto.foto
        let texto = document.getElementById("textoinfo")
        texto.textContent = producto.texto
        let precio = document.getElementById("precioinfo")
        precio.textContent = producto.precio
        let imput = document.getElementById("cantidadProducto")
        imput.textContent = 1

        return producto
    }   
}
/* document.getElementById("fotoinfo").src = producto.foto;
    document.getElementById("nombreinfo").textContent = producto.nombre;
    document.getElementById("precioinfo").textContent = producto.precio;
    document.getElementById("tamaño").textContent = producto.tamaño;
    document.getElementById("stock").textContent = producto.stock;
    document.getElementById("cantidadProducto").value = 1 */

export function ampliarInfoTrucks(event){
    let producto= {}

    // event.target.document.getElementById("boton")
    // if(event.target.classList.contains("btn"))
    if(event.target.classList.contains("btn")){
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            texto:event.target.parentElement.querySelector("p").textContent,
            precio:event.target.parentElement.querySelector("h3").textContent,
        }
        console.log(producto)

        let foto = document.getElementById("fotoinfo1")
        foto.src = producto.foto
        let texto = document.getElementById("textoinfo1")
        texto.textContent = producto.texto
        let precio = document.getElementById("precioinfo1")
        precio.textContent = producto.precio

        return producto
    }
}


