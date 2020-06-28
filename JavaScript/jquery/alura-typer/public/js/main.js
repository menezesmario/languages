let campo = $(".campo-digitacao");
let tempoInicial = $("#tempo-digitacao").text();

$(function () {
  inserePlacar();
  novaLinha();
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  $("botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
  let frase = $(".frase").text();
  let numPalavras = frase.split(" ").length;
  let tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
  campo.on("input", function () {
    let conteudo = campo.val();

    let qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    let qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function inicializaCronometro() {
  campo.one("focus", function () {
    let tempoRestante = $("#tempo-digitacao").text();
    $("#botao-reiniciar").attr("disable", true);
    let cronometroID = setInterval(function () {
      tempoRestante--;
      console.log(tempoRestante);
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        clearInterval(cronometroID);

        finalizaJogo();
      }
    }, 1000);
  });
}

function finalizaJogo() {
  campo.attr("disabled", true);
  campo.toggleClass("campo-desativado");
  inserePlacar();
}

function inicializaMarcadores() {
  campo.on("input", function () {
    let frase = $(".frase").text();

    let digitado = campo.val();
    let comparavel = frase.substr(0, digitado.length);

    if (digitado == comparavel) {
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
}

$("#botao-reiniciar").click(reiniciaJogo);

function reiniciaJogo() {
  campo.attr("disabled", false);
  //reinicializando os campos
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
  campo.toggleClass("campo-desativado");
  campo.removeClass("borda-vermelha");
  campo.removeClass("borda-verde");
}

function atualizaTempoInicial(tempo) {
  tempoInicial = tempo;

  $("#tempo-digitacao").text(tempo);
}
