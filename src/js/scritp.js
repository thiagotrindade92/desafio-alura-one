const bntCriptorgrafa = document.getElementById("bntCriptor");
const bntDescriptorgrafa = document.getElementById("bntDescriptor");
const bntCopiar = document.getElementById("bntCopiarTexto");

const textoSecreto = document.getElementById("inputMensagemSecreta");
const textoRecebe = document.getElementById("recebeMensagem");

function codificar() {
  let textEntrada = textoSecreto.value;
  let textNovaSaida = "";

  if (textEntrada == "") {
    return false;
  }

  for (var i = 0; i < textEntrada.length; i++) {
    if ((textEntrada[i] != textEntrada[i].toUpperCase()) || textEntrada[i] == " ") {
      if (textEntrada[i] == 'a') {
        textNovaSaida += 'ai';
      } else if (textEntrada[i] == 'e') {
        textNovaSaida += 'enter';
      } else if (textEntrada[i] == 'i') {
        textNovaSaida += 'imes';
      } else if (textEntrada[i] == 'o') {
        textNovaSaida += 'ober';
      } else if (textEntrada[i] == 'u') {
        textNovaSaida += 'ufat';
      } else {
        textNovaSaida += textEntrada[i];
      }
    } else {
      alert("Não é permitido letras maiúsculas ou caracteres especiais!");
      return;
    }
  }

  if(textEntrada == true){
    return textNovaSaida;
  }

  textoRecebe.innerHTML = textNovaSaida;
  textoSecreto.value = "";
  textoSecreto.focus();
}

function descriptografar() {
  let textEntrada = textoSecreto.value;
  let textNovaSaida = "";

  if (textEntrada == "") {
    return false;
  }

  for (var i = 0; i < textEntrada.length; i++) {
    if ((textEntrada[i] != textEntrada[i].toUpperCase()) || textEntrada[i] == " ") {
      if (textEntrada[i] == 'a' && i < textEntrada.length - 1) {
        textNovaSaida += 'a';
        if (textEntrada[i + 1] == "i") {
          i++;
        }
      } else if (textEntrada[i] == 'e' && i < textEntrada.length - 4) {
        textNovaSaida += 'e';
        if (textEntrada[i + 1] == "n" && textEntrada[i + 2] == "t" && textEntrada[i + 3] == "e" && textEntrada[i + 4] == "r") {
          i += 4;
        }
      } else if (textEntrada[i] == 'i' && i < textEntrada.length - 3) {
        textNovaSaida += 'i';
        if (textEntrada[i + 1] == "m" && textEntrada[i + 2] == "e" && textEntrada[i + 3] == "s") {
          i += 3;
        }
      } else if (textEntrada[i] == 'o' && i < textEntrada.length - 3) {
        textNovaSaida += 'o';
        if (textEntrada[i + 1] == "b" && textEntrada[i + 2] == "e" && textEntrada[i + 3] == "r") {
          i += 3;
        }
      } else if (textEntrada[i] == 'u' && i < textEntrada.length - 3) {
        textNovaSaida += 'u';
        if (textEntrada[i + 1] == "f" && textEntrada[i + 2] == "a" && textEntrada[i + 3] == "t") {
          i += 3;
        }
      } else {
        textNovaSaida += textEntrada[i];
      }
    } else {
      alert("Não é permitido letras maiúsculas ou caracteres especiais!");
      return;
    }
  }
  textoRecebe.innerHTML = textNovaSaida;
  textoSecreto.value = "";
  textoSecreto.focus();
}

function copiar() {
  let textoCopia = textoRecebe.innerHTML;

  navigator.clipboard.writeText(textoCopia).then(
    function () {
      alert("Copiado com sucesso!"); // success 
    })
    .catch(
      function () {
        alert("Falha ao copiar. Tente novamente mais tarde ;)"); // error
      });
    
  textoSecreto.focus();
}

bntCriptorgrafa.onclick = codificar;
bntDescriptorgrafa.onclick = descriptografar;
bntCopiar.onclick = copiar;