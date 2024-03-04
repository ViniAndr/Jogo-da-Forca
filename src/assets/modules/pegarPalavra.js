const dados = [
  { palavra: "cachorro", genero: "É um animal" },
  { palavra: "guitarra", genero: "É um instrumento musical" },
  { palavra: "futebol", genero: "É um esporte" },
  { palavra: "python", genero: "É uma linguagem de programação" },
  { palavra: "paris", genero: "É um pais" },
  { palavra: "chuva", genero: "É um fenômeno natural" },
  { palavra: "picasso", genero: "É um pintor" },
  { palavra: "Girafa", genero: "É um animal" },
  { palavra: "sushi", genero: "É uma comida" },
  { palavra: "netflix", genero: "É um app de streaming" },
  { palavra: "halloween", genero: "É um feriado americano" },
  { palavra: "titanic", genero: "É um filme" },
  { palavra: "Zebra", genero: "É um animal" },
  { palavra: "fifa", genero: "É um jogo eletronico" },
  { palavra: "lol", genero: "É um jogo eletronico" },
  { palavra: "dota", genero: "É um jogo eletronico" },
  { palavra: "eclipse", genero: "É uma astronomia" },
  { palavra: "kombi", genero: "É um veículo" },
  { palavra: "Rinoceronte", genero: "É um animal" },
  { palavra: "carreta", genero: "É um veículo" },
  { palavra: "quimera", genero: "É uma mitologia" },
  { palavra: "origami", genero: "É uma arte" },
  { palavra: "Coala", genero: "É um animal" },
  { palavra: "piramide", genero: "É um arquitetura antiga" },
  { palavra: "jazz", genero: "É um Genero música" },
  { palavra: "bitcoin", genero: "É uma Moéda digital" },
  { palavra: "Kickboxing", genero: "É um esporte de luta" },
  { palavra: "capoeira", genero: "É um esporte de luta" },
  { palavra: "Boxe", genero: "É um esporte de luta" },
  { palavra: "Elefante", genero: "É um animal" },
  { palavra: "anime", genero: "É uma animação" },
  { palavra: "suco", genero: "É uma bebida" },
  { palavra: "lasanha", genero: "É uma comida" },
  { palavra: "recife", genero: "É uma cidade" },
  { palavra: "sahara", genero: "É um deserto" },
  { palavra: "amazonas", genero: "É um rio" },
  { palavra: "ibiza", genero: "É uma ilha" },
  { palavra: "everest", genero: "É uma montanha" },
  { palavra: "forror", genero: "É uma dança" },
  { palavra: "Tigre", genero: "É um animal" },
  { palavra: "manga", genero: "É uma fruta" },
  { palavra: "violao", genero: "É um instrumento musical" },
  { palavra: "basquete", genero: "É um esporte" },
  { palavra: "javascript", genero: "É uma linguagem de programação" },
  { palavra: "madri", genero: "É uma cidade" },
  { palavra: "arcoiris", genero: "É um fenômeno natural" },
  { palavra: "hipopotamo", genero: "É um animal" },
  { palavra: "pizza", genero: "É uma comida" },
  { palavra: "spotify", genero: "É um app de streaming" },
  { palavra: "natal", genero: "É um feriado" },
  { palavra: "avatar", genero: "É um filme" },
  { palavra: "leopardo", genero: "É um animal" },
  { palavra: "minecraft", genero: "É um jogo eletronico" },
  { palavra: "overwatch", genero: "É um jogo eletronico" },
  { palavra: "galaxia", genero: "É uma astronomia" },
  { palavra: "bicicleta", genero: "É um veículo" },
  { palavra: "leao", genero: "É um animal" },
  { palavra: "moto", genero: "É um veículo" },
  { palavra: "fenix", genero: "É uma mitologia" },
  { palavra: "pintura", genero: "É uma arte" },
  { palavra: "panda", genero: "É um animal" },
  { palavra: "castelo", genero: "É uma arquitetura antiga" },
  { palavra: "blues", genero: "É um genero música" },
  { palavra: "ethereum", genero: "É uma moeda digital" },
  { palavra: "judo", genero: "É um esporte de luta" },
  { palavra: "karate", genero: "É um esporte de luta" },
  { palavra: "gorila", genero: "É um animal" },
  { palavra: "manga", genero: "É uma animação" },
  { palavra: "cafe", genero: "É uma bebida" },
  { palavra: "hamburguer", genero: "É uma comida" },
  { palavra: "porto", genero: "É uma cidade" },
  { palavra: "gobi", genero: "É um deserto" },
  { palavra: "nilo", genero: "É um rio" },
  { palavra: "corsega", genero: "É uma ilha" },
  { palavra: "kilimanjaro", genero: "É uma montanha" },
  { palavra: "samba", genero: "É uma dança" },
  { palavra: "pantera", genero: "É um animal" }
];
const dadosUsados = new Set();
let objPalavra = {};

const gerarPalavra = () => {
  let tentativas = 0;
  let indiceAleatorio;

  do {
    indiceAleatorio = Math.floor(Math.random() * dados.length);
    objPalavra = dados[indiceAleatorio];
    tentativas++; // Incrementa a variável tentativas a cada tentativa
    // Se o objeto já foi utilizado, tenta novamente até o limite de tentativas
  } while (dadosUsados.has(objPalavra.palavra) && tentativas < dados.length);

  // Adiciona a palavra ao conjunto de dados usados se ela não foi usada anteriormente
  if (!dadosUsados.has(objPalavra.palavra)) {
    dadosUsados.add(objPalavra.palavra);
  } else {
    // Se todas as palavras já foram usadas
    objPalavra = null;
  }

  console.log(dadosUsados);
};

export { objPalavra, gerarPalavra };
