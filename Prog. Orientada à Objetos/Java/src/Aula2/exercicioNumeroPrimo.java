package Aula2;

public class exercicioNumeroPrimo {

    public static boolean divisaoInteira (int n, int divisor) {
        return (( n % divisor) == 0);
    }

    protected static String numPrimo (int n) {
        int numeroDivisores = 0;

        for (int i = 1; i <= n; i++) {
            var resultado = divisaoInteira(n, i);

            if (resultado) {
                numeroDivisores++;
            }
        }

        if (numeroDivisores == 2) {
            return "O número " + n + " é primo !";
        } else {
            return "O número " + n + " NÃO é primo !";
        }
    }

    public static void main(String[] args) {
        System.out.println(divisaoInteira(10, 2));
        System.out.println(divisaoInteira(15,4));

        System.out.println(numPrimo(17));
        System.out.println(numPrimo(12));
    }
}
