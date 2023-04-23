function val() {
    var numero = document.getElementById("numero").value;

    if (numero < 0) {
        document.getElementById('area').value = "ingrese solamente numeros positivos";
    }
    if (numero % 2 === 0) {
        document.getElementById('area').value = "Par";
    } else if (numero % 1 != 0) {
        document.getElementById('area').value = "Debe ingresar numeros enteros";
    } else {
        document.getElementById('area').value = "Impar";
    }
}
