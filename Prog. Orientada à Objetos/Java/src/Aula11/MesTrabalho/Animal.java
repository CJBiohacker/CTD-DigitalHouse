package Aula11.MesTrabalho;

abstract class Animal {

    private String nome;
    private int idade;

    public void emitirSom() {
    }

    public void executarHabilidade(){
        System.out.println("Correndo !!!");
    }

    public void definirNome(String nome) {
        this.nome = nome;
    }

    public void definirIdade(int idade) {
        this.idade = idade;
    }
}
