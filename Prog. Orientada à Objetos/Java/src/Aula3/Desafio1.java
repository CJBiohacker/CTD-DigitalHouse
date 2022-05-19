package Aula3;

import java.util.Scanner;

/*  Implemente um programa que nos permita exibir os primeiros "n" números primos
  pelo console, onde "n" é um valor numérico inserido pelo usuário. Por exemplo:
  Com n = 7, o que o programa deve retornar é "Os primeiros 7 números primos são:
  2, 3, 5, 7, 11, 13, 17"
  */

class Desafio1 {
    static void listaNumPrimos(int n) {
        int contador, aux, i, j;
        aux = 0;
        i = 1;

        while(aux < n) {
            j = 1;
            contador = 0;

            while (j <= i) {
                if (i % j == 0) {
                    contador++;
                    j++;
                }
            }

            if (contador == 2) {
                System.out.printf("%d ", i);
                aux++;
            }

            i++;
        }
    }

    public static void main (String[]args){
        int valor;
        Scanner entrada = new Scanner(System.in);

        System.out.println("Calculadora que retorna a quantidade de números primos digitada. \n" +
                "Ex.: Valor = 7  Resultado: 2, 3, 5, 7, 11, 13, 17");
        System.out.println("Digite o valor numérico inteiro:");
        valor = entrada.nextInt();
        entrada.close();

        System.out.print("Lista dos nº's: ");
        listaNumPrimos(valor);
    }
}
