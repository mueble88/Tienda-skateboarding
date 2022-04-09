

// arreglo de productos de tablas

export function llenarProductosTablas(){
    let tablas=[
        {foto:"../imgCarrito/tabla1.jpg",     texto:"Tabla Element 8.5",             precio:"$" +180000},
        {foto:"../imgCarrito/tabla2.jpg",     texto:"Tabla Cliché 8.25",             precio:"$" +180000},
        {foto:"../imgCarrito/tabla3.jpg",     texto:"Tabla Bird House 8.5",          precio:"$" +160000},
        {foto:"../imgCarrito/tabla4.jpg",     texto:"Tabla Santa Cruz 8.06",         precio:"$" +180000},
        {foto:"../imgCarrito/tabla5.jpg",     texto:"Tabla Almost 8.38",             precio:"$" +190000},
        {foto:"../imgCarrito/tabla6.jpg",     texto:"Tabla Element 8.25",            precio:"$" +180000},
        {foto:"../imgCarrito/tabla7.jpg",     texto:"Tabla Santa Cruz 8.38",         precio:"$" +180000},
        {foto:"../imgCarrito/tabla8.jpg",     texto:"Tabla Ripndip 8.06",            precio:"$" +150000},
        {foto:"../imgCarrito/tabla9.jpg",     texto:"Tabla Primitive 8.25",          precio:"$" +200000},
        {foto:"../imgCarrito/tabla12.jpg",    texto:"Tabla Globe Ramones 8.06",      precio:"$" +200000},
        {foto:"../imgCarrito/tabla11.jpg",    texto:"Tabla Primitive DBZ 8.25",      precio:"$" +200000},
        {foto:"../imgCarrito/tabla10.jpg",    texto:"Tabla Especial Jason Lee 8.8",  precio:"$" +260000},
        {foto:"../imgCarrito/tabla14.jpg",    texto:"Tabla Santa Cuz Cruiser 8.9",   precio:"$" +250000},
        {foto:"../imgCarrito/tabla15.jpg",    texto:"Tabla Cruiser Be Bamboo",       precio:"$" +320000},
        {foto:"../imgCarrito/tabla13.jpg",    texto:"Tabla mini Cruiser simpsom",    precio:"$" +280000},
    ]

    let filaTabla = document.getElementById("filaTablas");

    tablas.forEach(function(producto){
        // se crea columna
        let columna = document.createElement("div")
        columna.classList.add("col")

        // se crea la card
        let card = document.createElement("div")
        card.classList.add("card")

        // se crea imagen
        let img = document.createElement("img")
        img.classList.add("card-img-top")
        img.src = producto.foto

        // se crea contenido
        let texto = document.createElement("p")
        texto.classList.add("text-center","pt-3","mb3")
        texto.textContent = producto.texto

        // se crea precio
        let precio = document.createElement("h3")
        precio.classList.add("text-center","mb-3")
        precio.textContent = producto.precio

        // se crea boton
        let boton = document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-3","mb-4", "mt-2")
        boton.textContent = "Agregar producto"

        // ordenar contenido
        card.appendChild(img)
        card.appendChild(texto)
        card.appendChild(precio)
        card.appendChild(boton)
        columna.appendChild(card)
        filaTabla.appendChild(columna)

    });
}




// arreglo de productos de tablas

export function llenarProductosTrucks(){
    let trucks=[
        {foto:"../imgCarrito/truck1.jpg",       texto:"Trucks Independent 8.25",        precio:"$" +290000},
        {foto:"../imgCarrito/truck2.jpg",       texto:"Trucks Independent stage 8.25",  precio:"$" +300000},
        {foto:"../imgCarrito/truck4.jpg",       texto:"Trucks venture 8.6",             precio:"$" +210000},
        {foto:"../imgCarrito/truck3.jpg",       texto:"Trucks animal.co 8.38",          precio:"$" +240000},
        {foto:"../imgCarrito/llanta4.jpg",      texto:"Llantas simple.co 56mm",         precio:"$" +50000},
        {foto:"../imgCarrito/llanta1.jpg",      texto:"Llantas spitfire classics 53mm", precio:"$" +80000},
        {foto:"../imgCarrito/llanta2.jpg",      texto:"Llantas michael scott 54mm",     precio:"$" +90000},
        {foto:"../imgCarrito/llanta3.jpg",      texto:"Llantas spitfire f1 55mm",       precio:"$" +90000},
        {foto:"../imgCarrito/rodamiento1.jpg",  texto:"Rodamientos sushi colors AB-9",  precio:"$" +60000},
        {foto:"../imgCarrito/rodamiento2.jpg",  texto:"Rodamientos  AB-5",              precio:"$" +40000},
        {foto:"../imgCarrito/rodamiento3.jpg",  texto:"Rodamientos  AB-7",              precio:"$" +40000},
        {foto:"../imgCarrito/gorra1.jpg",       texto:"Gorra thrasher",                 precio:"$" +40000},
        {foto:"../imgCarrito/gorra2.jpg",       texto:"Gorra thrasher",                 precio:"$" +50000},
        {foto:"../imgCarrito/gorra3.jpg",       texto:"Gorra DC",                       precio:"$" +60000},
        {foto:"../imgCarrito/gorra4.jpg",       texto:"Gorra vans",                     precio:"$" +50000},

    ]

    let filaTabla = document.getElementById("filaTrucks");

    trucks.forEach(function(producto){
        // se crea columna
        let columna = document.createElement("div")
        columna.classList.add("col")

        // se crea la card
        let card = document.createElement("div")
        card.classList.add("card","carta1")

        // se crea imagen
        let img = document.createElement("img")
        img.classList.add("card-img-top")
        img.src = producto.foto

        // se crea contenido
        let texto = document.createElement("p")
        texto.classList.add("text-center","pt-3","mb3")
        texto.textContent = producto.texto

         // se crea descripcion
         let contenido = document.createElement("p")
         contenido.classList.add("text-center","pt-3","mb3")
         contenido.textContent = producto.texto
         contenido.hidden=true

        // se crea precio
        let precio = document.createElement("h3", "mb-3")
        precio.classList.add("text-center", "pt-3")
        precio.textContent = producto.precio

        // se crea boton
        let boton = document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-3","mb-4", "mt-2")
        boton.textContent = "Agregar producto"

        // ordenar contenido
        card.appendChild(img)
        card.appendChild(texto)
        card.appendChild(precio)
        card.appendChild(boton)
        columna.appendChild(card)
        filaTabla.appendChild(columna)

    });
}






