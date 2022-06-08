package Aula10.MesaTrabalho;

class Asteroide extends Objeto {
    private int danos;

    public Asteroide(int x, int y, char direcao, int danos) {
        super(x, y, direcao);
        this.danos = danos;
    }


}
