function verificar(){
    var nombre= document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var resul = document.getElementById("resultado");
    if (edad >= 18) {
        resul.innerHTML = "Hola " + nombre + ", uted es mayor de edad";
      } else if(edad==0 || edad<0){
        resul.innerHTML = "No es una edad valida";
      } else {
        resul.innerHTML = "Hola " + nombre + ", uted es menor de edad";
      } 
}