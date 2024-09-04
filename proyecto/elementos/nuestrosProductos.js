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
    },
    {
        id: 9,
        image: './image/9.jpg',
        title: 'ALGODÓN',
        description: 'Pack x100 unidades bolsas de algodón 30x40 personalizadas.',
        price: 130.00
    },
    {
        id: 10,
        image: './image/10.jpg',
        title: 'YUTE',
        description: 'Pack x50 unidades bolsas de yute 40x50 personalizadas.',
        price: 140.00
    },
    {
        id: 11,
        image: './image/11.jpg',
        title: 'RAFIA',
        description: 'Pack x200 unidades bolsas de rafia 20x30 personalizadas.',
        price: 110.00
    },
    {
        id: 12,
        image: './image/12.jpg',
        title: 'KRAFT',
        description: 'Pack x100 unidades bolsas de papel kraft 25x35 personalizadas.',
        price: 100.00
    },
    {
        id: 13,
        image: './image/13.jpg',
        title: 'NEOPRENO',
        description: 'Pack x50 unidades bolsas de neopreno 30x40 personalizadas.',
        price: 160.00
    },
    {
        id: 14,
        image: './image/14.jpg',
        title: 'TERCIOPILO',
        description: 'Pack x30 unidades bolsas de terciopelo 20x30 personalizadas.',
        price: 180.00
    },
    {
        id: 15,
        image: './image/15.jpg',
        title: 'MICROFIBRA',
        description: 'Pack x100 unidades bolsas de microfibra 25x30 personalizadas.',
        price: 140.00
    },
    {
        id: 16,
        image: './image/16.jpg',
        title: 'FIELTRO',
        description: 'Pack x50 unidades bolsas de fieltro 20x25 personalizadas.',
        price: 130.00
    },
    {
        id: 17,
        image: './image/17.jpg',
        title: 'VINIL',
        description: 'Pack x100 unidades bolsas de vinil 30x40 personalizadas.',
        price: 150.00
    },
    {
        id: 18,
        image: './image/18.jpg',
        title: 'ECOMMERCE',
        description: 'Pack x200 unidades bolsas ecommerce 25x30 personalizadas.',
        price: 170.00
    },
    {
        id: 19,
        image: './image/19.jpg',
        title: 'FIBRA DE COCO',
        description: 'Pack x50 unidades bolsas de fibra de coco 30x40 personalizadas.',
        price: 160.00
    },
    {
        id: 20,
        image: './image/20.jpg',
        title: 'DE REGALO',
        description: 'Pack x30 unidades bolsas de regalo 20x25 personalizadas.',
        price: 120.00
    }
];



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
        agregarAlCarrito (titulo, precio, imagen, id), mostrarAlertDeConfirmacion(titulo)
        })
    
    
    
    cardContainer.appendChild(titleDOM)
    cardContainer.appendChild(imageDOM)
    cardContainer.appendChild(descriptionDOM)
    cardContainer.appendChild(priceDOM)
    cardContainer.appendChild(buttonDOM)
    return cardContainer
    }
    
    const todosLosProductos = product.reverse()

    todosLosProductos.forEach(el => {
        
        const miProducto = generadoraDeCards(el.title, el.image, el.description, el.price, el.id)
        productos.appendChild(miProducto)
    })
    
    
    
    
    
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
    
    
    
    function actualizarCarrito (){
        carrito.innerHTML = ''
    
        const mensaje = document.createElement('p')
        mensaje.classList.add('titulo-item-3')
        mensaje.innerText = '¡UPS!   parece que no has agregado ningun articulo al carrito.'
    
        const totalAPagar = document.createElement('a')
        totalAPagar.classList.add("titulo-item-3")
        
        const total = Carrito.reduce((acc, el) =>{
            return acc + el.cantidad * el.precio
        }, 0)
       
       totalAPagar.innerHTML = `<a class:"titulo-item-3" href="../proyecto/formulario.html"> Finalizar compra</a>`
        
        Carrito.forEach(el => {
            carrito.appendChild(spawnDeCarrito (el.titulo, el.precio, el.cantidad, el.id))
            carrito.appendChild(totalAPagar)
            localStorage.setItem("carrito", JSON.stringify(Carrito))
        })
        mostrarMensaje(mensaje)
    }
    
    
    function spawnDeCarrito (titulo, precio, cantidad, id){
    
    
        const contenedorDeCarrito = document.createElement("div")
        const tituloDeArticulo = document.createElement("p")
        const precioDeArticulo = document.createElement("p")
        const imageDOM  = document.createElement("img")
        const cantidadDelArticulo = document.createElement("p")
        const sumarUnidad = document.createElement("button")
        const restarUnidad = document.createElement("button")
        const totalXProducto = document.createElement('p')
    
        contenedorDeCarrito.classList.add("carritoCont")
        tituloDeArticulo.classList.add("titulo-item-1")
        precioDeArticulo.classList.add("titulo-item-1")
        cantidadDelArticulo.classList.add("titulo-item-2")
        sumarUnidad.classList.add("boton")
        restarUnidad.classList.add("boton")
        imageDOM.classList.add("imgCardCart")
        totalXProducto.classList.add('titulo-item-1')

        const total = precio * cantidad
    
        sumarUnidad.addEventListener("click",() => {buttonSumar (id) })
        restarUnidad.addEventListener("click",() => {buttonRestar (id) })
    
    
        imageDOM.src = `./${id}`
        tituloDeArticulo.innerText = titulo
        precioDeArticulo.innerText = `$${precio}`
        sumarUnidad.innerText = '+'
        restarUnidad.innerText = '-'
        if(cantidad == 1){
            restarUnidad.innerText= "x"
        }
        cantidadDelArticulo.innerText = `Unidades: ${cantidad} ($${precio})`
        totalXProducto.innerText = `$${total}`
        
        
        contenedorDeCarrito.appendChild(imageDOM)
        contenedorDeCarrito.appendChild(sumarUnidad)
        contenedorDeCarrito.appendChild(restarUnidad)
        contenedorDeCarrito.appendChild(tituloDeArticulo)
        contenedorDeCarrito.appendChild(cantidadDelArticulo)
        contenedorDeCarrito.appendChild(totalXProducto)
    
    
        return contenedorDeCarrito
    }
    
    
    function toggleCarrito() {
         
        if (carrito.style.display === "none" || carrito.style.display === "") {
            carrito.style.display = "block";
            document.getElementById("toggleCarrito").innerHTML = '<img src="./image/cancelar.png" alt=""></img>';
        } else {
            carrito.style.display = "none";
            document.getElementById("toggleCarrito").innerHTML = '<img src="./image/carrito-de-compras.png" alt=""></img>'
        }
    }
    
    document.getElementById("toggleCarrito").addEventListener("click", toggleCarrito);
    
    
    function buttonSumar(id) {
        const producto = Carrito.find(el => el.id === id);
        if (producto) {
            producto.cantidad += 1;
        }
        actualizarCarrito();
    }
    function buttonRestar(id) {
        const producto = Carrito.find(el => el.id === id);
    
        if (producto.cantidad <= 1) {
            const index = Carrito.findIndex(el => el.id === id);
            Carrito.splice(index, 1);
        } else {
            producto.cantidad -= 1;
        }
    
        actualizarCarrito();
    }
    actualizarCarrito()
    
    
    
    function mostrarMensaje (mensaje){
        document.getElementById("carrito")
    
        if(Carrito.length === 0){
            carrito.appendChild(mensaje)
            localStorage.clear()
        }
    }
    
    function mostrarAlertDeConfirmacion (titulo){
        document.getElementById("toggleCarrito")
         Swal.fire({
            title: `bolsa de ${titulo} fue agregada al carrito`,
            icon: 'success',
            toast: true,
            showConfirmButton: false,
            position: "top",
            timer: 2000,
            scrollbarPadding: false, 
            timerProgressBar: true,
            
          })
        
    }

    function spawnDeFiltros(){
        const contenedor = document.createElement('div')
        const botonA = document.createElement('button')
        const botonB = document.createElement('button')
        const botonC = document.createElement('button')
        const botonD = document.createElement('button')
        const botonE = document.createElement('button')
        const botonF = document.createElement('button')

        contenedor.classList.add("filterCont")
        botonA.classList.add('boton1')
        botonB.classList.add('boton1')
        botonC.classList.add('boton1')
        botonD.classList.add('boton1')
        botonE.classList.add('boton1')
        botonF.classList.add('boton1')

        botonA.innerText = 'Orden alfabetico de  A - Z'
        botonB.innerText = 'Orden alfabetico de de Z - A'
        botonC.innerText = 'Menor precio'
        botonD.innerText = 'Mayor precio'

        botonA.addEventListener("click", ()=> {ordenarDeAaZ(product)})
        botonB.addEventListener("click", ()=> {ordenarDeZaA(product)})
        botonC.addEventListener("click", ()=> {ordenarPrecioMenorAMayor(product)})
        botonD.addEventListener("click", ()=> {ordenarPrecioMayorAMenor(product)})

        contenedor.appendChild(botonA)
        contenedor.appendChild(botonB)
        contenedor.appendChild(botonC)
        contenedor.appendChild(botonD)
        return contenedor
    }

    const misFiltros = spawnDeFiltros()
    filtros.appendChild(misFiltros)

    function toggleFiltros() {
        
        const filtros = document.getElementById("filtros");
        const botonToggle = document.getElementById("toggleFiltros");
        
        if (filtros.style.display === "none" || filtros.style.display === "") {
            filtros.style.display = "block";
            botonToggle.innerText = `    x    `; 
        } else {
            filtros.style.display = "none";
            botonToggle.innerText = 'filtrar por :'; 
        }
    }
    if(filtros.style.display === 'none'){
        spawnDeFiltros.style.display = 'none'
    }
    document.getElementById("toggleFiltros").addEventListener("click", toggleFiltros);

    function ordenarDeAaZ (array){
        productos.innerHTML = ''
        const arrayModificado =  array.sort((a, b) => a.title.localeCompare(b.title))
           
        arrayModificado.forEach(el =>{
            const miArray = generadoraDeCards(el.title, el.image, el.description, el.price, el.id)
            productos.appendChild(miArray)
            })
       
    }

    function ordenarDeZaA (array){
        productos.innerHTML = ''
        const arrayModificado =  array.sort((a, b) => b.title.localeCompare(a.title))
           
        arrayModificado.forEach(el =>{
            const miArray = generadoraDeCards(el.title, el.image, el.description, el.price, el.id)
            productos.appendChild(miArray)
            })
       
    }
    
    function ordenarPrecioMenorAMayor(array){
        productos.innerHTML = ''
        const arrayModificado =  array.sort((a, b) => a.price- b.price)
           
        arrayModificado.forEach(el =>{
            const miArray = generadoraDeCards(el.title, el.image, el.description, el.price, el.id)
            productos.appendChild(miArray)
            })
       
    }
    
    function ordenarPrecioMayorAMenor (array){
        productos.innerHTML = ''
        const arrayModificado =  array.sort((a, b) => b.price- a.price)

        arrayModificado.forEach(el =>{
            const miArray = generadoraDeCards(el.title, el.image, el.description, el.price, el.id)
            productos.appendChild(miArray)
            })
       
    }

    
    
    
    