package Aula8.Exercicio;

class Humano {
    private String nome;
    private int idade;

    protected Humano(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    protected String definirNome() {
        return nome;
    }

    protected void consultarNome(String nome) {
        this.nome = nome;
    }

    protected int consultarIdade() {
        return idade;
    }

    protected void definirIdade(int idade) {
        this.idade = idade;
    }
}
