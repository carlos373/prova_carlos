// Exibe uma mensagem inicial
console.log("O programa está em execução. Digite o número inicial de chinchilas e o número de anos.");

// Lê o número inicial de chinchilas
let numeroInicial = parseInt(prompt("Digite o número inicial de chinchilas (deve ser maior ou igual a 2):"));

// Valida a entrada para garantir que o número inicial de chinchilas seja maior ou igual a 2
if (isNaN(numeroInicial) || numeroInicial < 2) {
    console.log("Número inicial inválido. O programa será encerrado.");
} else {
    // Lê o número de anos
    let anos = parseInt(prompt("Digite o número de anos:"));

    // Verifica se a entrada de anos é válida
    if (isNaN(anos) || anos < 1) {
        console.log("Número de anos inválido. O programa será encerrado.");
    } else {
        // Inicializa o número de chinchilas
        let chinchilas = numeroInicial;

        // Exibe o número de chinchilas ano a ano
        for (let ano = 1; ano <= anos; ano++) {
            if (ano > 1) {
                chinchilas *= 3; // Triplica o número de chinchilas a cada ano após o primeiro
            }
            console.log(`Ano ${ano}: ${chinchilas} chinchilas`);
        }
    }
}

//Este código faz o seguinte:

//Exibe uma mensagem inicial informando que o programa está em execução.
//Lê o número inicial de chinchilas e valida se é maior ou igual a 2.
//Lê o número de anos e valida se é um valor positivo.
//Usa um loop for para calcular e exibir o número de chinchilas ano a ano, triplicando o número a cada ano após o primeiro.

