package Aula11.MesTrabalho;

class Preguica extends Animal {

    public Preguica(String nome, int idade) {
        super();
        super.definirNome(nome);
        super.definirIdade(idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("A preguiça adulta não emite som, pois tem muita preguiça para isso.");
    }

    @Override
    public void executarHabilidade(){
        System.out.println("Subindo na árvore !!!");
    }

    public static void main(String[] args) {

        Preguica bichoPreguica = new Preguica("Caleijado", 8);

        bichoPreguica.emitirSom();
        System.out.println();
        bichoPreguica.executarHabilidade();
    }
}
