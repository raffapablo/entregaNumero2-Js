const Miformulario = document.getElementById('formularios');
const carrito = document.getElementById('carritoForm');
const toggleCarritoButton = document.getElementById('toggleCarrito');
const Carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const URLapi = 'https://jsonplaceholder.typicode.com/todos/?_limit=10'
const comentariosCont = document.getElementById("comentarios")
const error = 'Hubo un error al obtener los usuarios'

function spawnDeFormulario() {
    const contenedor = document.createElement('div');
    const inputNombre = document.createElement('input');
    const inputApellido = document.createElement('input');
    const inputMail = document.createElement('input');
    const inputDNI = document.createElement('input');
    const buttonEnviar = document.createElement('button');
    const buttonSeguirComprando = document.createElement('button');
    const contenedorDeButtons = document.createElement('div')

    contenedor.classList.add('carritoContFormulario');
    inputNombre.classList.add('titulo-item-3');
    inputApellido.classList.add('titulo-item-3');
    inputMail.classList.add('titulo-item-3');
    inputDNI.classList.add('titulo-item-3');
    buttonEnviar.classList.add('boton-2');
    buttonSeguirComprando.classList.add('boton-2')
    contenedorDeButtons.classList.add('boton-2Cont')

    contenedorDeButtons.appendChild(buttonEnviar)
    contenedorDeButtons.appendChild(buttonSeguirComprando)

    inputNombre.placeholder = 'Nombre';
    inputApellido.placeholder = 'Apellido';
    inputMail.placeholder = 'Email';
    inputDNI.placeholder = 'DNI';
    buttonEnviar.innerText = "finalizar";
    buttonSeguirComprando.innerHTML = `<a href="../proyecto/nuestrosProductos.html">Seguir comprando</a>`

    buttonEnviar.addEventListener("click", () => {
        const nombre = inputNombre.value;
        const apellido = inputApellido.value;
        const email = inputMail.value;
        const dni = inputDNI.value;
        if(nombre === '' || apellido === ''|| email === ''|| dni === ''){
            mostrarAlertaCampoVacio()
        }
        else{
            mostrarAlertDeConfirmacion(nombre, apellido);
        }
    });

   

    contenedor.appendChild(inputNombre);
    contenedor.appendChild(inputApellido);
    contenedor.appendChild(inputMail);
    contenedor.appendChild(inputDNI);
    contenedor.appendChild(contenedorDeButtons);


    return contenedor;
}

const appendchieldFormulario = spawnDeFormulario();
Miformulario.appendChild(appendchieldFormulario);

function spawnDeCarrito(titulo, precio, cantidad, id) {
    const contenedorDeCarrito = document.createElement("div");
    const tituloDeArticulo = document.createElement("p");
    const precioDeArticulo = document.createElement("p");
    const imageDOM = document.createElement("img");
    const cantidadDelArticulo = document.createElement("p");
    const totalXProducto = document.createElement('p');

    contenedorDeCarrito.classList.add("carritoContForm");
    tituloDeArticulo.classList.add("titulo-item-1");
    precioDeArticulo.classList.add("titulo-item-1");
    cantidadDelArticulo.classList.add("titulo-item-2");
    imageDOM.classList.add("imgCardCart");
    totalXProducto.classList.add('titulo-item-1');

    const total = precio * cantidad;



    imageDOM.src = `./${id}`;
    tituloDeArticulo.innerText = titulo;
    precioDeArticulo.innerText = `$${precio}`;
    cantidadDelArticulo.innerText = `Unidades: ${cantidad} ($${precio})`;
    totalXProducto.innerText = `$${total}`;

    contenedorDeCarrito.appendChild(imageDOM);
    contenedorDeCarrito.appendChild(tituloDeArticulo);
    contenedorDeCarrito.appendChild(cantidadDelArticulo);
    contenedorDeCarrito.appendChild(totalXProducto);

    return contenedorDeCarrito;
}

function actualizarCarrito() {
    carrito.innerHTML = '';

    if (Carrito.length === 0) {
        mostrarMensaje();
        return;
    }

    Carrito.forEach(el => {
        carrito.appendChild(spawnDeCarrito(el.titulo, el.precio, el.cantidad, el.id));
    });



    localStorage.setItem("carrito", JSON.stringify(Carrito));
}

function mostrarMensaje() {
    const mensaje = document.createElement('p');
    mensaje.classList.add('titulo-item-3');
    mensaje.innerText = '¡UPS! Parece que no has agregado ningún artículo al carrito.';
    carrito.appendChild(mensaje);
    localStorage.clear();
}

function mostrarAlertDeConfirmacion (nombre){
   const form = document.getElementById("carritoForm")
    carritoForm.innerHTML = '' 
    if(form.style.display === "none" === "block"){
        form.style.display = "none"
    }
    Swal.fire({
        title: `GRACIAS ${nombre}  POR SU COMPRA`,
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: "volver al inicio",
        position: "top",
        scrollbarPadding: false, 
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html';
        }
      })
      localStorage.clear()

}

function mostrarAlertaCampoVacio (){
    Swal.fire({
        title: `No ingreso los datos correctamente, verifique que ningun campo este vacio.`,
        icon: 'info',
        showConfirmButton: true,
        position: "top",
})}

actualizarCarrito();

async function llamadoraDeApi (url){
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}
llamadoraDeApi(URLapi)

async function traerUsuarios() {
    try {
        const usuarios = await llamadoraDeApi(URLapi);
        if (usuarios) {
            usuarios.forEach(el => {
                spawnDeComentarios(el.userId, el.title); 
                console.log(el.title);
            });
        } 
    } catch (error) {
        console.error(error);
    }
}

 function spawnDeComentarios (usuario, comentario){
    const contenedor = document.createElement('div')
    const usuarioDOM = document.createElement('p')
    const comentarioDOM = document.createElement('p')

    contenedor.classList.add('cardComentarios')
    usuarioDOM.classList.add('titulo-item-comentarios')
    comentarioDOM.classList.add('contenido-item-comentarios')

    usuarioDOM.innerText = `Usuario: #${usuario} dijo:`
    comentarioDOM.innerText = `"${comentario}"`

    contenedor.appendChild(usuarioDOM)
    contenedor.appendChild(comentarioDOM)

   comentariosCont.appendChild(contenedor)
    return contenedor
 }

 traerUsuarios()

 








