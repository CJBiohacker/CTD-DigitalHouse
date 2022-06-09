package Aula11.MesTrabalho;

class Cavalo extends Animal {

    public Cavalo(String nome, int idade) {
        super();
        super.definirNome(nome);
        super.definirIdade(idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("Hiiiiin inhin hin iin (cavalo relinchando)");
    }

    public static void main(String[] args) {

        Cavalo peDePano = new Cavalo("Pé de Pano", 5);

        peDePano.emitirSom();
        System.out.println();
        peDePano.executarHabilidade();
    }
}
