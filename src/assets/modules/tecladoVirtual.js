// letras em um array bi
const letrasPorLinha = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const secaoLetras = document.querySelectorAll(".linha");

function tecladoVirtual() {
  // percorro meu array bi quem a mesma qtd de inidice da divs linhas
  letrasPorLinha.forEach((letras, index) => {
    secaoLetras.forEach((linha, i) => {
      if (index == i) {
        criarLetra(linha, letras, i);
      }
    });
  });
}

function criarLetra(linha, arrLetras, i) {
  for (let letra of arrLetras) {
    const formaLetra = document.createElement("div");
    formaLetra.className = "letra";
    formaLetra.innerHTML = letra;
    linha.appendChild(formaLetra);
  }
  const btn = document.createElement("div");
  btn.innerHTML = "Proxima";
  btn.className = "btn-next btn-next-disabilitado ";
  if (i == 2) linha.appendChild(btn);
}

export default tecladoVirtual;
