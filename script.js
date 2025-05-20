function calcularIMC() {
    // Captura dos dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
  
    // Validação simples
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      document.getElementById("resultadoIMC").textContent = "Preencha os dados corretamente!";
      document.getElementById("classificacao").textContent = "";
      return;
    }
  
    // Cálculo do IMC
    let imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").textContent = "Seu IMC é: " + imc.toFixed(2);
  
    // Classificação
    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }
  
    document.getElementById("classificacao").textContent = "Classificação: " + classificacao;
  }