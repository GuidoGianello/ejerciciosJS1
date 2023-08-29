function saludar(nombre) {
    let saludo = "Hola, " + nombre + " esto es javascript"
    console.log(saludo)
}
saludar("Guido")

function multiplicar(num1, num2) {
    return num1 * num2
}

let resultado1 = multiplicar(2, 3)
let resultado2 = multiplicar(2, 4)

console.log("Resultado 1:", resultado1)
console.log("Resultado 2:", resultado2)

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    let area = (baseTriangulo * alturaTriangulo) / 2
    return area
}
let baseTriangulo = 5
let alturaTriangulo = 3
let resultadoArea = areaTriangulo(baseTriangulo, alturaTriangulo)
console.log("El area de un triangulo con base 5 y altura 3 es: ", resultadoArea)

function perimetroTriangulo(lado1, lado2, lado3) {
    let perimetro = lado1 + lado2 + lado3
    return perimetro
}
let lado1 = 4
let lado2 = 5
let lado3 = 6
let resultadoPerimetro = perimetroTriangulo(lado1, lado2, lado3)
console.log("El perimetro del triangulo es de: " + resultadoPerimetro)

function calcularPrecio(precio, cantidad) {
    let precioTotal = precio * cantidad
    if (cantidad >= 20) {
        precioTotal *= 0.8
    }
    else if (cantidad >= 10) {
        precioTotal *= 0.9
    }
    return precioTotal
}

let precioProducto = 100
let cantidadProductos = 8

let precioFinal = calcularPrecio(precioProducto, cantidadProductos)

console.log("El precio de la compra es: " + precioFinal)

function esMayorDeEdad(edad) {
    let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad"
    return mensaje
}

let edadPersona1 = 20
let edadPersona2 = 17

console.log("Persona 1:", esMayorDeEdad(edadPersona1))
console.log("Persona 2:", esMayorDeEdad(edadPersona2))

function calcularImpuesto(ingresoAnual) {
    let impuesto
    if (ingresoAnual <= 10000) {
        impuesto = ingresoAnual * 0.1
    }
    else if (ingresoAnual <= 20000) {
        impuesto = ingresoAnual * 0.15
    }
    else {
        impuesto = ingresoAnual * 0.2
    }
    return impuesto
}

let ingresoPersona1 = 8000
let ingresoPersona2 = 15000
let ingresoPersona3 = 25000

console.log("Impuesto Persona 1:", calcularImpuesto(ingresoPersona1))
console.log("Impuesto Persona 2:", calcularImpuesto(ingresoPersona2))
console.log("Impuesto Persona 3:", calcularImpuesto(ingresoPersona3))

