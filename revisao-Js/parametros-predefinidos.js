function calcularArea(base, altura, forma = 'Q') {
    switch (forma) {
        case 'Q': //Quadrilatero
            return base * altura
            break
        case 'T': //Triangulo
            return (base * altura) / 2
        case 'E': // Elipse
            return (base /2) * (altura/2)*Math.PI
    }
}

console.log(calcularArea(2, 3, 'Q'))
console.log(calcularArea(5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, "E"))
console.log(calcularArea(4,5))