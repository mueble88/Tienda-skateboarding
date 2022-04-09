
// Arreglo de objetos
let cards = [
    {img:"../img/card1.jpg",  contenido:"Skaters del año y los más famosos"},
    {img:"../img/card2.jpg",  contenido:"Como armar tu tabla"}, 
    {img:"../img/card3.jpg",  contenido:"Videos más famosos"},
]

let acercade = document.getElementById("acercade");

// recorrer arreglo
cards.forEach(function(card){
    console.log(card)

    // creo la columna
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creo la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")


    //creo la imagen
    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src=card.img


    // creo mensaje
    let texto=document.createElement("a")
    texto.classList.add("card-text","text-center","fs-5","pb-5", "mt-5")
    texto.textContent=card.contenido;
    

    //2. ordenar la estructura
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(texto)
    columna.appendChild(tarjeta)
    acercade.appendChild(columna)


    // tarjeta.appendChild(imagen)
    // columna.appendChild(tarjeta)
    // acercade.appendChild(columna)

    // columna2.appendChild(titulo)
    // tarjeta.appendChild(columna2)
    // columna.appendChild(tarjeta)
    // acercade.appendChild(columna)
})

