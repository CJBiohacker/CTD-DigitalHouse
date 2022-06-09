package Aula11.MesTrabalho;

abstract class Animal {

//   INTERFACE > CLASSE ABSTRATA > CLASSE CONCRETA > OBJETO (INSTANCIAÇÃO)

    private String nome;
    private int idade;

    public abstract void emitirSom();

    public abstract void executarHabilidade();

    public void definirNome(String nome) {
        this.nome = nome;
    }

    public void definirIdade(int idade) {
        this.idade = idade;
    }
}
