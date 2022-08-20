import readlineSync from "readline-sync";

const rl = readlineSync;

var op = " "
        
op = rl.question("Escolha a operacao a ser realizada:\n Soma[1]\n Subtração[2]\n Multiplicação[3]\n Divisão[4]\n Sair[0]\n ");
while (op > 4){
    console.log ("Essa opção não existe");
    op = rl.question("Escolha a operacao a ser realizada:\n Soma[1]\n Subtração[2]\n Multiplicação[3]\n Divisão[4]\n Sair[0]\n ");
}

    while (op != 0){    

        var num1 = rl.questionFloat("Valor 1: ");
        var num2 = rl.questionFloat("Valor 2: ");

        //console.log(op);
    
        if (op == "1"){        
            console.log("A soma de "+ num1 +" + "+ num2 +" = "+ (num1 + num2));        
            //break;        
        } else if (op == "2"){
            console.log("A subtração de "+ num1 +" - "+ num2 +" = "+ (num1 - num2));
            //break;
        } else if (op == "3"){
            console.log("A multiplicação de "+ num1 +" * "+ num2 +" = "+ (num1 * num2));
            //break;
        //} else if (op == "0"){
        //    break;
        } else if (op == "4"){
            if (num1%num2 == 0)
                console.log("A divisão de "+ num1 +" / "+ num2 +" = "+ (num1 / num2))
            else
                console.log("A divisão de "+ num1 +" / "+ num2 +" = "+ Math.trunc((num1 / num2)) +" e a sobra foi "+ num1%num2)
            //break;
        }else
            console.log("Escolha uma operacao válida!\n");        
        
        op = rl.question("Escolha a operacao a ser realizada:\n Soma[1]\n Subtração[2]\n Multiplicação[3]\n Divisão[4]\n Sair[0]\n ");
        
        while (op > 4){
            console.log ("Essa opção não existe");
            op = rl.question("Escolha a operacao a ser realizada:\n Soma[1]\n Subtração[2]\n Multiplicação[3]\n Divisão[4]\n Sair[0]\n ");
        }
    }



