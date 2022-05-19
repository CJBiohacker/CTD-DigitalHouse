package Aula2;

import java.util.Scanner;

public class exercicio3Valores {

    static String maiorValor (double a, double b, double c) {
        boolean condicaoMaiorA, condicaoMaiorB, condicaoMaiorC;
        condicaoMaiorA = (a > b) && (b > c);
        condicaoMaiorB = (b > a) && (b > c);
        condicaoMaiorC = (c > a) && (c > b);

        if (condicaoMaiorA) {
            return "A é o maior número";
        } else if (condicaoMaiorB) {
            return "B é o maior número";
        } else if (condicaoMaiorC) {
            return "C é o maior número";
        } else {
            return "Existem números iguais.";
        }
    }

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        double a, b, c;
        System.out.println("Digite o valor de A: ");
        a = entrada.nextDouble();
        System.out.println("Digite o valor de B: ");
        b = entrada.nextDouble();
        System.out.println("Digite o valor de C: ");
        c = entrada.nextDouble();

        System.out.println(maiorValor(a, b, c));

    }
}
