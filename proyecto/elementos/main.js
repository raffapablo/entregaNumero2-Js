const productos = document.getElementById("productos")
const carrito = document.getElementById("carrito")
const Carrito = JSON.parse(localStorage.getItem("carrito")) || []
 


const product = [
    {
        id: 1,
        image: './image/1.jpg',
        title: 'POLIETILENO',
        description: 'Pack x200 unidades polietileno riñon 25x30 personalizadas.',
        price: 150.00
    },
    {
        id: 2,
        image: './image/2.jpg',
        title: 'RESIDUOS',
        description: 'Pack x50 unidades bolsa de residuos negra 60x60.',
        price: 75.00
    },
    {
        id: 3,
        image: './image/3.jpg',
        title: 'PAPEL COLOR',
        description: 'Pack x10 unidades papel riñon 30x30 personalizadas.',
        price: 120.00
    },
    {
        id: 4,
        image: './image/4.jpg',
        title: 'FRISELINA',
        description: 'Pack x200 unidades friselina riñón 15x20 personalizadas.',
        price: 200.00
    },
    {
        id: 5,
        image: './image/5.jpg',
        title: 'TELA PERSONALIZADA',
        description: 'Pack x200 unidades tela riñón 35x40 personalizadas.',
        price: 180.00
    },
    {
        id: 6,
        image: './image/6.jpg',
        title: 'NYLON',
        description: 'Pack x100 unidades nylon de color 150x200.',
        price: 90.00
    },
    {
        id: 7,
        image: './image/7.jpg',
        title: 'ARRANQUE PERSONALIZADA',
        description: 'Pack x3 bobinas nylon de arranque 15x20 personalizadas.',
        price: 50.00
    },
    {
        id: 8,
        image: './image/8.jpg',
        title: 'TIPO CAMISETA',
        description: 'Pack x200 unidades camisetas polietileno personalizadas..',
        price: 160.00
    }
];



function buttonSumar (titulo){
    const producto = Carrito.find(el => {
        return el.titulo === titulo
    })
    producto.cantidad +=1
    actualizarCarrito()
}

function agregarAlCarrito (titulo, precio, id){
    
    const booleanoDePrueba = Carrito.some(el => {
      return el.titulo === titulo
     })
     if(booleanoDePrueba){
  const producto = Carrito.find(el => {
      return el.titulo === titulo
  })
  producto.cantidad += 1
     }
   
     else{
      Carrito.push({
          id,
          titulo,
          precio,
          cantidad : 1
      })
     }
     
     actualizarCarrito ()
     
     
  }
  document.addEventListener("DOMContentLoaded",()=>{
    actualizarCarrito()
})


function buttonRestar (titulo){
    const producto = Carrito.find(el => {
        return el.titulo === titulo
    })

    if(producto.cantidad <= 1){
        let array = Carrito.map(el => {
            return el.titulo
        })

        let index = array.indexOf(titulo)

        Carrito.splice(index, 1)
    }else{
        producto.cantidad -= 1
}
actualizarCarrito()
}



function spawnDeCarrito (titulo, precio, cantidad, id){
    const contenedorDeCarrito = document.createElement("div")
    const tituloDeArticulo = document.createElement("p")
    const precioDeArticulo = document.createElement("p")
    const imageDOM  = document.createElement("img")
    const cantidadDelArticulo = document.createElement("p")
    const buttonContainer = document.createElement("div")
    const sumarUnidad = document.createElement("button")
    const restarUnidad = document.createElement("button")

    buttonContainer.classList.add("buttonCont")
    contenedorDeCarrito.classList.add("carritoCont")
    tituloDeArticulo.classList.add("titulo-item-1")
    precioDeArticulo.classList.add("titulo-item-1")
    cantidadDelArticulo.classList.add("titulo-item-2")
    sumarUnidad.classList.add("boton")
    restarUnidad.classList.add("boton")
    imageDOM.classList.add("imgCardCart")

    sumarUnidad.addEventListener("click",() => {buttonSumar (titulo) })
    restarUnidad.addEventListener("click",() => {buttonRestar (titulo) })


    imageDOM.src = `./${id}`
    tituloDeArticulo.innerText = titulo
    precioDeArticulo.innerText = `$${precio}`
    sumarUnidad.innerText = '+'
    restarUnidad.innerText = '-'
    if(cantidad == 1){
        restarUnidad.innerText= "x"
    }
    cantidadDelArticulo.innerText = `Unidades: ${cantidad}`

    contenedorDeCarrito.appendChild(imageDOM)
    contenedorDeCarrito.appendChild(sumarUnidad)
    contenedorDeCarrito.appendChild(restarUnidad)
    contenedorDeCarrito.appendChild(tituloDeArticulo)
    contenedorDeCarrito.appendChild(cantidadDelArticulo)
    contenedorDeCarrito.appendChild(precioDeArticulo)
    
   
    

    return contenedorDeCarrito
}
function actualizarCarrito (){
    carrito.innerHTML = ''
    const totalAPagar = document.createElement("p")
    totalAPagar.classList.add("titulo-item-3")
    const total = Carrito.reduce((acc, el) =>{
        return acc + el.cantidad * el.precio
    }, 0)
    totalAPagar.innerText = `Continuar con el pago     ($${total}) (funcionara en la proxima entrega)`
    Carrito.forEach(el => {
       
        carrito.appendChild(spawnDeCarrito (el.titulo, el.precio, el.cantidad, el.id))
        carrito.appendChild(totalAPagar)
        localStorage.setItem("carrito", JSON.stringify(Carrito))
    })
}

function generadoraDeCards ( titulo, imagen, descripcion, precio, id){

const cardContainer = document.createElement("div")
const titleDOM  = document.createElement("p")
const imgcontDOM = document.createElement("div")
const imageDOM  = document.createElement("img")
const pContainerDOM = document.createElement("div") 
const descriptionDOM  = document.createElement("p")
const priceDOM  = document.createElement("p")
const buttonDOM  = document.createElement("button")

cardContainer.classList.add("card")
titleDOM.classList.add("titulo-item")
imageDOM.classList.add("img-card")
descriptionDOM.classList.add("contenido-item")
priceDOM.classList.add("price")
buttonDOM.classList.add("button-card")


titleDOM.innerText = titulo
imageDOM.src = imagen
descriptionDOM.innerText = descripcion
priceDOM.innerText = `$${precio}`
buttonDOM.innerText = "AGREGAR AL CARRITO"
buttonDOM.addEventListener("click", () =>{
    agregarAlCarrito (titulo, precio, imagen, id)
    
})



cardContainer.appendChild(titleDOM)
cardContainer.appendChild(imageDOM)
cardContainer.appendChild(descriptionDOM)
cardContainer.appendChild(priceDOM)
cardContainer.appendChild(buttonDOM)
return cardContainer
}

product.forEach(el => {
    const miProducto = generadoraDeCards(el.title, el.image, el.description, el.price, el.id )
    productos.appendChild(miProducto)
})



