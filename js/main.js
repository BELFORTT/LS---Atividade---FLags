import Flags from "./link/flags.js";

const main = document.getElementById("local_flags");

main.innerHTML = Flags.map(flag => `
  <div>
    <img src="${flag.imagem}" alt="${flag.nome}">
    <p>${flag.nome}</p>
  </div>
  `).join("");


