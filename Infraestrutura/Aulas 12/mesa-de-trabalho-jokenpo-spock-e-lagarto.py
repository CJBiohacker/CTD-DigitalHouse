# CÓDIGO PRONTO DO MATERIAL
#encoding:UTF-8
import random

# ETAPA I - Definir as variáveis de pontuação.

userScore = 0
pcScore = 0
totalScore = 0
winUser = 0
winPc = 0

# ETAPA II - Adicionar a função que calcula o percentual de vitórias.

def percentual():
    if totalScore > 0 :
        x = ((totalScore - pcScore) / totalScore) * 100
        return x
    elif totalScore == 0:
        x = 0
        return x

while True: 
    aleatorio = random.randrange(0, 4)
    escolhaPc = ""
    print("1)Pedra")
    print("2)Papel")
    print("3)Tesoura")
    print("4)Spock")
    print("5)Lagarto")
    print("6)Mostrar Pontuação")
    print("7)Sair do Programa")
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
# ETAPA III - Adicionar a opção 6 com o placar de pontuação.
    elif opcao == 6:
        print ("\nPontuações: ")
        print ("Usuário: ", userScore)
        print ("Pc: ", pcScore)
        print ("Porcentagem de vitórias: ", percentual(), "%" )
        print ("")
        continue
    elif opcao == 7:
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
    elif aleatorio == 3:
        escolhaPc = "spock"
    elif aleatorio == 4:
        escolhaPc = "lagarto"
        
    print("PC escolheu: ", escolhaPc)
    print("...")
    
    # Etapa IV - Adicionar os checks de vitória em cada possibilidade. "winUser = 1"

    if (escolhaPc == "pedra" or escolhaPc == "spock" ) and escolhaUsuario == "papel":
        print("Ganhou, " + escolhaUsuario + " vence " + escolhaPc)
        winUser = 1
    elif(escolhaPc == "papel" or escolhaPc == "lagarto" ) and escolhaUsuario == "tesoura":
        print("Ganhou, " + escolhaUsuario + " vence " + escolhaPc)
        winUser = 1
    elif(escolhaPc == "tesoura" or escolhaPc == "lagarto" ) and escolhaUsuario == "pedra":
        print("Ganhou, " + escolhaUsuario + " vence " + escolhaPc)
        winUser = 1
    elif(escolhaPc == "tesoura" or escolhaPc == "pedra" ) and escolhaUsuario == "spock":
        print("Ganhou, " + escolhaUsuario + " vence " + escolhaPc)
        winUser = 1
    elif(escolhaPc == "spock" or escolhaPc == "papel" ) and escolhaUsuario == "lagarto":
        print("Ganhou, " + escolhaUsuario + " vence " + escolhaPc)
        winUser = 1
        
    if (escolhaUsuario == "pedra" or escolhaUsuario == "spock" ) and escolhaPc == "papel":
        print("Perdeu, " + escolhaPc + " vence " + escolhaUsuario)
        winPc = 1
    elif(escolhaUsuario == "papel" or escolhaUsuario == "lagarto" ) and escolhaPc == "tesoura":
        print("Perdeu, " + escolhaPc + " vence " + escolhaUsuario)
        winPc = 1
    elif(escolhaUsuario == "tesoura" or escolhaUsuario == "lagarto" ) and escolhaPc == "pedra":
        print("Perdeu, " + escolhaPc + " vence " + escolhaUsuario)
        winPc = 1
    elif(escolhaUsuario == "tesoura" or escolhaUsuario == "pedra" ) and escolhaPc == "spock":
        print("Perdeu, " + escolhaPc + " vence " + escolhaUsuario)
        winPc = 1
    elif(escolhaUsuario == "spock" or escolhaUsuario == "papel" ) and escolhaPc == "lagarto":
        print("Perdeu, " + escolhaPc + " vence " + escolhaUsuario)
        winPc = 1
    elif escolhaPc == escolhaUsuario:
        print("Empate")
    again = input("Jogar novamente? s/n: ")
    
    # ETAPA V - Definir o cálculo das pontuações ao final.

    userScore += winUser
    pcScore += winPc
    totalScore = userScore + pcScore
    
    if 's' in again:
        continue
    elif 'n' in again:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")

# Mesa de Trabalho - Aula 12 e 13
# Integrantes
# Mateus Almeida, Carlos de Lima Junior, Miguel Oduber, Giovanna Galvão, Heloísa Meister, Andre Almeida.