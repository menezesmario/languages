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
  let tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
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
  let frase = $(".frase").text();
  campo.on("input", function () {
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

//atrelando ao botao reiniciar o atributo "disable" false
$("#botao-reiniciar").click(reiniciaJogo);

function inserePlacar() {
  let corpoTabela = $("placar").find("tbody");
  let usuario = "Seu-nome";
  let numPalavras = $("#contador-palavras").text();

  let linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);
}

function novaLinha(usuario, numPalavras) {
  let linha = $("<tr>");
  let colunaUsuario = $("<td>").text(usuario);
  let colunaPalavras = $("<td>").text(numPalavras);
  let colunaRemover = $("<td>");

  let link = $("<a>").attr("href", "#").addClass("botao-remover");
  let icone = $("<i>")
    .addClass("small")
    .addClass("material-icons")
    .text("delete");

  link.append(icone);

  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha(event) {
  event.preventDefault();
  $(this).parent().parent().remove();
}

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
