//import { somar, subtrair , multiplicar , dividir } from "./funcoes.js";
import readlineSync from "readline-sync";

//var readlineSync = require('readline-sync');
const rl = readlineSync;

var num1 = rl.questionFloat("Valor 1: ");
var num2 = rl.questionFloat("Valor 2: ");

while(true){

    var op = rl.question("Escolha a operacao a ser realizada:\n[+]\n[-]\n[*]\n[/]\n ");

    if (op == "+"){        
        console.log("A soma de "+ num1 +" + "+ num2 +" = "+ (num1 + num2));        
        break;        
    } else if (op == "-"){
        console.log("A subtração de "+ num1 +" - "+ num2 +" = "+ (num1 - num2));
        break;
    } else if (op == "*"){
        console.log("A multiplicação de "+ num1 +" * "+ num2 +" = "+ (num1 * num2));
        break;
    } else if (op == "/"){
        if (num1%num2 == 0)
            console.log("A divisão de "+ num1 +" / "+ num2 +" = "+ (num1 / num2))
        else
            console.log("A divisão de "+ num1 +" / "+ num2 +" = "+ Math.trunc((num1 / num2)) +" e a sobra foi "+ num1%num2)
        break;
    } else
        console.log("Escolha uma operacao válida!\n");
}

