package Aula8.Exercicio;

class Medico extends Humano {
    private String matricula;
    private boolean condicao;

    public Medico(String nome, int idade, String matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
}
