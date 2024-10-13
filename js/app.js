// Função que altera o status do jogo (alugar ou devolver)
function atualizarStatus(gameClicado, isRented) {
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");

  // Atualiza o status com base em 'isRented'
  if (isRented) {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  } else {
    imagem.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.textContent = "Alugar";
  }
}

// Função principal que lida com o clique e chama a função auxiliar
function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);

  // Define o evento de clique apenas uma vez
  gameClicado.onclick = function (event) {
    event.preventDefault();

    // Verifica o estado atual para determinar a ação
    const isRented = !gameClicado
      .querySelector(".dashboard__item__img")
      .classList.contains("dashboard__item__img--rented");

    // Chama a função auxiliar para atualizar o status
    atualizarStatus(gameClicado, isRented);
  };
}
