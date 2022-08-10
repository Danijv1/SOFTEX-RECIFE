/* Escolhi o editor de código-fonte VSCODE porque entendo que facilita a aprendizagem quando em um único local posso usar de várias linguagens
para conhecer e treinar*/

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual módulo pra ler dados no node.js?\n", function(answer) {
    var resp = answer;
    console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    leitor.close();
});
