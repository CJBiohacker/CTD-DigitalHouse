package Aula10.MesaTrabalho;

class Nave extends Objeto {
    private double velocidade;
    private int vida = 3;

    public Nave(int x, int y, char direcao, double velocidade) {
        super(x, y, direcao);
        this.velocidade = velocidade;
    }

    public void girar(char direcao) {
        System.out.println("Girando para direção:" + direcao);
    }

    public void restaVida(int valor) {
        System.out.println(valor > 0 ? "Ainda resta " + valor + " vida(s)." : "GAME OVER");
    }

}
