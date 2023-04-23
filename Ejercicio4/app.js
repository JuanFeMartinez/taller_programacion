function verifProm(){
    var nombre = document.getElementById("nombre").value;
    var materia = document.getElementById("materia").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var resul = document.getElementById("resultado");
    var suma = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))
    var prom = suma/3;

    if (prom >= 3.0){
        resul.innerHTML = "Felicitaciones"+ nombre +", su nota es de: "+promedio+", felicidades, aprobo la materia"
    }else{
        resul.innerHTML = "Felicitaciones"+ nombre +", su nota es de: "+promedio+", felicidades, aprobo la materia"
    }
}