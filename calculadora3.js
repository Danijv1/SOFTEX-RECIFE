import readlineSync from "readline-sync";

const rl = readlineSync;

const soma = (num1, num2) => {
    return num1 + num2;
}

console.log("A soma de 100 e 20 é " + soma(100,20));

function subtrair (){
    const A = 100
    const B = 20
    return A - B
}

console.log("A subtração de 100 e 20 é " + subtrair())

function dividir (a, b){
    return a/b
}

console.log("A divisão de 100 por 20 é " + dividir(100, 20))

