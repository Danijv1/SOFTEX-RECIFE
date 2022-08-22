var dados = {
    nome: ['Daniele', 'Augusto', 'Carlos'],
    idade: [40, 30, 43],
    sexo: ['feminino', 'masculino', 'masculino']
}

function propriedades(pessoa){
    console.log(dados.nome[pessoa] + ' ' + 'tem '+ dados.idade[pessoa] + ' anos de idade e é do sexo ' + dados.sexo[pessoa])
}

function array(){
    console.log('Nomes do array: ' + dados.nome)
    console.log('Idades do array: ' + dados.idade)
    console.log('Sexos do array: ' + dados.sexo)
}

array()
propriedades(0)
propriedades(1)
propriedades(2)