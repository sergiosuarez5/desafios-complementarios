// Sergio Suarez

// Simulador Carrito 

const equipos = [
    {
        id: 1,
        marca: "GooglePixel",
        precio: 340,
        descripcion: "GooglePixel 6 Pro. Sistema operativo móvil Android 12.",
        stock: true
    },
    {
        id: 2,
        marca: "Apple Iphone",
        precio: 990,
        descripcion: "Apple iPhone 13 Pro 1tb , Sistema operativo móvil IOS.",
        stock: false
    },
    {
        id: 3,
        marca: "Samsung",
        precio: 500,
        descripcion: "Samsung Galaxy S22 Ultra , Sistema operativo móvil Android 12 con One UI 4.1",
        stock: true
    }
];

alert('¡Bienvenido a tu Carrito de compras! \nDonde verás lo mas TOP del mercado.');

let opcion;
let busqueda = () => {
    opcion = parseInt(prompt("¿Que te gustaria hacer? \n 1. Ver detalles de los productos. \n 2. Comprar nuestros productos. \n 3. Ver el producto mas barato. \n 4. Aplicar un Descuento. \n 5. Agregar un Producto. \n 6. Eliminar Producto. \n 7. Salir."))
}

let corroborarStock = () => {
    const resultado = equipos.filter( equipo => equipo.id == opcionCompra)
    for(const corredor of resultado){
        if(corredor.stock == true){
            return true // Hay Stock
        }else{
            return false // No hay
        }
    }
}

let verEquipos = () => {
    for(let productos of equipos){
        if(productos.stock==false){
            console.log(`Marca: ${productos.marca} \n Precio: ${productos.precio} \n Descripcion: ${productos.descripcion} \n Sin Stock.`)
        }else{
            console.log(`Marca: ${productos.marca} \n Precio: ${productos.precio} \n Descripcion: ${productos.descripcion}`)
        }
        
    }
}

let descuento;
let total;

let aplicadorDescuento = () => {
    for(let productos of equipos){
        if(productos.id==opcionCompra){
            descuento = (productos.precio * 0.15) // sacamos el 15%
            total = productos.precio - descuento
            console.log(`Nombre: ${productos.nombre} \n Precio sin descuento: ${productos.precio} \n Precio con descuento: ${total}.`)
        }
    }
}

let opcionCompra;
let equipoMasBarato = "";
let precioMasBarato = equipos[0].precio;

while(opcion!=7){
    switch(opcion){
        case 1:
            verEquipos()
            break;
        case 2:
            opcionCompra = parseInt(prompt("¿Que Equipo deseas comprar 1 / 2 o 3?"));
            if(corroborarStock() == true){
                alert(`Felicidades Compraste el Equipo ${opcionCompra}`)
            }else{
                alert(`Lamentablemente no contamos con stock del Producto ${opcionCompra}`)
            }
            break;
        case 3:
            for (const masBarato of equipos){
                if(masBarato.precio < precioMasBarato){
                    precioMasBarato = masBarato.precio;
                    equipoMasBarato = masBarato.marca;
                }
            }
                console.log(`El Producto más barato es : ${equipoMasBarato} y cuesta $ ${precioMasBarato}`)
            break;
        case 4:
            verEquipos()
            do{
                opcionCompra = parseInt(prompt("¿A que Producto quieres aplicarle el descuento? 1, 2 o 3"))
            }while(opcionCompra != 1 && opcionCompra != 2 && opcionCompra != 3)
            
            codigoDescuento = parseInt(prompt("Codigo descuento: "));

            if (codigoDescuento % 10 == 4){ // Se cumple si el numero termina en 4
                aplicadorDescuento();
            }else{
                alert("Codigo invalido.");
            } 
            
            break;
        case 5:
            let marcaEquipoNuevo;
            let precioEquipoNuevo;
            let descripcionEquipoNuevo;
            let id = 3;
            do{
                marcaEquipoNuevo = prompt("Describir nombre del nuevo Producto.");
                precioEquipoNuevo = parseInt(prompt("Precio del nuevo Producto."));
                descripcionEquipoNuevo = prompt("Descripcion del nuevo Producto.");

                equipos.push({id: id + 1, nombre: marcaEquipoNuevo, precio: precioEquipoNuevo, descripcion: descripcionEquipoNuevo, stock: true})

                opcionCompra = prompt("¿Quieres seguir? \n Responde: \n ¿Si o No?").toUpperCase();
            }while(opcionCompra == "SI")

            verEquipos()
            break;
        case 6:
            verEquipos()
            opcionCompra = parseInt(prompt("¿Que Producto deseas eliminar?"))
            equipos.splice(opcionCompra - 1, 1); // opcionCompra - 1 ya que un usuario normal no sabria que los arreglos comienzan en 0 , por lo tanto si ponen 1 le va a eliminar el producto 2.
            for(let productos of equipos){
                console.log(`Nombre: ${productos.marca} \n Precio: ${productos.precio} \n Descripcion: ${productos.descripcion}.`)
            }
            break;
    }
    busqueda();
}

const divEquipos = document.querySelector('#equipos')

for(const corredor of equipos) {
    const equiposContainer = document.createElement('div');
    equiposContainer.classList.add('card')

    const parrafo1 = document.createElement('p');
    parrafo1.textContent = corredor.nombre
    const parrafo2 = document.createElement('p');
    parrafo2.textContent = corredor.descripcion
    const parrafo3 = document.createElement('p');
    parrafo3.textContent = corredor.precio

    equiposContainer.appendChild(parrafo1);
    equiposContainer.appendChild(parrafo2);
    equiposContainer.appendChild(parrafo3);

    divEquipos.appendChild(equiposContainer);
}