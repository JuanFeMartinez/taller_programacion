function val() {
    var numero = document.getElementById("numero").value;

    if (val < 0) {
        document.getElementById('area').value = "Debe ingresar numeros positivos";
    }
    if (numero % 2 === 0) {
        document.getElementById('area').value = "Par";
    } else if (val % 1 != 0) {
        document.getElementById('area').value = "Debe ingresar numeros enteros";
    } else {
        document.getElementById('area').value = "Impar";
    }
    if (numero < 0 && numero % 1 != 0) {
        document.getElementById('area').value = "ingrese solamente numeros enteros positivos";
    }
}
