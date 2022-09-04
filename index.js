let nombre = prompt("Ingresa tu nombre")
let cantidad = 0 
let producto = ""
let precioTotal = 0

while (producto.toLowerCase() !== "esc") {
    producto = prompt("Ingresa el producto (cartera/reloj/billetera/zapatos) o esc para salir")

    if (producto.toLowerCase() !== "esc"){
        cantidad = prompt("Ingresa la cantidad de producto")
        if (cantidad > 0){
             precioTotal = precioTotal + compra(producto.toLowerCase(), cantidad)
        }
    }
    console.log("total " + precioTotal)
}

if (precioTotal == 0) {
    alert(nombre + " el producto elegido no se encuentra en el stock")
}else{
    alert(nombre + " el total de tu compra es " + precioTotal)
}

function compra(producto, cantidad){
    let total = 0
    let valor = 0
    switch(producto){
        case "cartera":
            valor = 500
            break
        
        case "reloj":
            valor = 370
            break

        case "billetera":
            valor = 180
            break

        case "zapatos":
            valor = 200
            break
        
        default:
            break
    }
    total = valor * cantidad
    return total
}
