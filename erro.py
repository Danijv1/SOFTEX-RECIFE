nome = input("Digite o seu nome completo: ")
while True:
    try:        
        anoNasc = int(input("Em qual ano você nasceu (entre 1922 e 2021)? "))
        idade = 2022 - anoNasc

        if anoNasc >= 1922 and anoNasc <= 2021:
            print (f"{nome}, em 2022 vai completar {idade} anos.")
            break
        else:
            print("Ano de nascimento inválido, por favor preencha novamente: ")
    except:
        print("Dados inválidos, por favor preencha novamente: ")
