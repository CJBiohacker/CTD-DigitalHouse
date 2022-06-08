// EQUIPE 3 - Carlos Junior, Iraildes Nogueira, Maria Bonifácio, Roberto Castro, Jonathan Alcantara, Tiago Guerreiro

package Aula10.MesaTrabalho;

class Objeto {
    private int posx, posy;
    private char direcao;

    public Objeto(int x, int y, char direcao) {
        this.posx = x;
        this.posy = y;
        this.direcao = direcao;
    }

    public void irPara(int x, int y, char direcao) {
        System.out.println("Movimentando-se para posição x: " + x + " | y: " + y + " em direção " + direcao);
    }
}
