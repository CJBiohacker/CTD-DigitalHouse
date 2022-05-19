package Aula3;

import java.util.Scanner;

class encontraNumPrimosLimite {
    static boolean numPrimo (int n) {
        // Condição impossível de calcular.
        if (n <= 1) {
            return false;
        }
        // Estrutura de Repetição que verifica
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    static void listaNumPrimos(int n) {
        for (int i = 2; i <= n; i++) {
            if (numPrimo(i)) {
                System.out.print(i+" ");
            }
        }
    }

    public static void main(String[] args) {
        int valor;
        Scanner entrada = new Scanner(System.in);

        System.out.println("Calculadora que retorna os números primos até o valor digitado.\n" +
                "Ex.: Valor = 7  Resultado: 2, 3, 5, 7"
        );
        System.out.println("Digite o valor numérico inteiro:");
        valor = entrada.nextInt();

        System.out.print("Lista dos nº's: ");
        listaNumPrimos(valor);
    }
}
