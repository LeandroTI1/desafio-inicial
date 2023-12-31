// Solicita o nome e a quantidade de experiência do herói
let nomeDoHeroi = prompt("Digite o nome do herói:");
let experienciaDoHeroi = parseInt(prompt("Digite a quantidade de experiência do herói:"));

// Utiliza estrutura de decisão para determinar o nível do herói
let nivelDoHeroi;

if (experienciaDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

// Exibe a mensagem final
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);