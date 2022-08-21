
X = 0
Y = 0
Z = 0
branco = 0
nulo = 0

candidato = int(input("Escolha o seu candidato:\n candidato_X[889]\n candidato_Y[847]\n candidato_Z[515]\n branco[0]\n finalizar_eleição[9999]\n "))


while candidato != 9999: 
    while True:
        try:        
            votacao = int(input('Deseja finalizar a votação? [1]SIM ou [2]NÃO '))
            
            if votacao == 1:
                print ("Obrigado! Votação encerrada.")
                break
            else:
                print("Favor votar novamente. ")
                candidato = int(input("Escolha o seu candidato:\n candidato_X[889]\n candidato_Y[847]\n candidato_Z[515]\n branco[0]\n finalizar_eleição[9999]\n "))

        except:
            print("Dados inválidos, favor preencher novamente: ")

    if candidato == 889 and votacao == 1:
        X += 1

    elif candidato == 847 and votacao == 1:
        Y += 1

    elif candidato == 515 and votacao == 1:
        Z += 1

    elif candidato == 0 and votacao == 1:
        branco = branco + 1

    elif candidato != 889 and candidato != 847 and candidato != 515 and candidato != 9999 and candidato != 0 and votacao == 1:
        nulo = nulo + 1

    candidato = int(input("Escolha o seu candidato:\n candidato_X[889]\n candidato_Y[847]\n candidato_Z[515]\n branco[0]\n finalizar_eleição[9999]\n "))

vencedor = [X, Y, Z]
vencedor.sort()

finalista = vencedor[2]
segundo = vencedor[1]
terceiro = vencedor[0]

print('\n')
print ('!!!ELEIÇÃO ENCERRADA!!! \n')
if finalista == segundo and finalista == terceiro:
    print('Não houve vencedor. Os candidatos empataram')
elif finalista == segundo and finalista != terceiro:
    if (finalista == X and segundo == Y) or (finalista == Y and segundo == X):
        print(f'Os candidato_X e candidato_Y empataram com {finalista} votos cada')
    elif (finalista == X and segundo == Z) or (finalista == Z and segundo == X):
        print(f'Os candidato_X e candidato_Z empataram com {finalista} votos cada')
    elif (finalista == Y and segundo == Z) or (finalista == Z and segundo == Y):
        print(f'Os candidato_Y e candidato_Z empataram com {finalista} votos cada')
elif finalista != segundo and finalista != terceiro:
    if finalista == X:
        print(f'O candidato_X venceu com {finalista} votos')
    elif finalista == Y:
        print(f'O candidato_Y venceu com {finalista} votos')
    elif finalista == Z:
        print(f'O candidato_Z venceu com {finalista} votos')

print('\n')
print(f'O candidato_X teve {X} votos')
print(f'O candidato_Y teve {Y} votos')
print(f'O candidato_Z teve {Z} votos')
print(f'Tiveram {branco} votos em branco')
print(f'Tiveram {nulo} votos em nulo')