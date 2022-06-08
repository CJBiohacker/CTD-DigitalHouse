package Aula10.MesaTrabalho;

class ProgramaJogo {

    public static void main(String[] args) {
        Nave axelay = new Nave(0, 0, 'N', 250.5);
        Asteroide geographos = new Asteroide(5,12,'S',5);

        axelay.irPara(1,2, 'S');
        axelay.girar('L');
        axelay.restaVida(3);

    }
}
