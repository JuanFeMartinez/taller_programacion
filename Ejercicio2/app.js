function validar() {
    var valor = document.getElementById("valor").value;
    var rta = document.getElementById("rta");
    
    if(isNaN(valor)){
      rta.innerHTML = "El dato es de tipo String";
    }else{
      rta.innerHTML = "El dato es numerico.";
    }
  }