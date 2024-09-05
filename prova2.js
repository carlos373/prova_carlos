// Exibe uma mensagem inicial
console.log("O programa está em execução. Digite as contas a serem pagas. Digite 0 para finalizar.");

// Inicializa o contador e o acumulador
let contador = 0;
let acumulador = 0;
let listaContas = "";

while (true) {
    // Lê a descrição da conta
    let descricao = prompt("Digite a descrição da conta (ou 0 para sair):");
    
    // Verifica se o usuário deseja encerrar o programa
    if (descricao === "0") {
        console.log("Encerrando o programa.");
        break;
    }

    // Lê o valor da conta
    let valor = parseFloat(prompt("Digite o valor da conta:"));

    // Verifica se a entrada é válida
    if (isNaN(valor) || valor <= 0) {
        console.log("Valor inválido. Tente novamente.");
        continue;
    }

    // Adiciona a conta à lista
    listaContas += `${descricao} - R$: ${valor.toFixed(2)}\n`;

    // Atualiza o contador e o acumulador
    contador++;
    acumulador += valor;
}

// Exibe a lista de contas, o número total de contas e a soma dos valores
console.log("\nLista de Contas:");
console.log(listaContas);
console.log(`Número total de contas: ${contador}`);
console.log(`Soma dos valores: R$ ${acumulador.toFixed(2)}`);


//Este código faz o seguinte:

//Exibe uma mensagem inicial informando que o programa está em execução.
//Inicializa variáveis para contar o número de contas (contador) e somar os valores (acumulador).
//Usa um loop while para continuar lendo as contas do usuário até que ele digite “0” para sair.
//Verifica se a entrada é válida e, se não for, solicita novamente.
//Adiciona cada conta à lista e atualiza o contador e o acumulador.
//Exibe a lista de contas, o número total de contas e a soma dos valores ao final.
