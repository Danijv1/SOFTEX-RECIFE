function Banco(conta, saldo, tipoDeConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoDeConta = tipoDeConta;
    this.agencia = agencia;

    this.buscarSaldo = function(){
        this.saldo;
    }

    this.deposito = function(deposito){
        this.saldo += deposito
    }
    
    this.saque = function(saque){
        this.saldo -= saque
    }
    
    this.numeroDaConta = function(){
        this.conta;
    }

  }

  var meuBanco = new Banco(32001,1000,'corrente','0001');
  console.log("Meu saldo inicial é de " + meuBanco.saldo);
  meuBanco.deposito(1000);
  console.log("Meu saldo após o depósito de 1.000, passou a ser de " + meuBanco.saldo);
  meuBanco.saque(500);
  console.log("Meu saldo após o saque de 500, passou a ser de " + meuBanco.saldo);
  console.log("Após as operações realizadas, minha conta " + meuBanco.tipoDeConta + " " + meuBanco.conta + " da agência " + meuBanco.agencia + " ficou com " + meuBanco.saldo + " de saldo.")
