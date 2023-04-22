function validar(){
    var texto=document.getElementById('texto').value;
    if (texto == ""){
        document.getElementById('area').value="campo en blanco";
        document.getElementById('texto').style.borderColor="purple";
    }else if(!isNaN("texto")){
        document.getElementById('area').value="no ingrese numeros";
        document.getElementById('texto').style.borderColor="purple";
    }else{
        procesar(texto);
    }
}

function procesar(texto){
    document.getElementById('area').value='el texto"'+texto+'"contiene '+texto.length+' caracteres';
}