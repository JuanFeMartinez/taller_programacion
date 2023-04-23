function resaltarCoincidencias(texto, buscar) {
    let regex = new RegExp(buscar, 'gi');
    return texto.replace(regex, match => "<font color=red>"+match+"</font>");
  }

  function search() {
    let parrafo = document.getElementById("parrafo").value;
    let textobusc = document.getElementById("texto-buscar").value;
    let resultado = resaltarCoincidencias(parrafo, textobusc);

    document.getElementById("resultado").innerHTML = resultado;
  }