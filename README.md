# AluGames

AluGames é uma aplicação web simples para gerenciamento de aluguel de jogos de tabuleiro. Os usuários podem visualizar jogos disponíveis e alugar ou devolver jogos através de uma interface amigável.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilo e layout.
- **JavaScript**: Interatividade da aplicação.

## Estrutura do Projeto

```
AluGames/
│
├── index.html       # Arquivo HTML principal
├── css/
│   └── main.css     # Arquivo de estilo CSS
├── img/             # Imagens usadas na aplicação
│   ├── logo.svg
│   ├── monopoly.png
│   ├── ticket_to_ride.png
│   └── takenoko.png
├── js/
│   └── app.js       # Lógica JavaScript da aplicação
└── README.md        # Este arquivo
```

## Funcionalidades

- **Listagem de Jogos**: Visualização dos jogos disponíveis para aluguel.
- **Aluguel de Jogos**: Botões para alugar jogos que atualizam o status do jogo.
- **Devolução de Jogos**: Altera o status do jogo de alugado para disponível.

## Como Usar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu_usuario/AluGames.git
   cd AluGames
   ```

2. **Abra o `index.html`** no seu navegador:
   - Você pode abrir diretamente o arquivo HTML no navegador ou usar um servidor local.

3. **Interaja com a Aplicação**:
   - Clique nos botões "Alugar" para alugar um jogo.
   - Quando um jogo for alugado, o botão mudará para "Devolver". Clique nele para devolver o jogo.

## Código

### index.html

Este arquivo contém a estrutura básica da página, incluindo o cabeçalho, a lista de jogos e os botões de interação.

### main.css

O arquivo de estilo que define a aparência da aplicação, incluindo estilos para os botões e layout responsivo. Os botões são estilizados com gradientes e efeitos de transição.

### app.js

A lógica JavaScript que gerencia o estado dos jogos. O arquivo contém a função `alterarStatus`, que altera o status do jogo entre "Alugar" e "Devolver".

### Exemplo de Código JavaScript

```javascript
function alterarStatus(gameId) {
    // Lógica para alterar o status do jogo
    const gameElement = document.getElementById(`game-${gameId}`);
    const button = gameElement.querySelector('.dashboard__item__button');

    if (button.textContent === 'Alugar') {
        button.textContent = 'Devolver';
        // Alterar a aparência ou status do jogo
    } else {
        button.textContent = 'Alugar';
        // Reverter as alterações
    }
}
```

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar o projeto, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/MinhaNovaFuncionalidade`).
3. Faça suas alterações e commite (`git commit -m 'Adicionando nova funcionalidade'`).
4. Envie sua branch (`git push origin feature/MinhaNovaFuncionalidade`).
5. Abra um Pull Request.



