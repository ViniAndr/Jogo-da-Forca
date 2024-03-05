//modulos
import tecladoVirtual from "./assets/modules/tecladoVirtual.js";
import { objPalavra, gerarPalavra } from "./assets/modules/pegarPalavra.js";
tecladoVirtual();

//elementos html
const palavraFront = document.querySelector("#formarPalavra");
const categoriaFront = document.querySelector("#categoria");
const btnNext = document.querySelector(".btn-next");
const placarRed = document.querySelector(".percas");
const placarGreen = document.querySelector(".ganhos");
const historicoPalavras = document.querySelector(".historicoPalavras");

// Variáveis de Estado do Jogo
let palavra, categoria, formarPalavra;
let placarGanho = 0;
let placarPercas = 0;
let qtdErros = 0;
let letrasCertas = [];
let endGame = false;
const letrasSelecionadas = new Set();

// Inicializa o Jogo
inicializarJogo();

// Função para inicializar o jogo
function inicializarJogo() {
  gerarPalavra();
  // Coletando dados da palavra
  palavra = objPalavra.palavra.toUpperCase();
  categoria = objPalavra.genero;
  formarPalavra = Array(palavra.length).fill("-");

  // Atualiza a interface do usuário com os dados iniciais
  atualizarInterface();

  // Reinicia variáveis de estado
  qtdErros = 0;
  letrasCertas = [];
  endGame = false;
  letrasSelecionadas.clear();
}

// Função para atualizar os elementos da interface do usuário
function atualizarInterface() {
  categoriaFront.innerHTML = categoria;
  palavraFront.innerHTML = formarPalavra.join("");
}

// checa qual letras foram pressionadas
document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("letra") && !endGame) {
    checkLetra(el);
  }
  if (el.classList.contains("btn-next") && endGame) {
    resetarJogo();
  }
});

function checkLetra(elemento) {
  const letraSelec = elemento.innerText;

  // Verifica se a letra já foi selecionada
  if (letrasSelecionadas.has(letraSelec)) {
    console.log("Letra já selecionada.");
    return; // Retorna imediatamente se a letra já foi selecionada
  }

  // Adiciona a letra ao conjunto de letras selecionadas
  letrasSelecionadas.add(letraSelec);

  const indices = [];
  // retorna -1 caso não tenha ou o indice da letra
  let idx = palavra.indexOf(letraSelec);
  // se tiver a letra na palavra
  while (idx != -1) {
    // adiciono o inidice no array de posições
    indices.push(idx);
    // segundo parâmetro é para dizer em qual posição iniciar a busca para a proxima letra
    idx = palavra.indexOf(letraSelec, idx + 1);
  }

  // Se a letra estiver presente na palavra, atualiza a exibição
  if (indices.length > 0) {
    for (let indice of indices) {
      mostrarLetra(letraSelec, indice);
      letrasCertas.push(letraSelec);
    }
    elemento.classList.add("letra-acerto");
  } else {
    elemento.classList.add("letra-errado");
    qtdErros++;
  }
  fimDeJogo();
}

function mostrarLetra(letra, indice) {
  // pego a posição certa e colco ela como letra
  formarPalavra[indice] = letra;
  // mostro na tela, não mas array
  palavraFront.innerHTML = formarPalavra.join("");
}

function fimDeJogo() {
  // Verifica se o usuário ganhou
  if (letrasCertas.length === formarPalavra.length) {
    endGame = true;
    atualizarMensagemFinal("Você Ganhou", "#74c483");
    placarGanho++;
    placarGreen.innerHTML = `Acertos: ${placarGanho}`;
    montarHistorico("green");
  }
  // Verifica se o usuário perdeu
  else if (qtdErros === 7) {
    endGame = true;
    atualizarMensagemFinal(`Você Perdeu, a palavra era ${palavra}`, "#e57780");
    placarPercas++;
    placarRed.innerHTML = `Erros: ${placarPercas}`;
    montarHistorico("red");
  }

  // Ativa o botão para iniciar um novo jogo, se o jogo terminou
  if (endGame) {
    btnNext.classList.remove("btn-next-disabilitado");
    btnNext.classList.add("btn-next-habilitado");
  }
}

// Função auxiliar para atualizar a mensagem final e a cor do texto
function atualizarMensagemFinal(mensagem, cor) {
  categoriaFront.innerHTML = mensagem;
  categoriaFront.style.color = cor;
}

function resetarJogo() {
  inicializarJogo();

  // Atualizar a classe do botão para o próximo jogo
  btnNext.classList.remove("btn-next-habilitado");
  btnNext.classList.add("btn-next-disabilitado");
  categoriaFront.style.color = "#000";

  // Resetar a aparência de todas as letras
  const todasLetras = document.querySelectorAll(".letra");
  todasLetras.forEach((elemento) => {
    elemento.classList.remove("letra-acerto", "letra-errado");
  });
}

// Função responsavel por colocar as palavras no "historico"
function montarHistorico(cor) {
  const palavraHistorico = document.createElement("p");
  palavraHistorico.innerHTML = palavra;
  cor == "green"
    ? (palavraHistorico.style.color = "#74c483")
    : (palavraHistorico.style.color = "#e57780");
  historicoPalavras.appendChild(palavraHistorico);
}
