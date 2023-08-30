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

console.log("Ejercicio 7")

function verificarDia(numeroSemana) {
    
    switch(numeroSemana) {
        case 1: 
            console.log("Es dia laboral")
        break
        case 2:
            console.log("Es dia laboral")
        break
        case 3:
            console.log("Es dia laboral")
        case 4:
            console.log("Es dia laboral")
            break
        case 5:
            console.log("Es dia laboral")
            break
        case 6:
            console.log("No es dia laboral")
            break
        case 7:
            console.log("No es dia laboral")
    }

}

verificarDia(1)
verificarDia(7)

// Ejercicio condicionales //

function mayorQue(num1, num2) {
    if(num1 > num2) {
        console.log(num1 + " es mayor que: " + num2)
    }
    else {
        console.log(num1 + " no es mayor que: " + num2)
    }
}

mayorQue(5,4)

function comparaNums(num1, num2) {
    if(num1 == num2) {
        console.log("Los numeros son iguales")
    }
    else {
        console.log("Los numeros son desiguales")
    }
}

comparaNums(1, 1)
comparaNums(1, 2)

function cualNum(num1, num2) {
    if(num1 > num2) {
        console.log(`El ${num1} es mayor que ${num2}`)
    } else if(num1 == num2) {
        console.log("Los numeros son iguales")
    } else {
        console.log(`El ${num2} es mayor que ${num1}`)
    }
    
}

cualNum(3, 2)
cualNum(3, 3)
cualNum(3, 4)

function numChico(num1, num2, num3) {
    if(num1 < num2 && num1 < num3) {
        console.log("El primer numero es el menor de los tres numeros")
    } else if(num2 < num1 && num2 < num3) {
        console.log("El segundo numero es el menor de los tres numeros")
    } else {
        console.log("El tercer numero es el menor de los tres numeros")
    }
}

numChico(1, 2, 3)
numChico(2, 1, 3)
numChico(4, 3, 2)


let persona1 = {
    nombre: "Guido",
    edad: 31,
    altura: 1.80
}
let persona2 = {
    nombre: "Isaac",
    edad: 32,
    altura: 1.81
}

function masAlto(persona1, persona2) {
    if(persona1.altura > persona2.altura) {
        console.log(persona1.nombre + " es mas alto que " + persona2.nombre)
    } else {
        console.log(persona2.nombre + " es mas alto que " + persona1.nombre)
    }
}
function masEdad(persona1, persona2) {
    if(persona1.edad > persona2.edad) {
        console.log(persona1.nombre + " es mayor que " + persona2.nombre)
    } else {
        console.log(persona2.nombre + " es mayor que " + persona1.nombre)
    }
}
masAlto(persona1, persona2)
masEdad(persona1, persona2)

let datosPersona = {
    nombre : prompt("Ingrese su nombre:"),
    edad : Number( prompt("Ingrese su edad:") ),
    altura : Number( prompt("Ingrese su altura") ),
    vision : Number( prompt("Ingrese su puntaje de vision") )
}

function carnetConducir(datosPersona) {
    if(datosPersona.edad >= 18 && datosPersona.altura >= 1.50 && datosPersona.vision >= 8) {
        console.log("Usted esta capacitado para conducir")
    } else {
        console.log("Usted no esta capacitado para conducir")
    }
}

carnetConducir(datosPersona)