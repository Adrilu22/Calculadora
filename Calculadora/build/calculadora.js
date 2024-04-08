"use strict";
function sum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const res = num1 + num2;
    document.getElementById("res").value = res.toString();
    
}
function resta() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const res = num1 - num2;
    document.getElementById("res").value = res.toString();
}
function multiplicacion() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const res = num1 * num2;
    document.getElementById("res").value = res.toString();
}
function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        alert("No se puede dividir por cero");
        return;
    }
    const res = num1 / num2;
    document.getElementById("res").value = res.toString();
}
