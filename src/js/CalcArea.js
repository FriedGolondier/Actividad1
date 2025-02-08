let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

// Verifica si la entrada es un número válido
if (!isNaN(radio) && radio > 0) {
    let area = Math.PI * Math.pow(radio, 2);
    console.log(`El área del círculo con radio ${radio} es ${area.toFixed(2)}`);
} else {
    console.log("Por favor, ingrese un número válido para el radio");
}