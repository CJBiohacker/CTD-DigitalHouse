#encoding:UTF-8
import random

while True: 
    aleatorio = random.randrange(0, 4)
    escolhaPc = ""
    print("1)Pedra")
    print("2)Papel")
    print("3)Tesoura")
    print("4)Spock")
    print("5)Lagarto")
    print("6)Sair do Programa")
    opcao = int(input("O que você escolhe: "))
    
    if opcao == 1:
        escolhaUsuario = "pedra"
    elif opcao == 2:
        escolhaUsuario = "papel"
    elif opcao == 3:
        escolhaUsuario = "tesoura"
    elif opcao == 4:
        escolhaUsuario = "spock"
    elif opcao == 5:
        escolhaUsuario = "lagarto"
    elif opcao == 6:
        print ("Nos vemos!")
        break
    else:
        print ("Valor Invalido")
        continue
        
    print("Tua escolha: ", escolhaUsuario)

    if aleatorio == 0:
        escolhaPc = "pedra"
    elif aleatorio == 1:
        escolhaPc = "papel"
    elif aleatorio == 2:
        escolhaPc = "tesoura"
    elif opcao == 3:
        escolhaPc = "spock"
    elif opcao == 4:
        escolhaPc = "lagarto"
        
    print("PC escolheu: ", escolhaPc)
    print("...")
    
    if (escolhaPc == "pedra" or escolhaPc == "spock" ) and escolhaUsuario == "papel":
        print("Ganhou, " + escolhaUsuario + "vence " + escolhaPc)
    elif (escolhaPc == "papel" or escolhaPc == "lagarto" ) and escolhaUsuario == "tesoura":
         print("Ganhou, " + escolhaUsuario + "vence " + escolhaPc)
    elif(escolhaPc == "tesoura" or escolhaPc == "lagarto" ) and escolhaUsuario == "pedra":
         print("Ganhou, " + escolhaUsuario + "vence " + escolhaPc)
        
    if escolhaUsuario == "pedra" and escolhaPc == "papel":
        print("Perdeu, papel cobre pedra")
    elif escolhaUsuario == "papel" and escolhaPc == "tesoura":
        print("Perdeu, tesoura corta papel")
    elif escolhaUsuario == "tesoura" and escolhaPc == "pedra":
        print("Perdeu, pedra amassa tesoura")
    elif escolhaPc == escolhaUsuario:
        print("Empate")
    again = input("Jogar novamente? s/n: ")
    if 's' in again:
        continue
    elif 'n' in again:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")



# Integrantes
# Mateus Almeida, Carlos de Lima Junior, Miguel Oduber